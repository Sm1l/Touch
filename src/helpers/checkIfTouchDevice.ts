export function checkIfTouchDevice() {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  const hasTouchPoints = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;

  if (isTouchDevice && hasTouchPoints) {
    return true;
  } else {
    return false;
  }
}
