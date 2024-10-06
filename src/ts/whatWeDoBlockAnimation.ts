import gsap from "gsap";
import { wordAppear } from "./animations/wordAppear";
import { letterFade } from "./animations/letterFade";
import { blurText } from "./animations/blurText";

export const whatWeDoBlockAnimation = () => {
  gsap
    .timeline()
    .add(() => wordAppear(".whatWeDo_title"))
    .add(() => blurText(".whatWeDo_textContainer"), "+=1")
    .add(() => letterFade(".whatWeDo_text_span"), "+=2");
};
