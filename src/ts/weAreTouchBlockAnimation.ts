import gsap from "gsap";
import { elasticAppear } from "./animations/elasticAppear";
import { letterFade } from "./animations/letterFade";
import { aurora } from "./animations/aurora";
import { auroraTrail } from "./animations/auroraTrail";

export const weAreTouchBlockAnimation = () => {
  gsap
    .timeline()
    .add(() => aurora(".weAreTouch"))
    .add(() => auroraTrail(".weAreTouch"))
    .add(() => elasticAppear(".weAreTouch_imgContainer"))
    .add(() => letterFade(".weAreTouch_title"));
};
