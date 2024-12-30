import { x } from "@xstyled/styled-components";
import { PropsWithChildren } from "react";

export const Button = (props: PropsWithChildren) => {
  return <x.button>{props.children}</x.button>;
};
