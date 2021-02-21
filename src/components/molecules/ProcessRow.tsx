import React from "react";
import {
  Flex,
  Box,
  Text,
  AccordionIcon,
  AccordionButton,
} from "@chakra-ui/react";
import Card from "components/atoms/Card";

function ProcessRow() {
  return (
    <AccordionButton border="0px" p="0" _focus={{ outline: 0, boxShadow: 0 }} _hover={{background: "transparent"}}>
      <Card borderWidth="2px" borderColor="hepsiback.grey" w="100%">
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Box w="50px" h="50px" borderRadius="100%">
            Image
          </Box>
          <Flex flexDir="column" alignItems="flex-start">
            <Text fontWeight="semibold">Başvuru Tarihi</Text>
            <Text color="gray.600">14 Nisan Salı, 13:57</Text>
          </Flex>
          <Flex flexDir="column" alignItems="flex-start">
            <Text fontWeight="semibold">Ödeme Türü</Text>
            <Text color="gray.600">Nakit</Text>
          </Flex>
          <Flex>
            <Text fontWeight="semibold">Revize Teklifi Onaylandı</Text>
          </Flex>
          <Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              w="30px"
              h="30px"
              backgroundColor="hepsiback.grey"
              borderRadius="100%"
            >
              <AccordionIcon />
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </AccordionButton>
  );
}

export default ProcessRow;
