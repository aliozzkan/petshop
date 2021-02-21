import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import GeneralInfo from "./GeneralInfo";

function Detail() {
  return (
    <Flex
      w="100%"
      h="80%"
      justifyContent="space-between"
      alignItems="stretch"
      borderRadius="3xl"
      borderColor="hepsiback.grey"
      borderWidth="2px"
      overflow="hidden"
    >
      <Box w="50%" p="10">
        <Flex>
          <Box
            w="64px"
            h="64px"
            bgColor="hepsiback.grey"
            borderRadius="100%"
            mr="5"
          />
          <Flex flexDir="column">
            <Text>Apple Iphone 6 16 GB</Text>
            <Flex fontSize="sm">
              <Text>Alıcı: </Text>
              <Text color="purple.500" ml="1" fontWeight="bold">Cepte Ceps</Text>
            </Flex>
            <Text fontWeight="semibold" mt="7">
              Teklif Tutarı
            </Text>
            <Flex alignItems="center">
              <Text fontSize="2xl" fontWeight="bold">
                750
              </Text>
              <Text fontWeight="semibold" mt="5px" ml="2px">
                TL
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box w="50%">
        <GeneralInfo />
      </Box>
    </Flex>
  );
}

export default Detail;
