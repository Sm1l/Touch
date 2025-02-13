import gsap from "gsap";
import { waterRippleEffect } from "./animations/waterRippleEffect";

export const contactsBlockAnimation = () => {
  gsap.timeline().add(() => waterRippleEffect(".contacts"));
};
