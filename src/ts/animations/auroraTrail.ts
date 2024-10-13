import gsap from "gsap";
import { someColors } from "../../helpers/colors";

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

  const createAuroraElement = () => {
    const aurora = document.createElement("div");
    aurora.classList.add("aurora");
    container.append(aurora);

    const initialSize = gsap.utils.random(150, 400);
    Object.assign(aurora.style, {
      width: `${initialSize}px`,
      height: `${initialSize}px`,
      display: "flex",
      alignItems: "center",
      position: "absolute",
      borderRadius: "50%",
      background: `radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0) 70%)`,
      filter: "blur(15px)",
      willChange: "transform, background-color, width, height",
    });

    gsap.set(aurora, {
      x: (container.clientWidth - initialSize) / 2,
      y: container.clientHeight / 2 - initialSize,
    });

    const animateToCursor = () => {
      if (mouseInside) {
        const duration = gsap.utils.random(1, 1.3);
        gsap.to(aurora, {
          x: mouseX - initialSize / 2,
          y: mouseY - initialSize,
          duration: duration,
          ease: "power1.out",
          onComplete: animateToCursor,
        });
      } else {
        requestAnimationFrame(animateToCursor);
      }
    };

    const animateAurora = () => {
      gsap.to(aurora, {
        background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${gsap.utils.random(
          someColors
        )}, rgba(0, 0, 0, 0) 70%)`,
        duration: gsap.utils.random(1, 2),
        ease: "sine.inOut",
        onComplete: animateAurora,
        scaleX: gsap.utils.random(1, 2),
        scaleY: gsap.utils.random(1, 2),
      });
    };

    animateAurora();
    animateToCursor();
  };

  const auroraCount = 7;
  for (let i = 0; i < auroraCount; i++) {
    createAuroraElement();
  }
};
