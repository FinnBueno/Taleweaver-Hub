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

type AlignmentValue = "start" | "center" | "end" | "between" | "around";
type ScreenSize = "_" | "xs" | "sm" | "md" | "lg" | "xl";
type AlignmentConfiguration = {
  [key in ScreenSize]?: AlignmentValue;
};

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
    alignH?: AlignmentConfiguration | AlignmentValue;
    alignV?: AlignmentConfiguration | AlignmentValue;
  };

type FlexProperties = {
  alignItems: undefined | string | { [key: string]: string };
  justifyContent: undefined | string | { [key: string]: string };
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
function toFlexValues(
  align?: AlignmentValue | AlignmentConfiguration
): string | { [key: string]: string } | undefined {
  if (!align) return undefined;
  if (typeof align === "object") {
    const responsiveFlexObject: { [key: string]: string } = {};
    Object.keys(align).forEach(k => {
      const key = k as keyof AlignmentConfiguration;
      const value = align[key]!;
      responsiveFlexObject[key] = ToFlexValue(value);
    });
    return responsiveFlexObject;
  }
  return ToFlexValue(align);
}

const ToFlexValue = (align: AlignmentValue) => {
  switch (align) {
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
};
