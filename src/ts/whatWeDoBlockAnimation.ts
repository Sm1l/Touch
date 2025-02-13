import gsap from "gsap";
// import { wordAppear } from "./animations/wordAppear";
// import { blurText } from "./animations/blurText";
import { waterRippleEffect } from "./animations/waterRippleEffect";

export const whatWeDoBlockAnimation = () => {
  gsap
    .timeline()
    // .add(() => wordAppear(".whatWeDo_title"))
    // .add(() => blurText(".whatWeDo_textContainer"), "+=1")
    .add(() => waterRippleEffect(".whatWeDo"));
};
