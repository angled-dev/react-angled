import { keyframes } from "styled-components";

const colors = {
  primary: "#333",
  secondary: "#808080",
  confirm: "rgba(80, 220, 100, 0.9)",
  cancel: "rgba(255, 40, 0, 0.8)",
  whitegrey: "#ececec",
  darkgrey: "#9c9c9c",
  overlay: "rgba(236,236,236, 0.8)",
  blue: "rgb(0, 128, 255)",
};

const reverseColor = { primary: colors.secondary, secondary: colors.primary };
const reverseSide = { right: "left", left: "right" };

const keyframe = {
  default: keyframes`
  0% {
      background-position: 90%;
  }
  20% {
    background-position: 80%;
}
  100% {
      background-position: 0%;
  }
`,
  reverse: keyframes`
  0% {
      background-position: 0%;
  }
  20% {
    background-position: 20%;
}
  100% {
      background-position: 90%;
  }
`,
};

export { colors, reverseColor, keyframe, reverseSide };
