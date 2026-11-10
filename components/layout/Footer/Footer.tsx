import { Brand } from "@/components/shared/Brand/Brand";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#inicio" aria-label="Voltar ao início">
        <Brand />
      </a>
      <p>{site.tagline}</p>
      <div className={styles.links}>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="#inicio">Topo ↑</a>
      </div>
      <small>
        © 2026 {site.name} · {site.city}, {site.regionName}. Desenvolvido por {site.founder}.
      </small>
    </footer>
  );
}
