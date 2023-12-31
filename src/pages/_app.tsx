import type { AppProps } from "next/app";
import { globalCss } from "../../stitches.config";

// Apply global styles: https://stitches.dev/docs/styling#global-styles
const globalStyles = globalCss({
  body: {
    background: "$surface",
  },
  "*": {
    margin: 0,
    padding: 0,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}
