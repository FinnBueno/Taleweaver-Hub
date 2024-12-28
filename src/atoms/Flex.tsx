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
  SizingProps & {
    direction?: "row" | "column";
    alignH?: "start" | "center" | "end";
    alignV?: "start" | "center" | "end";
  };

type FlexProperties = {
  alignItems: undefined | string;
  justifyContent: undefined | string;
  flexDirection: string;
};

export const Flex = ({
  children,
  direction = "column",
  alignH,
  alignV,
  ...props
}: WithChildren<Props>) => {
  const flexProperties: FlexProperties = {
    alignItems: undefined,
    justifyContent: undefined,
    flexDirection: direction,
  };
  flexProperties.alignItems = toFlexValues(
    direction === "column" ? alignH : alignV
  );
  flexProperties.justifyContent = toFlexValues(
    direction === "column" ? alignV : alignH
  );
  console.log({ flexProperties });
  return (
    <x.div display="flex" {...props} {...flexProperties}>
      {children}
    </x.div>
  );
};
function toFlexValues(alignV?: "start" | "center" | "end"): string | undefined {
  if (!alignV) return undefined;
  switch (alignV) {
    case "start":
      return "flex-start";
    case "center":
      return "center";
    case "end":
      return "flex-end";
  }
}
