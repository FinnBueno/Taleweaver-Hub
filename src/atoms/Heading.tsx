import { WithChildren } from "@src/utils/children";
import { FontSizeProps, SpaceProps, x } from "@xstyled/styled-components";

type Props = SpaceProps & FontSizeProps;

export const Heading = ({ children, ...props }: WithChildren<Props>) => (
  <x.h1 {...props}>{children}</x.h1>
);
