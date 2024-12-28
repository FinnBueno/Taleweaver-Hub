import { Box } from "@src/atoms/Box";
import { PropsWithChildren } from "react";

export const PageContainer = ({ children }: PropsWithChildren) => (
  <Box maxW="lg">{children}</Box>
);
