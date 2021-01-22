import React, { PropsWithChildren } from "react";
import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import HeaderOrg from "../organizms/Header";
import DarkModeSwitch from "../atoms/DarkModeSwitch";

function Slim({ children }: PropsWithChildren<{}>) {
  return (
    <Box>
      <HeaderOrg />
      <Container mt="10">{children}</Container>
    </Box>
  );
}

export default Slim;
