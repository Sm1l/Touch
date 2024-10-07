import { gsap } from "gsap";
import { createObserver } from "../../helpers/createObserver";

export const runningLine = (selector: string, side: "left" | "right" = "right") => {
  const runningLineEl: HTMLElement | null = document.querySelector(selector);

  const startRunningLine = () => {
    if (runningLineEl !== null) {
      const runningLineElWidth = runningLineEl.offsetWidth;

      const clone = runningLineEl.cloneNode(true) as HTMLElement;
      runningLineEl.after(clone);

      clone.style.position = "absolute";
      clone.style.left = side === "right" ? `-${runningLineElWidth}px` : `${runningLineElWidth}px`;
      clone.style.whiteSpace = "nowrap";

      const xValue = side === "right" ? runningLineElWidth : -runningLineElWidth;

      const animation = gsap.to([runningLineEl, clone], {
        x: xValue,
        duration: 60,
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
  createObserver(selector, startRunningLine);
};
