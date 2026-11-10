"use client";

import Image from "next/image";
import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import styles from "./ProjectsSection.module.css";
import { PHONE_RATIO, scrollDistance, type GallerySlide } from "./shots";

type ProjectGalleryProps = {
  title: string;
  slides: GallerySlide[];
};

/** Moldura com abas para alternar entre as telas de cada perfil do sistema. */
export function ProjectGallery({ title, slides }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const slide = slides[active];
  const isPhone = slide.device === "phone";

  function select(index: number) {
    const next = (index + slides.length) % slides.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") select(active + 1);
    if (event.key === "ArrowLeft") select(active - 1);
  }

  const image = (
    <Image
      key={slide.src}
      className={slide.scroll ? styles.scrollShot : styles.shot}
      src={slide.src}
      alt={slide.alt}
      width={slide.width}
      height={slide.height}
      sizes={isPhone ? "(max-width: 820px) 40vw, 16vw" : "(max-width: 820px) 100vw, 60vw"}
      style={
        slide.scroll
          ? ({
              "--scroll-distance": scrollDistance(slide, isPhone ? PHONE_RATIO : undefined),
            } as CSSProperties)
          : undefined
      }
    />
  );

  return (
    <div className={styles.gallery}>
      <div className={styles.frame} data-tilt>
        <div className={styles.bar} aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{slide.address}</span>
        </div>
        <div
          className={`${styles.screen} ${isPhone ? styles.stage : ""}`}
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          tabIndex={0}
        >
          {isPhone ? (
            <div className={styles.phone} key={slide.src}>
              <div className={styles.phoneScreen}>{image}</div>
            </div>
          ) : (
            image
          )}
        </div>
        {slide.scroll && (
          <span className={styles.hint} aria-hidden="true">
            Passe o mouse para rolar ↓
          </span>
        )}
      </div>

      <div
        className={styles.tabs}
        role="tablist"
        aria-label={`Telas do ${title}`}
        onKeyDown={onKeyDown}
      >
        {slides.map((item, index) => (
          <button
            key={item.src}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
          >
            <strong>{item.label}</strong>
            <small>{item.platform}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
