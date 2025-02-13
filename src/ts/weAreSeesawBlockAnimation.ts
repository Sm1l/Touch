import gsap from "gsap";
// import { elasticAppear } from "./animations/elasticAppear";
// import { letterFade } from "./animations/letterFade";
import { aurora } from "./animations/aurora";
import { auroraTrail } from "./animations/auroraTrail";
import { auroraCenter } from "./animations/auroraCenter";
import { checkIfTouchDevice } from "../helpers/checkIfTouchDevice";
import { waterRippleEffect } from "./animations/waterRippleEffect";

const auroraAnimation = () => {
  !checkIfTouchDevice() && auroraTrail(".weAreSeesaw");
};

export const weAreSeesawBlockAnimation = () => {
  gsap
    .timeline()
    .add(() => auroraAnimation())
    .add(() => aurora(".weAreSeesaw"))
    .add(() => auroraCenter(".weAreSeesaw"))
    .add(() => waterRippleEffect(".weAreSeesaw"));

  // .add(() => elasticAppear(".weAreTouch_imgContainer"))
  // .add(() => letterFade(".weAreTouch_title"));
};
