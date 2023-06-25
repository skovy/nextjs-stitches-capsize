import { createStyleObject } from "@capsizecss/core";
import { styled, theme } from "../../stitches.config";
import fontMetrics from "@capsizecss/metrics/inter";

// Convert a string pixel value like "16px" to a number like 16.
const parsePx = (value: string) => parseInt(value.replace("px", ""), 10);

/**
 * Given a font size from the Stitches theme, create a font size variant
 * using Capsize that is compatible with Stitches styling.
 */
const createFontSizeVariant = (size: keyof typeof theme.fontSizes) => {
  // Parse the font size and line height from the Stitches theme.
  const fontSize = parsePx(theme.fontSizes[size].value);
  const leading = parsePx(theme.lineHeights[size].value);

  // Create a CSS style object using Capsize.
  const styles = createStyleObject({
    fontSize,
    leading,
    fontMetrics,
  });

  // Convert the CSS style object into a Stitches style object.
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

  // Apply all font size variants. This is the most explicit approach, but the
  // variants could also be dynamically constructed from the theme so
  // anytime it changes the variants are automatically updated.
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
    highlighted: {
      false: {
        background: "transparent",
      },
    },
  },
});
