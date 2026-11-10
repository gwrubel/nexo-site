// Uso: node render-html.mjs <url> <saida-sem-extensao> [largura] [altura]
// Gera <saida>-hero.png (viewport) e <saida>-full.png (página inteira) via Edge headless + CDP.
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url, out, w = "1440", h = "900"] = process.argv.slice(2);
const width = Number(w), height = Number(h);
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const port = 9333;
const profile = mkdtempSync(join(tmpdir(), "cap-"));

const browser = spawn(edge, [
  "--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
  "--hide-scrollbars", "--no-first-run", "--disable-extensions", "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
  await sleep(200);
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    target = list.find((t) => t.type === "page");
  } catch {}
}
if (!target) throw new Error("Edge não abriu a porta de depuração");

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let id = 0;
const pending = new Map();
ws.addEventListener("message", (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const i = ++id;
  pending.set(i, (m) => (m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result)));
  ws.send(JSON.stringify({ id: i, method, params }));
});
const evaluate = async (expression) =>
  (await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true })).result.value;

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url });
await sleep(6000);

// Rola a página toda para disparar lazy-load e animações de entrada, depois volta ao topo.
await evaluate(`(async () => {
  const step = innerHeight * 0.7;
  for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
    scrollTo(0, y); await new Promise(r => setTimeout(r, 350));
  }
  scrollTo(0, 0); await new Promise(r => setTimeout(r, 1500));
})()`);

const hero = await send("Page.captureScreenshot", { format: "png" });
writeFileSync(`${out}-hero.png`, Buffer.from(hero.data, "base64"));

const fullHeight = await evaluate("document.documentElement.scrollHeight");
const full = await send("Page.captureScreenshot", {
  format: "png", captureBeyondViewport: true,
  clip: { x: 0, y: 0, width, height: fullHeight, scale: 1 },
});
writeFileSync(`${out}-full.png`, Buffer.from(full.data, "base64"));
console.log(JSON.stringify({ width, height, fullHeight }));

ws.close();
browser.kill();
