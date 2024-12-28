import { PropsWithChildren } from "@src/utils/children";
import { x } from "@xstyled/styled-components";

export const Button = (props: PropsWithChildren) => {
  return <x.button>{props.children}</x.button>;
};
