"use client";

import { useEffect, useState } from "react";
import { NexoMark } from "@/components/shared/Brand/NexoMark";
import styles from "./HeroSection.module.css";

const labModes = [
  {
    key: "conecte",
    label: "Conecte",
    index: "01",
    title: "Do problema ao plano.",
    detail: "Conectamos objetivos, fluxos e arquitetura antes da primeira linha de código.",
    status: "ESTRATÉGIA PRONTA",
    progress: 36,
  },
  {
    key: "crie",
    label: "Crie",
    index: "02",
    title: "Engenharia em movimento.",
    detail: "Interfaces, integrações e regras de negócio construídas com qualidade e ritmo.",
    status: "SISTEMA ONLINE",
    progress: 72,
  },
  {
    key: "evolua",
    label: "Evolua",
    index: "03",
    title: "Resultado que evolui.",
    detail: "Métricas reais orientam os próximos ciclos de melhoria, performance e escala.",
    status: "IMPACTO MEDIDO",
    progress: 100,
  },
] as const;

export function LabVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMode = labModes[activeIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setActiveIndex((current) => (current + 1) % labModes.length),
      4600,
    );
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={styles.lab} data-mode={activeMode.key} data-tilt>
      <div className={styles.labOrbit} aria-hidden="true" />
      <div className={`${styles.labOrbit} ${styles.labOrbitTwo}`} aria-hidden="true" />
      <div className={styles.labGlow} aria-hidden="true" />

      <div className={styles.labLogoStage}>
        <NexoMark className={styles.labMark} title="Símbolo da Nexo" />
        <div className={styles.scanLine} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerA}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerB}`} aria-hidden="true" />
        <small>NEXO</small>
      </div>

      <div className={styles.labConsole} aria-live="polite">
        <div className={styles.consoleHead}>
          <span>{activeMode.index} / 03</span>
          <strong>{activeMode.status}</strong>
          <i aria-hidden="true" />
        </div>
        <strong className={styles.consoleTitle}>{activeMode.title}</strong>
        <p>{activeMode.detail}</p>
        <div className={styles.consoleProgress} aria-label={`Progresso ${activeMode.progress}%`}>
          <span style={{ width: `${activeMode.progress}%` }} />
        </div>
        <div className={styles.labTabs} role="tablist" aria-label="Etapas do método Nexo">
          {labModes.map((mode, index) => (
            <button
              key={mode.key}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              <small>0{index + 1}</small>
              {mode.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
