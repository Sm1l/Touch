export const createObserver = (selector: string, animationFunction: () => void) => {
  const element: Element | null = document.querySelector(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animationFunction();
        observer.unobserve(entry.target);
      }
    });
  });

  if (element) {
    observer.observe(element);
  }
};
