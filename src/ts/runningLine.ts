import { gsap } from "gsap";

export const runningLine = (id: string, side: "left" | "right" = "right") => {
  const runningLineEl: HTMLElement | null = document.getElementById(id);

  if (runningLineEl) {
    const runningLineElWidth = runningLineEl.offsetWidth;

    const clone = runningLineEl.cloneNode(true) as HTMLElement;
    runningLineEl.after(clone);

    clone.style.position = "absolute";
    clone.style.left = side === "right" ? `-${runningLineElWidth}px` : `${runningLineElWidth}px`;
    clone.style.whiteSpace = "nowrap";

    const xValue = side === "right" ? runningLineElWidth : -runningLineElWidth;

    const animation = gsap.to([runningLineEl, clone], {
      x: xValue,
      duration: 30,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: (x: string) => `${parseFloat(x) % runningLineElWidth}px`,
      },
    });

    const parentEl = runningLineEl.parentElement;

    parentEl?.addEventListener("mouseenter", () => {
      animation.timeScale(0.5);
    });

    parentEl?.addEventListener("mouseleave", () => {
      animation.timeScale(1.0);
    });
  }
};
