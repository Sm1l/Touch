import gsap from "gsap";
import { colors } from "../../helpers/colors";

export const trail = () => {
  const background: HTMLElement | null = document.querySelector(".weAreTouch");

  if (background) {
    const fragmentPool: HTMLDivElement[] = [];
    const fragmentCount = 30;
    let lastTrailTime = 0;

    function createFragment(): HTMLDivElement {
      const fragment = document.createElement("div");
      fragment.classList.add("trail-fragment");
      fragment.style.position = "absolute";
      fragment.style.width = "40px";
      fragment.style.height = "40px";
      fragment.style.borderRadius = "50%";
      fragment.style.filter = "blur(2px)";
      fragment.style.willChange = "transform, opacity";
      background?.append(fragment);
      return fragment;
    }

    for (let i = 0; i < fragmentCount; i++) {
      fragmentPool.push(createFragment());
    }

    function getFragmentFromPool(): HTMLDivElement {
      const fragment = fragmentPool.find((frag) => frag.style.opacity === "0");
      return fragment || createFragment();
    }

    function createTrail(x: number, y: number) {
      const fragment = getFragmentFromPool();
      const randomColor = gsap.utils.random(colors);

      gsap.set(fragment, {
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: randomColor,
        opacity: 1,
      });

      gsap.to(fragment, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        scale: 6,
        opacity: 0,
        filter: "blur(6px)",
        duration: 4,
        ease: "power2.out",
        onComplete: () => {
          fragment.style.opacity = "0";
        },
      });
    }

    background.addEventListener("mousemove", (event: MouseEvent) => {
      const now = performance.now();
      if (now - lastTrailTime > 30) {
        const rect = background.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        createTrail(x, y);
        lastTrailTime = now;
      }
    });
  }
};
