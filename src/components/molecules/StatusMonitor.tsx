import React, { ReactNode } from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";

interface StatusMonitorProps {
  colorScheme: string;
  children?: ReactNode;
}

function StatusMonitor(props: StatusMonitorProps) {
  return (
    <Box background={`${props.colorScheme}.50`} padding="8" py="12">
      <Flex alignItems="center">
        <Flex
          w="50px"
          h="50px"
          borderRadius="100%"
          bgColor={`${props.colorScheme}.400`}
          marginRight="4"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          {props.colorScheme[0]}
        </Flex>
        <Flex flexDirection="column">
          <Text fontWeight="semibold" color="black">
            Revize Teklif Onaylandı
          </Text>
          <Text color={`${props.colorScheme}.500`} fontSize="sm">
            21 Nisan, Salı
          </Text>
        </Flex>
      </Flex>
      <Divider mt="5" borderColor={`${props.colorScheme}.200`} />
      <Flex flexDir="column" mt="5">
        <Text fontSize="sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit
          vero, maxime molestiae, excepturi necessitatibus aliquid fugit fuga
          architecto illo magni rem earum amet culpa?
        </Text>
        {props.children && <Box mt="5">{props.children}</Box>}
      </Flex>
    </Box>
  );
}

export default StatusMonitor;
