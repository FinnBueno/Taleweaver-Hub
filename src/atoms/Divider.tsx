import { x } from "@xstyled/styled-components";

export const Divider = ({ w }: { w: number }) => (
  <x.hr w={w} h={"divider"} my={2} backgroundColor={"divider"} />
);
