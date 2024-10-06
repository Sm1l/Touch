import { gsap } from "gsap";
import { createObserver } from "../../helpers/createObserver";
export const wordAppear = (selector: string) => {
  const textElement: Element | null = document.querySelector(selector);

  if (textElement) {
    const text = textElement.textContent;
    textElement.innerHTML = "";

    const wordsArray = text?.match(/\S+|\s/g);

    wordsArray?.forEach((word) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.whiteSpace = "nowrap";

      if (word === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = word;
      }

      span.style.transform = "translateX(-100px)";
      span.style.opacity = "0.3";
      span.style.scale = "0.3";
      span.classList.add("word");
      textElement.append(span);
    });

    const words = textElement.querySelectorAll(".word");

    const animateWords = () => {
      words.forEach((word, index) => {
        gsap.to(word, {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          delay: index * 0.05,
          ease: "bounce.out",
        });
      });
    };
    createObserver(selector, animateWords);
  }
};
