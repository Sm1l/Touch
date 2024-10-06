import gsap from "gsap";
import { createObserver } from "../../helpers/createObserver";

export const blurText = (selector: string) => {
  const element: Element | null = document.querySelector(selector);
  const blurTextAppear = () => {
    if (element) {
      gsap.from(element, {
        opacity: 0,
        filter: "blur(40px)",
        scale: 2,
      });

      gsap.to(element, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 2,
        ease: "power2.out",
      });
    }
  };
  createObserver(selector, blurTextAppear);
};
