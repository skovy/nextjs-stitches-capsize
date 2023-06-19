import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    // Basic colors.
    colors: {
      surface: "#fefae0",
      content: "#283618",
      highlight: "#dda15e",
    },
    // Basic spacing scale.
    space: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
    // Basic font sizes and line heights.
    // These can be updated to the desired size/height, added/removed, etc.
    fontSizes: {
      xsmall: "12px",
      small: "14px",
      medium: "16px",
      large: "20px",
      xlarge: "24px",
    },
    lineHeights: {
      xsmall: "16px",
      small: "18px",
      medium: "21px",
      large: "26px",
      xlarge: "32px",
    },
  },
});
