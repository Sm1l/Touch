import gsap from "gsap";
import { waterRippleEffect } from "./animations/waterRippleEffect";

export const wrapperAnimation = () => {
  gsap.timeline().add(() => waterRippleEffect(".wrapper"));
};
