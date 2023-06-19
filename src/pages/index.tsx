import { Stack } from "@/components/Stack";
import { Inter } from "next/font/google";
import { styled } from "../../stitches.config";
import { Text } from "@/components/Text";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const content = "Hello, from Next.js, Stitches, and Capsize!";

  return (
    <Main className={inter.className}>
      <Stack>
        <Text size="xlarge">{content}</Text>
        <Text size="large">{content}</Text>
        <Text size="medium">{content}</Text>
        <Text size="small">{content}</Text>
        <Text size="xsmall">{content}</Text>
      </Stack>
    </Main>
  );
}

const Main = styled("main", {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
