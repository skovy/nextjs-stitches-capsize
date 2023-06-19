import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    colors: {
      surface: "#fefae0",
      content: "#283618",
      highlight: "#dda15e",
    },
    space: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
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
