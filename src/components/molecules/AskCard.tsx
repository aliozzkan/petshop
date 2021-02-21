import React, { PropsWithChildren } from "react";
import { Button, Box, Flex } from "@chakra-ui/react";
import Card from "components/atoms/Card";

interface AskCardProps {
  onCancel: () => void;
  onSuccess: () => void;
}

function AskCard(props: PropsWithChildren<AskCardProps>) {
  return (
    <Box>
      <Card>{props.children}</Card>
      <Flex mt="2">
        <Button colorScheme="red" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button colorScheme="green" onCLick={props.onSuccess} ml="3">
          Success
        </Button>
      </Flex>
    </Box>
  );
}

export default AskCard;
