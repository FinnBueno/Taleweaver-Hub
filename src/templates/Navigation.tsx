import { Outlet } from "react-router";
import styled, { breakpoints, css, x } from "@xstyled/styled-components";
import { ArticleContainer } from "@src/templates/ArticlePage";
import { Flex } from "@src/atoms/Flex";
import headerSrc from "@src/assets/header.jpg";
import { Box } from "@src/atoms/Box";
import logoSrc from "@src/assets/logo.png";
import splashMaskSrc from "@src/assets/splash-mask.png";
import { Navbar } from "@src/molecules/Navbar";
import { Divider } from "@src/atoms/Divider";

const MaskedBorderBox = styled(Box)`
  mask-repeat: repeat no-repeat;
  ${breakpoints({
    xs: css`
      mask-image: none;
    `,
    md: css`
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

export const NavigationContainer = () => (
  <Flex column alignH="center">
    <Flex w="100%" column>
      <Flex backgroundColor="navbar" w="100%" column alignH="center" p={3}>
        <x.img src={logoSrc} w={{ xl: "320px", md: "260px", _: "200px" }} />
        <Divider w={80} />
        <Navbar />
      </Flex>
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
      <ArticleContainer>
        <Outlet />
      </ArticleContainer>
    </Flex>
  </Flex>
);
