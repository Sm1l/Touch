export function checkIfNotTouchDevice(animation: () => void) {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  const hasTouchPoints = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;

  if (!isTouchDevice && !hasTouchPoints) {
    animation();
  }
}
