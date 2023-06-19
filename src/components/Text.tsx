import { createStyleObject } from "@capsizecss/core";
import { styled, theme } from "../../stitches.config";
import fontMetrics from "@capsizecss/metrics/inter";

const parsePx = (value: string) => parseInt(value.replace("px", ""), 10);

const createFontSizeVariant = (size: keyof typeof theme.fontSizes) => {
  const fontSize = parsePx(theme.fontSizes[size].value);
  const leading = parsePx(theme.lineHeights[size].value);

  const styles = createStyleObject({
    fontSize,
    leading,
    fontMetrics,
  });

  return {
    fontSize: styles.fontSize,
    lineHeight: styles.lineHeight,
    "&::before": {
      ...styles["::before"],
    },
    "&::after": {
      ...styles["::after"],
    },
  };
};

export const Text = styled("p", {
  fontWeight: 600,
  color: "$content",
  backgroundColor: "$highlight",

  variants: {
    size: {
      xsmall: {
        ...createFontSizeVariant("xsmall"),
      },
      small: {
        ...createFontSizeVariant("small"),
      },
      medium: {
        ...createFontSizeVariant("medium"),
      },
      large: {
        ...createFontSizeVariant("large"),
      },
      xlarge: {
        ...createFontSizeVariant("xlarge"),
      },
    },
  },
});
