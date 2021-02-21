import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Timeline from "components/molecules/Timeline";
import Detail from "components/organizms/Detail";
import GeneralInfo from "components/organizms/GeneralInfo";
import ProcessList from "components/organizms/ProcessList";
import React from "react";

function Home() {
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" h="100vh">
      <Container maxWidth="1100px">
        <ProcessList />
      </Container>
    </Flex>
  );
}

export default Home;
