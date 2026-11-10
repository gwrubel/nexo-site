import { ActionLink } from "@/components/shared/ActionLink/ActionLink";
import { LabVisual } from "./LabVisual";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.copy} data-reveal>
        <span className={styles.eyebrow}>
          <i /> Desenvolvimento de software sob medida · Cascavel, PR
        </span>
        <h1>
          Soluções digitais
          <br />
          que <em>impulsionam</em>
          <br />
          negócios.
        </h1>
        <p>
          Do planejamento ao produto final, desenvolvemos sistemas web, plataformas e soluções
          sob medida para automatizar processos e melhorar a operação do seu negócio.
        </p>
        <div className={styles.actions}>
          <ActionLink href="#contato">
            Começar um projeto <span aria-hidden="true">→</span>
          </ActionLink>
          <ActionLink href="#projetos" variant="secondary">
            Conhecer projetos
          </ActionLink>
        </div>
      </div>

      <div className={styles.visual} data-reveal>
        <LabVisual />
      </div>

      <div className={styles.foot}>
        <span>Sites</span>
        <i />
        <span>Sistemas web</span>
        <i />
        <span>Automação</span>
        <i />
        <span>Software sob medida</span>
      </div>
    </section>
  );
}
