import gsap from "gsap";

import { letterAppear } from "./animations/letterAppear";
import { runningLine } from "./animations/runningLine";
import { blurText } from "./animations/blurText";

export const ourDesignBlockAnimation = () => {
  gsap
    .timeline()
    .add(() => {
      runningLine("#lineOne", "right");
      runningLine("#lineTwo", "left");
      runningLine("#lineThree", "right");
    })
    .add(() => letterAppear(".ourDesign_title"))
    .add(() => blurText("#lineOne"), "+=0.3")
    .add(() => blurText("#lineTwo"), "+=0.3")
    .add(() => blurText("#lineThree"), "+=0.3");
};
