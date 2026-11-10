import { Brand } from "@/components/shared/Brand/Brand";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header} data-site-header>
      <a className={styles.brandLink} href="#inicio" aria-label="Nexo — início">
        <Brand />
      </a>
      <nav className={styles.nav} aria-label="Navegação principal" data-site-nav>
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
      </nav>
      <a className={styles.contact} href="#contato" data-magnetic>
        Entrar em contato <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
