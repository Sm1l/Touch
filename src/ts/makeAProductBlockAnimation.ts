import gsap from "gsap";
import { letterFade } from "./animations/letterFade";

export const makeAProductBlockAnimation = () => {
  gsap.timeline().add(() => letterFade(".makeAProduct_span"));
};
