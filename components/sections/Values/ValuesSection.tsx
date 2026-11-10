import { Code2, Crosshair, Share2, TrendingUp } from "lucide-react";
import styles from "./ValuesSection.module.css";

const values = [
  {
    icon: Share2,
    title: "Conexão",
    description: "Ligamos pessoas, ideias e sistemas de forma simples.",
  },
  {
    icon: Code2,
    title: "Clareza",
    description: "Código limpo, processos claros e entregas previsíveis.",
  },
  {
    icon: Crosshair,
    title: "Foco no cliente",
    description: "Entendemos o problema antes de propor a solução.",
  },
  {
    icon: TrendingUp,
    title: "Evolução",
    description: "Tecnologia atual para o seu negócio crescer.",
  },
];

export function ValuesSection() {
  return (
    <section className={styles.values} aria-label="Pilares da Nexo">
      {values.map((value, index) => {
        const Icon = value.icon;

        return (
          <div
            className={styles.item}
            key={value.title}
            data-reveal
            data-reveal-delay={index + 1}
          >
            <span className={styles.icon} aria-hidden="true">
              <Icon strokeWidth={1.7} />
            </span>
            <div>
              <strong>{value.title}</strong>
              <p>{value.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
