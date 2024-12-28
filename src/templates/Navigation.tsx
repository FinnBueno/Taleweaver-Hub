import { Outlet } from "react-router";
import { PageContainer } from "@src/templates/PageContainer";
import { Flex } from "@src/atoms/Flex";

export const NavigationContainer = () => (
  <Flex direction="column" alignH="center">
    Header
    <PageContainer>
      <Outlet />
    </PageContainer>
  </Flex>
);
