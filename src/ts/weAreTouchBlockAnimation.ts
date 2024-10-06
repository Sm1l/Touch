import gsap from "gsap";
import { elasticAppear } from "./animations/elasticAppear";
import { letterFade } from "./animations/letterFade";
import { trail } from "./animations/trail";

export const weAreTouchBlockAnimation = () => {
  gsap
    .timeline()
    .add(() => trail())
    .add(() => elasticAppear(".weAreTouch_imgContainer"))
    .add(() => letterFade(".weAreTouch_title"));
};
