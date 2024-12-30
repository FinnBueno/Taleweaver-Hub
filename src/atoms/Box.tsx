import { WithChildren } from "@src/utils/children";
import { x } from "@xstyled/styled-components";
import {
  FlexboxesProps,
  SpaceProps,
  BackgroundsProps,
  BordersProps,
  ColorProps,
  SizingProps,
  EffectsProps,
  LayoutProps,
  TransitionsProps,
  TransformsProps,
  InteractivityProps,
} from "@xstyled/system";

type Props = SpaceProps &
  FlexboxesProps &
  BackgroundsProps &
  BordersProps &
  ColorProps &
  EffectsProps &
  SizingProps &
  LayoutProps &
  TransitionsProps &
  TransformsProps &
  InteractivityProps & {
    onClick?: () => void;
  };

export const Box = ({ children, ...props }: WithChildren<Props>) => {
  return <x.div {...props}>{children}</x.div>;
};
