import { runningLine } from "./ts/runningLine";
import { appearAnimation } from "./ts/appear";
import { letterFade } from "./ts/letterFade";

document.addEventListener("DOMContentLoaded", () => {
  //   appearAnimation(".makeAProduct_title");
  letterFade(".makeAProduct_span");
  letterFade(".whatWeDo_text_span");
  runningLine("lineOne", "right");
  runningLine("lineTwo", "left");
  runningLine("lineThree", "right");
});
