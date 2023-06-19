import { styled } from "../../stitches.config";

export const StandardText = styled("p", {
  background: "$highlight",
  variants: {
    size: {
      xsmall: { fontSize: "$xsmall", lineHeight: "$xsmall" },
      small: { fontSize: "$small", lineHeight: "$small" },
      medium: { fontSize: "$medium", lineHeight: "$medium" },
      large: { fontSize: "$large", lineHeight: "$large" },
      xlarge: { fontSize: "$xlarge", lineHeight: "$xlarge" },
    },
  },
});
