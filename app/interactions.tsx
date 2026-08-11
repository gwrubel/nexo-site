"use client";

import { useEffect, useState } from "react";

const labModes = [
  {
    key: "build",
    label: "Build",
    index: "01",
    title: "Do problema ao plano.",
    detail: "Objetivos, fluxos e arquitetura alinhados antes da primeira linha de código.",
    status: "ESTRATÉGIA PRONTA",
    progress: 36,
  },
  {
    key: "code",
    label: "Code",
    index: "02",
    title: "Engenharia em movimento.",
    detail: "Interfaces, integrações e regras de negócio construídas com qualidade e ritmo.",
    status: "SISTEMA ONLINE",
    progress: 72,
  },
  {
    key: "solve",
    label: "Solve",
    index: "03",
    title: "Resultado que evolui.",
    detail: "Métricas reais orientam os próximos ciclos de melhoria, performance e escala.",
    status: "IMPACTO MEDIDO",
    progress: 100,
  },
];

export function SiteInteractions() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("nav a[href^='#']"));

    const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onPointerMove);
      };
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-38% 0px -52%", threshold: 0 },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const tiltCleanups = tiltItems.map((item) => {
      const move = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        item.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
        item.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
        item.style.setProperty("--spot-x", `${x * 100}%`);
        item.style.setProperty("--spot-y", `${y * 100}%`);
      };
      const leave = () => {
        item.style.setProperty("--tilt-x", "0deg");
        item.style.setProperty("--tilt-y", "0deg");
        item.style.setProperty("--spot-x", "50%");
        item.style.setProperty("--spot-y", "50%");
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    const magneticCleanups = magneticItems.map((item) => {
      const move = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        item.style.setProperty("--magnetic-x", `${x * 0.14}px`);
        item.style.setProperty("--magnetic-y", `${y * 0.14}px`);
      };
      const leave = () => {
        item.style.setProperty("--magnetic-x", "0px");
        item.style.setProperty("--magnetic-y", "0px");
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      revealObserver.disconnect();
      sectionObserver.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      magneticCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div className="pointer-glow" aria-hidden="true" />;
}

export function LabVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMode = labModes[activeIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setActiveIndex((current) => (current + 1) % labModes.length),
      4600,
    );
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={`lab-visual mode-${activeMode.key}`} data-tilt>
      <div className="lab-orbit lab-orbit-one" aria-hidden="true" />
      <div className="lab-orbit lab-orbit-two" aria-hidden="true" />
      <div className="lab-glow" aria-hidden="true" />

      <div className="lab-logo-stage">
        <img src="/wrubel-mark.png" alt="Símbolo da Wrubel Labs" />
        <div className="scan-line" aria-hidden="true" />
        <span className="corner corner-a" aria-hidden="true" />
        <span className="corner corner-b" aria-hidden="true" />
        <small>WRUBEL.OS / ACTIVE</small>
      </div>

      <div className="lab-console" aria-live="polite">
        <div className="console-head">
          <span>{activeMode.index} / 03</span>
          <strong>{activeMode.status}</strong>
          <i aria-hidden="true" />
        </div>
        <h2>{activeMode.title}</h2>
        <p>{activeMode.detail}</p>
        <div className="console-progress" aria-label={`Progresso ${activeMode.progress}%`}>
          <span style={{ width: `${activeMode.progress}%` }} />
        </div>
        <div className="lab-tabs" role="tablist" aria-label="Etapas do método Wrubel Labs">
          {labModes.map((mode, index) => (
            <button
              key={mode.key}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <small>0{index + 1}</small>
              {mode.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
