import { x } from "@xstyled/styled-components";
import { PropsWithChildren } from "react";

export const Paragraph = ({ children }: PropsWithChildren) => {
  return <x.p color="text">{children}</x.p>;
};
