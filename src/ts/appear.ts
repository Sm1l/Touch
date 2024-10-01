import gsap from "gsap";

export const appearAnimation = (selector: string) => {
  gsap.to(selector, {
    y: 0,
    opacity: 1,
    x: 300,
    duration: 4,
    ease: "power3.out",
  });
};
