import { WithChildren } from "@src/utils/children";
import { x } from "@xstyled/styled-components";
import {
  FlexboxesProps,
  SpaceProps,
  BackgroundsProps,
  BordersProps,
  ColorProps,
  SizingProps,
} from "@xstyled/system";

type Props = SpaceProps &
  FlexboxesProps &
  BackgroundsProps &
  BordersProps &
  ColorProps &
  SizingProps;

export const Box = ({ children, ...props }: WithChildren<Props>) => {
  return <x.div {...props}>{children}</x.div>;
};
