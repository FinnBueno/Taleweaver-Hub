import { Flex } from "@src/atoms/Flex";
import { SidePanel } from "@src/organisms/SidePanel";
import { PropsWithChildren } from "react";

export const PageWithSidebar = ({ children }: PropsWithChildren) => (
  <Flex
    maxW={{
      _: "100%",
      sm: "100%",
      md: "700px",
      lg: "1000px",
      xl: "1200px",
    }}
    mx={{ _: 0, sm: 6, md: 0 }}
    w="100%"
    flexDirection={{ _: "column", md: "row-reverse" }}
    columnGap={3}
  >
    <Flex
      p={3}
      backgroundColor="background"
      w="100%"
      borderRadius="sm"
      column
      transform={{
        _: "initial",
        sm: "translateY(-50px)",
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
