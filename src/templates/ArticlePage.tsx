import { Flex } from "@src/atoms/Flex";
import { SidePanel } from "@src/organisms/SidePanel";
import { PropsWithChildren } from "react";

export const ArticleContainer = ({ children }: PropsWithChildren) => (
  <Flex
    maxW={{
      _: "100%",
      sm: "100%",
      md: "700px",
      lg: "1000px",
      xl: "1200px",
    }}
    w="100%"
    flexDirection={{ _: "column", md: "row-reverse" }}
    columnGap={3}
  >
    <Flex
      p={3}
      backgroundColor="background"
      w="100%"
      column
      transform={{
        _: "initial",
        md: "translateY(-80px)",
        lg: "translateY(-140px)",
      }}
      boxShadow="2xl"
    >
      {children}
    </Flex>
    <SidePanel />
  </Flex>
);
