import { gsap } from "gsap";

export const runningLine = () => {
  const runningLineEl: HTMLElement | null = document.querySelector(
    ".ourDesign_textContainer .ourDesign_singleTextContainer"
  );

  if (runningLineEl) {
    const runningLineElWidth = runningLineEl.offsetWidth;
    const clone = runningLineEl.cloneNode(true);
    //  document.body.appendChild(clone);

    gsap.to(runningLineEl, {
      x: -runningLineElWidth,
      duration: 10,
      repeat: -1,
      ease: "none",
    });

    // Обновляем позицию элементов при каждом повторении анимации
    gsap.to(runningLineEl, {
      onComplete: () => {
        runningLineEl.style.transform = `translateX(${runningLineElWidth}px)`;
      },
    });
  }
};
