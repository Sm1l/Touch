// import { makeAProductBlockAnimation } from "./ts/makeAProductBlockAnimation";
import { weAreSeesawBlockAnimation } from "./ts/weAreSeesawBlockAnimation";
// import { whatWeDoBlockAnimation } from "./ts/whatWeDoBlockAnimation";
import { ourDesignBlockAnimation } from "./ts/ourDesignBlockAnimation";
import { wrapperAnimation } from "./ts/wrapperAnimation";
import { HowWeDoSlider } from "./ts/howWeDoSlider";

document.addEventListener("DOMContentLoaded", () => {
  weAreSeesawBlockAnimation();
  // makeAProductBlockAnimation();
  // whatWeDoBlockAnimation();
  ourDesignBlockAnimation();
  wrapperAnimation();
  HowWeDoSlider();
});
