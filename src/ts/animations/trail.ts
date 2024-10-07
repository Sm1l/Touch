import gsap from "gsap";
import { colors } from "../../helpers/colors";

export const trail = () => {
  const background: Element | null = document.querySelector(".weAreTouch");
  if (background !== null) {
    background.addEventListener("mousemove", (event: Event) => {
      const e = event as MouseEvent;
      const rect = background.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createTrail(x, y);
    });

    function createTrail(x: number, y: number) {
      const fragmentCount = 4;

      for (let i = 0; i < fragmentCount; i++) {
        const fragment = document.createElement("div");
        fragment.classList.add("trail-fragment");
        background?.append(fragment);

        const randomColor = gsap.utils.random(colors);

        gsap.set(fragment, {
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: randomColor,
          opacity: 1,
          filter: "blur(4px)",
        });

        gsap.to(fragment, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          scale: 8,
          opacity: 0,
          filter: "blur(10px)",
          duration: 6,
          ease: "power1.out",
          onComplete: () => fragment.remove(),
        });
      }
    }
  }
};
