import { gsap } from "gsap";

export const letterFade = (selector: string) => {
  const textElement: Element | null = document.querySelector(selector);

  if (textElement) {
    const text = textElement.textContent;
    textElement.innerHTML = ""; // Очищаем элемент от текста
    text?.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.transform = "translateY(-100px)";
      span.style.opacity = "0";
      span.classList.add("letter");
      textElement.append(span);
    });

    const letters = textElement.querySelectorAll(".letter");

    // Функция анимации
    const animateLetters = () => {
      letters.forEach((letter, index) => {
        gsap.to(letter, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "bounce.out",
        });
      });
    };

    // Создаем экземпляр Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLetters();
          observer.unobserve(entry.target);
        }
      });
    });

    // Начинаем отслеживать элемент
    observer.observe(textElement);
  }
};
