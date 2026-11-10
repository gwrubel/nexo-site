import Image from "next/image";
import { ActionLink } from "@/components/shared/ActionLink/ActionLink";
import { SectionLabel } from "@/components/shared/SectionLabel/SectionLabel";
import { site } from "@/lib/site";
import styles from "./AboutSection.module.css";

const profileFacts = [
  { label: "Formação", value: "Engenharia de Software · FAG" },
  { label: "Experiência", value: "4 anos desenvolvendo software" },
  { label: "Atuação", value: "Do requisito à publicação" },
  { label: "Base", value: `${site.city}, ${site.region}` },
];

const profileLinks = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
];

const processSteps = [
  {
    index: "01",
    title: "Conversa",
    description: "Entendemos sua operação e o problema antes de falar em tecnologia.",
  },
  {
    index: "02",
    title: "Proposta",
    description: "Escopo, prazo e investimento claros, por escrito, antes de começar.",
  },
  {
    index: "03",
    title: "Desenvolvimento",
    description: "Entregas em partes, para você acompanhar e ajustar no caminho.",
  },
  {
    index: "04",
    title: "Evolução",
    description: "Suporte depois da entrega e melhorias conforme o negócio cresce.",
  },
];

export function AboutSection() {
  return (
    <section className={styles.about} id="sobre">
      <aside className={styles.profile} data-reveal>
        <div className={styles.portrait} data-tilt>
          <Image
            src="/sobre/gabriel-wrubel.webp"
            alt={`${site.founder}, fundador da ${site.name}`}
            width={1254}
            height={1254}
            sizes="(max-width: 820px) 360px, 420px"
          />
          <span className={styles.tag}>Fundador</span>
        </div>

        <div className={styles.card}>
          <strong>{site.founder}</strong>
          <span>Engenheiro de software</span>
          <dl>
            {profileFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <ul aria-label={`Perfis de ${site.founder}`}>
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className={styles.content} data-reveal>
        <SectionLabel>03 / Sobre</SectionLabel>
        <h2>
          Quem está por trás.
          <br />
          <em>E como trabalhamos.</em>
        </h2>
        <div className={styles.columns}>
          <p className={styles.lead}>
            “Criei a {site.name} como um estúdio independente, para resolver problemas reais de
            negócio com software sob medida, bem estruturado e pronto para crescer.”
            <cite>{site.founder}, fundador</cite>
          </p>
          <p>
            Aqui você fala direto com quem desenvolve, do primeiro levantamento à publicação do
            sistema, sem intermediários. Isso deixa as decisões mais rápidas e mantém o projeto
            perto do que o seu negócio realmente precisa.
          </p>
        </div>

        <div className={styles.process} data-reveal>
          {processSteps.map((step) => (
            <div key={step.index}>
              <span>{step.index}</span>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <ActionLink href="#contato">Começar uma conversa</ActionLink>
        </div>
      </div>
    </section>
  );
}
