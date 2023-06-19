import { Stack } from "@/components/Stack";
import { Inter } from "next/font/google";
import { Text } from "../components/Text";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Stack>
        <Text as="h1" size="xlarge">
          Hello, from Next.js, Stitches, and Capsize!
        </Text>
        <Text as="p" size="large">
          Hello, from Next.js, Stitches, and Capsize!
        </Text>
        <Text as="p" size="medium">
          Hello, from Next.js, Stitches, and Capsize!
        </Text>
        <Text as="p" size="small">
          Hello, from Next.js, Stitches, and Capsize!
        </Text>
        <Text as="p" size="xsmall">
          Hello, from Next.js, Stitches, and Capsize!
        </Text>
      </Stack>
    </main>
  );
}
