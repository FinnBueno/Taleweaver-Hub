import { Box } from "@src/atoms/Box";
import { Flex } from "@src/atoms/Flex";
import { HyperLink } from "@src/atoms/HyperLink";
import { Paragraph } from "@src/atoms/Paragraph";
import { Fragment } from "react";

type NavItem = {
  displayText: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    displayText: "Home",
    href: "/",
  },
  {
    displayText: "Calendar",
    href: "/calendar",
  },
  {
    displayText: "Content",
    href: "/content",
  },
  {
    displayText: "About",
    href: "/about",
  },
  {
    displayText: "Contact",
    href: "/contact",
  },
];

export const DekstopNavbar = () => (
  <Flex alignV="center" display={{ _: "none", sm: "flex" }}>
    {navItems.map((item, index) => (
      <Fragment key={item.displayText}>
        {index > 0 ? <Slash /> : null}
        <NavItem {...item} />
      </Fragment>
    ))}
  </Flex>
);

const Slash = () => (
  <Paragraph color="mutedText" mx={4} fontSize="2xl">
    /
  </Paragraph>
);

const NavItem = (props: NavItem) => (
  <Box>
    <HyperLink href={props.href}>{props.displayText}</HyperLink>
  </Box>
);
