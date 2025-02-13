import gsap from "gsap";

import { colors } from "../../helpers/colors";
export const waterRippleEffect = (containerSelector: string) => {
  const container: HTMLElement | null = document.querySelector(containerSelector);

  if (!container) {
    console.warn("Контейнер для анимации не найден.");
    return;
  }

  container.style.position = "relative"; // Для правильного позиционирования кругов

  const createRipple = (x: number, y: number) => {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    container.append(ripple);

    const randomColor = gsap.utils.random(colors); // Выбираем случайный цвет

    Object.assign(ripple.style, {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      width: "0px",
      height: "0px",
      borderRadius: "50%",
      border: `6px solid ${randomColor}`, // Толстая граница
      background: "transparent",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      opacity: 1,
      filter: "blur(4px)", // Размытие границ
    });

    gsap.to(ripple, {
      width: "250px",
      height: "250px",
      opacity: 0,
      borderWidth: "2px", // Граница становится тоньше при исчезновении
      duration: 1.8,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });
  };

  container.addEventListener("click", (event) => {
    const rect = container.getBoundingClientRect();
    createRipple(event.clientX - rect.left, event.clientY - rect.top);
  });

  container.addEventListener("touchstart", (event) => {
    const rect = container.getBoundingClientRect();
    const touch = event.touches[0];
    createRipple(touch.clientX - rect.left, touch.clientY - rect.top);
  });
};
