"use client";

import { useEffect } from "react";
import styles from "./SiteInteractions.module.css";

export function SiteInteractions() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const spotlightGroups = Array.from(document.querySelectorAll<HTMLElement>("[data-spotlight]"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-site-nav] a[href^='#']"),
    );

    const onScroll = () => header?.toggleAttribute("data-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Spotlight doesn't move anything, so it stays on with reduced motion. Every child
    // gets coordinates relative to itself, letting the glow spill across neighbours.
    const spotlightCleanups = spotlightGroups.map((group) => {
      const move = (event: PointerEvent) => {
        Array.from(group.children as HTMLCollectionOf<HTMLElement>).forEach((item) => {
          const rect = item.getBoundingClientRect();
          item.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
          item.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
        });
      };
      group.addEventListener("pointermove", move, { passive: true });
      return () => group.removeEventListener("pointermove", move);
    });

    if (reducedMotion) {
      revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onPointerMove);
        spotlightCleanups.forEach((cleanup) => cleanup());
      };
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-visible", "true");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.14 },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${entry.target.id}`;
            link.toggleAttribute("data-active", isActive);
            if (isActive) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-38% 0px -52%", threshold: 0 },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const tiltCleanups = tiltItems.map((item) => {
      const move = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        item.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
        item.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
        item.style.setProperty("--spot-x", `${x * 100}%`);
        item.style.setProperty("--spot-y", `${y * 100}%`);
      };
      const leave = () => {
        item.style.setProperty("--tilt-x", "0deg");
        item.style.setProperty("--tilt-y", "0deg");
        item.style.setProperty("--spot-x", "50%");
        item.style.setProperty("--spot-y", "50%");
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    const magneticCleanups = magneticItems.map((item) => {
      const move = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        item.style.setProperty("--magnetic-x", `${x * 0.14}px`);
        item.style.setProperty("--magnetic-y", `${y * 0.14}px`);
      };
      const leave = () => {
        item.style.setProperty("--magnetic-x", "0px");
        item.style.setProperty("--magnetic-y", "0px");
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      revealObserver.disconnect();
      sectionObserver.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      magneticCleanups.forEach((cleanup) => cleanup());
      spotlightCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div className={styles.pointerGlow} aria-hidden="true" />;
}
