import type { ReactNode } from "react";
import styles from "./SectionLabel.module.css";

type SectionLabelProps = {
  children: ReactNode;
  dark?: boolean;
};

export function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return <span className={`${styles.label} ${dark ? styles.dark : ""}`}>{children}</span>;
}
