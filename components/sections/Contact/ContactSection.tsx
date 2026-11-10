import { ActionLink } from "@/components/shared/ActionLink/ActionLink";
import { Brand } from "@/components/shared/Brand/Brand";
import { SectionLabel } from "@/components/shared/SectionLabel/SectionLabel";
import { site } from "@/lib/site";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section className={styles.contact} id="contato">
      <div className={styles.copy} data-reveal>
        <SectionLabel>04 / Contato</SectionLabel>
        <h2>
          Tem um desafio?
          <br />
          <em>Vamos resolver juntos.</em>
        </h2>
        <p>
          Conte um pouco sobre a sua ideia. Retornamos para definir o melhor próximo passo.
        </p>
        <div className={styles.action}>
          <ActionLink href={`mailto:${site.email}`}>
            {site.email} <span aria-hidden="true">↗</span>
          </ActionLink>
        </div>
      </div>
      <div className={styles.visual} aria-hidden="true" data-reveal data-tilt>
        <div className={styles.rings} />
        <Brand compact />
        <span>{site.tagline.toUpperCase()}</span>
      </div>
    </section>
  );
}
