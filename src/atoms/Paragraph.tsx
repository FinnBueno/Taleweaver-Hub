import { WithChildren } from "@src/utils/children";
import {
  SpaceProps,
  ColorProps,
  x,
  FontSizeProps,
} from "@xstyled/styled-components";

type Props = SpaceProps & ColorProps & FontSizeProps;

export const Paragraph = ({ children, ...props }: WithChildren<Props>) => {
  return (
    <x.p color="text" {...props}>
      {children}
    </x.p>
  );
};
