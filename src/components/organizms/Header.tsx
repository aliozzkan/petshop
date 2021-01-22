import React from "react";
import { Box, Button, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import DarkModeSwitch from "../atoms/DarkModeSwitch";

function Header() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex p="5" bgColor={colorMode === "light" ? "teal.200" : "teal.500"} position="sticky" top="0">
      <Box p="2">
        <Heading size="md">
          BaseKit
        </Heading>
      </Box>
      <Spacer />
      <Flex>
        <Flex mr="4" align="center">
          <DarkModeSwitch
            checked={colorMode === "dark"}
            onChange={() => {
              toggleColorMode();
            }}
            size={65}
          />
        </Flex>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
      </Flex>
    </Flex>
  );
}

export default Header;
