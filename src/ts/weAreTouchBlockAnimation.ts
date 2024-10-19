import gsap from "gsap";
import { elasticAppear } from "./animations/elasticAppear";
import { letterFade } from "./animations/letterFade";
import { aurora } from "./animations/aurora";
import { auroraTrail } from "./animations/auroraTrail";
import { auroraCenter } from "./animations/auroraCenter";
import { checkIfNotTouchDevice } from "../helpers/checkIfNotTouchDevice";
import { checkIfTouchDevice } from "../helpers/checkIfTouchDevice";

const auroraAnimation = () => {
  !checkIfTouchDevice() && auroraTrail(".weAreTouch");
};

export const weAreTouchBlockAnimation = () => {
  gsap
    .timeline()
    .add(() => auroraAnimation())
    .add(() => aurora(".weAreTouch"))
    .add(() => auroraCenter(".weAreTouch"))
    .add(() => elasticAppear(".weAreTouch_imgContainer"))
    .add(() => letterFade(".weAreTouch_title"));
};
