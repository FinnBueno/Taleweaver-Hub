import { ReactNode } from "react";

export type WithChildren<OtherProps extends object> = {
  children?: ReactNode;
} & OtherProps;
