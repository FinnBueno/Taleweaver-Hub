// styled.d.ts

// import original module declarations
import "styled-components";
import "@xstyled/system";
import {
  ITheme,
  DefaultTheme as XStyledDefaultTheme,
} from "@xstyled/styled-components";

interface AppTheme extends ITheme, XStyledDefaultTheme {
  /* Customize your theme */
  colors: XStyledDefaultTheme["colors"] & {
    backdrop: string;
    text: string;
    divider: string;
  };
  sizes: XStyledDefaultTheme["sizes"] & {
    divider: string;
  };
  shadows: XStyledDefaultTheme["shadows"] & {
    "inner-xl": string;
  };
}

// and extend them!
declare module "@xstyled/system" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends AppTheme {}
}
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
