import gsap from "gsap";
import { colors } from "../../helpers/colors";

export const auroraCenter = (containerSelector: string) => {
  const container: HTMLElement | null = document.querySelector(containerSelector);

  if (!container) {
    console.warn("Контейнер для анимации не найден.");
    return;
  }

  Object.assign(container.style, {
    position: "relative",
    overflow: "hidden",
  });

  const createAuroraElement = (initialSize: number) => {
    const aurora = document.createElement("div");
    aurora.classList.add("aurora");
    container.append(aurora);

    Object.assign(aurora.style, {
      width: `${initialSize}px`,
      height: `${initialSize}px`,
      position: "absolute",
      borderRadius: "50%",
      background: `radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0) 70%)`,
      filter: "blur(30px)",
      willChange: "transform, background-color, width, height",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    });

    const animateSizeColor = () => {
      const randomColor = gsap.utils.random(colors);
      const newSize = gsap.utils.random(150, 250);
      const randomDuration = gsap.utils.random(1, 4);

      // Анимация изменения цвета и размера
      gsap.to(aurora, {
        background: `radial-gradient(circle at 50% 50%, ${randomColor}, rgba(255, 0, 255, 0) 70%)`,
        width: `${newSize}px`,
        height: `${newSize}px`,
        duration: randomDuration,
        ease: "power1.inOut",
        onComplete: animateSizeColor,
      });
    };
    const animatePosition = () => {
      // Рандомные координаты для движения
      const randomX = gsap.utils.random(-container.clientWidth / 2, container.clientWidth / 2);
      const randomY = gsap.utils.random(-container.clientHeight / 2, container.clientHeight / 2);
      const randomDuration = gsap.utils.random(3, 6);
      // Анимация движения пятна
      gsap.to(aurora, {
        x: randomX,
        y: randomY,
        duration: randomDuration,
        ease: "none",
        onComplete: () => {
          animatePosition();
        },
      });
    };

    const animateAurora = () => {
      animatePosition();
      animateSizeColor();
    };

    // Запускаем анимацию пятна
    animateAurora();
  };

  // Создаем 5 пятен в центре экрана
  const spotCount = 5;
  for (let i = 0; i < spotCount; i++) {
    createAuroraElement(gsap.utils.random(150, 350)); // Размер пятна
  }
};
