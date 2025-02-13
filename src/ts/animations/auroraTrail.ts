import gsap from "gsap";
import { colors } from "../../helpers/colors";

export const auroraTrail = (containerSelector: string) => {
  const container: HTMLElement | null = document.querySelector(containerSelector);

  if (!container) {
    console.warn("Контейнер для анимации не найден.");
    return;
  }

  Object.assign(container.style, {
    position: "relative",
    overflow: "hidden",
  });

  let mouseX = 0;
  let mouseY = 0;
  let mouseInside = false;
  let rect = container.getBoundingClientRect();

  const updateRect = () => {
    rect = container.getBoundingClientRect();
  };

  window.addEventListener("resize", updateRect);
  container.addEventListener("mousemove", (event) => {
    updateMousePosition(event);
  });

  const updateMousePosition = (event: MouseEvent) => {
    if (mouseInside) {
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    }
  };

  container.addEventListener("mousemove", updateMousePosition);

  container.addEventListener("mouseleave", () => {
    mouseInside = false;
    const auroras = container.querySelectorAll(".aurora");

    auroras.forEach((aurora) => {
      const el = aurora as HTMLElement;

      gsap.to(el, {
        x: (container.clientWidth - el.offsetWidth) / 2,
        y: container.clientHeight / 2 - el.offsetHeight,
        duration: 1,
        ease: "power1.out",
      });
    });
  });

  container.addEventListener("mouseenter", () => {
    mouseInside = true;
  });

  const createAuroraElement = (size: number, speed: number) => {
    const aurora = document.createElement("div");
    aurora.classList.add("aurora");
    container.append(aurora);

    const initialSize = size;
    Object.assign(aurora.style, {
      width: `${initialSize}px`,
      height: `${initialSize}px`,
      display: "flex",
      alignItems: "center",
      position: "absolute",
      borderRadius: "50%",
      background: `radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0) 70%)`,
      filter: "blur(30px)",
      willChange: "transform, background-color, width, height",
    });

    gsap.set(aurora, {
      x: (container.clientWidth - initialSize) / 2,
      y: container.clientHeight / 2 - initialSize,
    });

    const animateToCursor = () => {
      if (mouseInside) {
        const duration = speed;
        gsap.to(aurora, {
          x: mouseX - initialSize / 2,
          y: mouseY - initialSize / 2,
          duration: duration,
          ease: "none",
          onComplete: animateToCursor,
        });
      } else {
        requestAnimationFrame(animateToCursor);
      }
    };

    const animateAurora = () => {
      gsap.to(aurora, {
        background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${gsap.utils.random(
          colors
        )}, rgba(0, 0, 0, 0) 70%)`,
        duration: gsap.utils.random(3, 4),
        ease: "sine.inOut",
        onComplete: animateAurora,
        scaleX: gsap.utils.random(1, 2),
        scaleY: gsap.utils.random(1, 2),
      });
    };

    animateAurora();
    animateToCursor();
  };

  const auroraCount = 5; // Количество мелких элементов
  for (let i = 0; i < auroraCount; i++) {
    createAuroraElement(gsap.utils.random(150, 250), gsap.utils.random(0.2, 0.5)); // Мелкие и быстрые
  }

  const bigAuroraCount = 3; // Количество крупных элементов
  for (let i = 0; i < bigAuroraCount; i++) {
    createAuroraElement(gsap.utils.random(300, 400), gsap.utils.random(0.5, 1)); // Крупные и медленные
  }
};
