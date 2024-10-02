import gsap from "gsap";

export const elasticAppearAnimation = (selector: string) => {
  const element: Element | null = document.querySelector(selector);
  const elasticAppear = () =>
    gsap.from(element, {
      y: 0,
      opacity: 0,
      scale: 0,
      duration: 3,
      ease: "elastic.out",
    });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        elasticAppear();
        observer.unobserve(entry.target);
      }
    });
  });

  if (element) {
    observer.observe(element);
  }
};
