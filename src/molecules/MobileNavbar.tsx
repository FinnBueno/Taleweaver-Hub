import { Box } from "@src/atoms/Box";
import { Divider } from "@src/atoms/Divider";
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

export const MobileNavbar = () => (
  <Flex pt={16} p={3} column display={{ _: "flex", sm: "none" }}>
    {navItems.map(item => (
      <NavItem key={item.displayText} {...item} />
    ))}
  </Flex>
);

const NavItem = (props: NavItem) => (
  <Box mx={3}>
    <Divider w="100%" my={5} />
    <HyperLink ml={1} mr={20} href={props.href} fontSize="lg" fontWeight="bold">
      {props.displayText}
    </HyperLink>
  </Box>
);
