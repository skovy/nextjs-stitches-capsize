import { Inter } from "next/font/google";
import { styled } from "../../stitches.config";

const inter = Inter({ subsets: ["latin"] });

const Text = styled("p", {
  fontFamily: "$system",
  color: "$hiContrast",

  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
    },
  },
});

export default function Home() {
  return (
    <main className={inter.className}>
      <Text as="h1" size="3">
        Hello, from Stitches.
      </Text>
    </main>
  );
}
