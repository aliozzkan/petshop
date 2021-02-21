import React from "react";
import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import Card from "components/atoms/Card";
import CopyButton from "components/atoms/CopyButton";

const suratKargoLogoSrc =
  "https://www.suratkargo.com.tr/assets/images/logo.png";

function ShipmentCard() {
  return (
    <Card w="100%" minH="100px">
      <Flex justifyContent="space-between" alignItems="center">
        <Image src={suratKargoLogoSrc} alt="Kargo" w="100px" h="auto" />
        <Box py="2" px="3" bgColor="gray.200" borderRadius="3xl">
          <Text fontSize="sm" fontWeight="bold">
            Son 2 Gün
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mt="2">
        <Flex flexDir="column">
          <Text textTransform="uppercase" color="gray.900" fontSize="sm">
            Kargo Gönderi Kodu
          </Text>
          <Text fontWeight="semibold" fontSize="lg">
            2323 2323 2323 1
          </Text>
        </Flex>
        <CopyButton text="2323 2323 2323 1" />
      </Flex>
      <Box>
        <Text color="gray.700" mt="5" fontSize="sm">
          Paketinizi en geç <b>14 Haziran</b> tarihine
          kadar ücretsiz kargo kodu ile birlikte kargoya teslim etmelisiniz.
        </Text>
      </Box>
    </Card>
  );
}

export default ShipmentCard;
