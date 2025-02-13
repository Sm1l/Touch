import gsap from "gsap";
// import { letterFade } from "./animations/letterFade";
import { waterRippleEffect } from "./animations/waterRippleEffect";

export const makeAProductBlockAnimation = () => {
  gsap
    .timeline()
    // .add(() => letterFade(".makeAProduct_span"));
    .add(() => waterRippleEffect(".makeAProduct"));
};
