import { SectionLabel } from "@/components/shared/SectionLabel/SectionLabel";
import styles from "./ServicesSection.module.css";
import { ArrowRight, Gauge, Boxes, Workflow, PanelsTopLeft } from "lucide-react";

const services = [
  {
    index: "01",
    icon: PanelsTopLeft,
    title: "Sistemas sob medida",
    description:
      "Desenvolvimento de sistemas web para organizar processos, centralizar informações e facilitar a operação do seu negócio.",
    tags: ["Sistemas internos", "Painéis", "Portais"],
  },
  {
    index: "02",
    icon: Workflow,
    title: "Automação de processos",
    description:
      "Automatizamos tarefas repetitivas e conectamos ferramentas para reduzir trabalho manual, erros e perda de tempo.",
    tags: ["Integrações", "APIs", "Automação"],
  },
  {
    index: "03",
    icon: Boxes,
    title: "Sites & produtos digitais",
    description:
      "Criação de sites, plataformas e MVPs com foco em experiência, clareza e resultados para o negócio.",
    tags: ["Sites", "MVP", "UX/UI"],
  },
  {
    index: "04",
    icon: Gauge,
    title: "Evolução de sistemas",
    description:
      "Melhoria de sistemas existentes para aumentar velocidade, estabilidade, segurança e capacidade de crescimento.",
    tags: ["Performance", "Cloud", "Manutenção"],
  },
];
export function ServicesSection() {
  return (
    <section className={styles.services} id="servicos">
      <div className={styles.intro} data-reveal>
        <div>
          <SectionLabel>01 / Serviços</SectionLabel>

          <h2>
            Código com propósito.
            <br />
            <em>Solução para evoluir.</em>
          </h2>
        </div>

        <p>
          Antes de desenvolver, entendemos o processo, o problema e o objetivo do negócio.
          Assim, cada solução é construída para gerar eficiência, clareza e resultado.
        </p>
      </div>

      <div className={styles.grid} data-spotlight>
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              className={styles.card}
              key={service.index}
              data-reveal
              data-reveal-delay={index + 1}
            >
              <span className={styles.accent} aria-hidden="true" />

              <div className={styles.cardTop}>
                <Icon
                  className={styles.icon}
                  size={30}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />

                <small>{service.index}</small>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul aria-label={`Especialidades de ${service.title}`}>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <a
                className={styles.cta}
                href="#contato"
                aria-label={`Conversar sobre ${service.title.toLowerCase()}`}
              >
                <span>
                  Conversar sobre isso
                  <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
