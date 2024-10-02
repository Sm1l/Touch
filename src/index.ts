import { runningLine } from "./ts/runningLine";
import { elasticAppearAnimation } from "./ts/elasticAppearAnimation";
import { letterAppear } from "./ts/letterAppear";
import { wordAppear } from "./ts/wordAppear";
import { letterFade } from "./ts/letterFade";

document.addEventListener("DOMContentLoaded", () => {
  letterFade(".weAreTouch_title");
  elasticAppearAnimation(".weAreTouch_imgContainer");

  wordAppear(".makeAProduct_text");
  letterFade(".makeAProduct_span");
  wordAppear(".makeAProduct_text2");

  wordAppear(".whatWeDo_title");
  letterFade(".whatWeDo_text_span");
  // wordAppear(".whatWeDo_text");

  letterAppear(".ourDesign_title");
  runningLine("lineOne", "right");
  runningLine("lineTwo", "left");
  runningLine("lineThree", "right");
});
