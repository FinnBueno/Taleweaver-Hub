import { WithChildren } from "@src/utils/children";
import {
  FontSizeProps,
  FontWeightProps,
  SpaceProps,
  x,
} from "@xstyled/styled-components";

type Props = SpaceProps &
  FontSizeProps &
  FontWeightProps & {
    href: string;
  };

export const HyperLink = ({
  href,
  children,
  ...props
}: WithChildren<Props>) => (
  <x.a
    textDecoration="unset"
    color={{ _: "text", hover: "link" }}
    transition
    transitionDuration={200}
    href={href}
    {...props}
  >
    {children}
  </x.a>
);
