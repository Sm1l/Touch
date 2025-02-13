import gsap from "gsap";
import { lightColors } from "../../helpers/colors";
export const aurora = (containerSelector: string) => {
  const container: HTMLElement | null = document.querySelector(containerSelector);

  if (!container) {
    console.warn("Контейнер для анимации не найден.");
    return;
  }

  const aurora = document.createElement("div");
  aurora.classList.add("aurora");
  container.append(aurora);

  Object.assign(container.style, {
    position: "relative",
    overflow: "hidden",
  });

  Object.assign(aurora.style, {
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "radial-gradient(circle at center, rgba(0, 255, 255, 0.5))",
    filter: "blur(40px)",
    borderRadius: "50%",
    willChange: "transform, background-color, width, height",
  });

  const animateAurora = () => {
    gsap.to(aurora, {
      x: `random(-20%, 20%)`,
      y: `random(-20%, 20%)`,
      background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${gsap.utils.random(
        lightColors
      )}, rgba(0, 0, 0, 0) 70%)`,
      duration: 2,
      ease: "sine.inOut",
      onComplete: animateAurora,
    });
  };

  animateAurora();
};
