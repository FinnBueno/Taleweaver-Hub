import { WithChildren } from "@src/utils/children";
import { LayoutProps, x } from "@xstyled/styled-components";
import { MouseEventHandler } from "react";

type Props = LayoutProps & {
  onClick?: MouseEventHandler<unknown>;
};

export const IconButton = ({ children, ...props }: WithChildren<Props>) => {
  return (
    <x.button
      backgroundColor="transparent"
      onMouseDown={e => e.preventDefault()}
      {...props}
    >
      {children}
    </x.button>
  );
};
