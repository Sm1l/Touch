import { makeAProductBlockAnimation } from "./ts/makeAProductBlockAnimation";
import { weAreTouchBlockAnimation } from "./ts/weAreTouchBlockAnimation";
import { whatWeDoBlockAnimation } from "./ts/whatWeDoBlockAnimation";
import { ourDesignBlockAnimation } from "./ts/ourDesignBlockAnimation";

document.addEventListener("DOMContentLoaded", () => {
  weAreTouchBlockAnimation();
  makeAProductBlockAnimation();
  whatWeDoBlockAnimation();
  ourDesignBlockAnimation();
});
