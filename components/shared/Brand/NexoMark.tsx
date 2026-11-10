type NexoMarkProps = {
  className?: string;
  /** Texto para leitores de tela; sem ele o símbolo é decorativo. */
  title?: string;
};

/**
 * Símbolo da Nexo: duas hastes, a diagonal do "N" (já recortada entre elas)
 * e o ponto quadrado. Usa currentColor, então herda a cor do texto.
 */
export function NexoMark({ className, title }: NexoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <rect x="8" y="10" width="16" height="80" />
      <rect x="58" y="10" width="16" height="80" />
      <polygon points="28,16.4 54,58 54,83.6 28,42" />
      <rect x="82" y="80" width="10" height="10" />
    </svg>
  );
}
