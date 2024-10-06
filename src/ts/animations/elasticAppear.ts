import gsap from "gsap";
import { createObserver } from "../../helpers/createObserver";

export const elasticAppear = (selector: string) => {
  const element: Element | null = document.querySelector(selector);
  const appear = () =>
    gsap.from(element, {
      y: 0,
      opacity: 0,
      scale: 0,
      duration: 3,
      ease: "elastic.out",
    });

  createObserver(selector, appear);
};
