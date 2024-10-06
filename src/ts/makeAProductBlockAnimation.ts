import gsap from "gsap";
import { wordAppear } from "./animations/wordAppear";
import { letterFade } from "./animations/letterFade";

export const makeAProductBlockAnimation = () => {
  gsap
    .timeline()
    .add(() => wordAppear(".makeAProduct_text"))
    .add(() => wordAppear(".makeAProduct_text2"), "+=0.5")
    .add(() => letterFade(".makeAProduct_span"), "+=1");
};
