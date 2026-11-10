import type { ReactNode } from "react";
import styles from "./ActionLink.module.css";

type ActionLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export function ActionLink({ href, variant = "primary", children }: ActionLinkProps) {
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href}>
      {children}
    </a>
  );
}
