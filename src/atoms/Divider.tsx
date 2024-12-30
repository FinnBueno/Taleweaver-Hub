import { SpaceProps, x } from "@xstyled/styled-components";

export const Divider = ({
  w,
  ...props
}: { w: number | string } & SpaceProps) => (
  <x.hr
    w="100%"
    maxW={w}
    h={"divider"}
    my={2}
    backgroundColor={"divider"}
    {...props}
  />
);
