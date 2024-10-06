import { gsap } from "gsap";
import { createObserver } from "../../helpers/createObserver";

export const letterAppear = (selector: string) => {
  const textElement: Element | null = document.querySelector(selector);

  if (textElement) {
    const text = textElement.textContent;
    textElement.innerHTML = "";
    text?.split("").forEach((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";

      if (char === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = char;
      }

      span.style.transform = "translateX(-100px)";
      span.style.opacity = "0.3";
      span.style.scale = "0.3";
      span.classList.add("letter");
      textElement.append(span);
    });

    const letters = textElement.querySelectorAll(".letter");

    const animateLetters = () => {
      letters.forEach((letter, index) => {
        gsap.to(letter, {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          delay: index * 0.05,
          ease: "bounce.out",
        });
      });
    };

    createObserver(selector, animateLetters);
  }
};
