import { NexoMark } from "./NexoMark";
import styles from "./Brand.module.css";

type BrandProps = {
  /** Só o símbolo, grande (seções Sobre e Contato). */
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  if (compact) {
    return (
      <span className={`${styles.lockup} ${styles.compact}`}>
        <NexoMark className={styles.mark} />
      </span>
    );
  }

  return (
    <span className={styles.lockup}>
      <NexoMark className={styles.mark} />
      <i className={styles.divider} aria-hidden="true" />
      <span className={styles.word}>Nexo</span>
    </span>
  );
}
