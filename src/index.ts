import { runningLine } from "./ts/runningLine";

document.addEventListener("DOMContentLoaded", () => {
  runningLine("lineOne", "right");
  runningLine("lineTwo", "left");
  runningLine("lineThree", "right");
});
