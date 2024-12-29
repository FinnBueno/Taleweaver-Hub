import { WithChildren } from "@src/utils/children";
import { x } from "@xstyled/styled-components";
import {
  FlexboxesProps,
  SpaceProps,
  BackgroundsProps,
  BordersProps,
  ColorProps,
  SizingProps,
  TransformsProps,
  GridsProps,
  EffectsProps,
} from "@xstyled/system";

type AlignmentValues = "start" | "center" | "end" | "between" | "around";

type Props = SpaceProps &
  FlexboxesProps &
  BackgroundsProps &
  BordersProps &
  ColorProps &
  TransformsProps &
  GridsProps &
  EffectsProps &
  SizingProps & {
    column?: boolean;
    alignH?: AlignmentValues;
    alignV?: AlignmentValues;
  };

type FlexProperties = {
  alignItems: undefined | string;
  justifyContent: undefined | string;
  flexDirection: string;
};

export const Flex = ({
  children,
  column = false,
  alignH,
  alignV,
  ...props
}: WithChildren<Props>) => {
  const flexProperties: FlexProperties = {
    alignItems: undefined,
    justifyContent: undefined,
    flexDirection: column ? "column" : "row",
  };
  flexProperties.alignItems = toFlexValues(column ? alignH : alignV);
  flexProperties.justifyContent = toFlexValues(column ? alignV : alignH);
  return (
    <x.div display="flex" {...flexProperties} {...props}>
      {children}
    </x.div>
  );
};
function toFlexValues(alignV?: AlignmentValues): string | undefined {
  if (!alignV) return undefined;
  switch (alignV) {
    case "start":
      return "flex-start";
    case "center":
      return "center";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
  }
}
