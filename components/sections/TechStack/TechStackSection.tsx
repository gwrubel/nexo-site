import styles from "./TechStackSection.module.css";

const technologies = ["TYPESCRIPT", "REACT", "NODE.JS", "CLOUD", "POSTGRESQL", "APIS"];

export function TechStackSection() {
  return (
    <section className={styles.stack} aria-label="Tecnologias">
      <div className={styles.track}>
        {[...technologies, ...technologies].map((technology, index) => {
          const duplicate = index >= technologies.length;
          return (
            <span className={styles.item} key={`${technology}-${index}`} aria-hidden={duplicate || undefined}>
              <span>{technology}</span>
              <i aria-hidden="true">✦</i>
            </span>
          );
        })}
      </div>
    </section>
  );
}
