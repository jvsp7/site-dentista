"use client";
import { useEffect } from "react";
import Lenis from "lenis";

/** Smooth scroll com Lenis. Desligado para quem prefere menos movimento. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, anchors: { offset: 0 }, autoRaf: true });
    return () => lenis.destroy();
  }, []);
  return null;
}
