import { Outlet } from "react-router";
import styled, { breakpoints, css, x } from "@xstyled/styled-components";
import { PageWithSidebar } from "@src/templates/Article";
import { Flex } from "@src/atoms/Flex";
import headerSrc from "@src/assets/header.jpg";
import { Box } from "@src/atoms/Box";
import logoSrc from "@src/assets/logo.png";
import splashMaskSrc from "@src/assets/splash-mask.png";
import { DekstopNavbar } from "@src/molecules/DesktopNavbar";
import { Divider } from "@src/atoms/Divider";
import { Drawer } from "@src/molecules/Drawer";
import { useState } from "react";
import { Paragraph } from "@src/atoms/Paragraph";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { IconButton } from "@src/atoms/IconButton";
import { MobileNavbar } from "@src/molecules/MobileNavbar";

const MaskedBorderBox = styled(Box)`
  mask-repeat: repeat no-repeat;
  ${breakpoints({
    xs: css`
      mask-image: none;
    `,
    sm: css`
      mask-image: url(${splashMaskSrc});
      mask-position: 0px calc(85%);
      mask-size: 500px;
    `,
    lg: css`
      mask-position: 0px calc(85%);
      mask-size: 900px;
    `,
  })}
`;

export const PageWithHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <Flex column alignH="center" backgroundColor="backdrop">
      <Flex w="100%" column>
        <Flex backgroundColor="navbar" w="100%" column alignH="center" p={3}>
          <Flex
            alignV="center"
            alignH={{ _: "between", sm: "center" }}
            w="100%"
          >
            <IconButton
              display={{ _: "initial", sm: "none" }}
              onClick={() => setOpen(true)}
            >
              <FaBars size={30} />
            </IconButton>
            <a href="/">
              <x.img
                src={logoSrc}
                w={{ xl: "320px", md: "260px", _: "200px" }}
              />
            </a>
            <IconButton display={{ _: "initial", sm: "none" }}>
              <FaMagnifyingGlass size={30} />
            </IconButton>
          </Flex>
          <Divider w={80} />
          <DekstopNavbar />
        </Flex>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <MobileNavbar />
        </Drawer>
        <MaskedBorderBox
          backgroundSize={{ _: "800px", md: "cover" }}
          backgroundPosition={{ _: "70% 300px", md: "40% 70%" }}
          backgroundImage={`url(${headerSrc})`}
          boxShadow="inner-xl"
          w="100%"
          h={{
            _: 40,
            md: 52,
            lg: 80,
            xl: 96,
          }}
        />
      </Flex>
      <Flex w="100%" alignH="center">
        <PageWithSidebar>
          <Outlet />
        </PageWithSidebar>
      </Flex>
    </Flex>
  );
};
