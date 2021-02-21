import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Step {
  title: string;
  content?: string | ReactNode;
  date?: Date | string | null;
  hideDivider?: boolean;
  passive?: boolean;
}

function Divider({ height, passive }: any) {
  return (
    <Flex justifyContent="center" w="50px" height={height} mt="1">
      <Box
        w="3px"
        height="100%"
        bgColor={passive ? "hepsiback.darkGrey" : "purple.500"}
      />
    </Flex>
  );
}

function Passed({ content, title, divider, date }: any) {
  return (
    <Flex>
      <Flex justifyContent="center" w="56px">
        <Flex flexDir="column" alignItems="center" pt="3px">
          <Box w="20px" h="20px" borderRadius="100%" bgColor="purple.500" />
          {divider && <Divider height="50px" />}
        </Flex>
      </Flex>
      <Box w="100%">
        <Text fontWeight="semibold">{title}</Text>
        <Text fontSize="sm" color="gray.500">
          {date}
        </Text>
        <Box mt="1">{content}</Box>
      </Box>
    </Flex>
  );
}

function Current({ title, content, divider }: any) {
  return (
    <Flex>
      <Flex justifyContent="center" w="50px">
        <Flex flexDir="column" alignItems="center" pt="6px">
          <Box minW="11px" minH="11px" borderRadius="100%" bgColor="purple.500" />
          {divider && <Divider height="100%" passive />}
        </Flex>
      </Flex>
      <Box w="100%">
        <Text fontWeight="semibold">{title}</Text>
        <Box my="3" pb="5">{content}</Box>
      </Box>
    </Flex>
  );
}

function Passive({ title, divider }: any) {
  return (
    <Flex>
      <Flex justifyContent="center" w="56px">
        <Flex flexDir="column" alignItems="center" pt="5px">
          <Box
            w="13px"
            h="13px"
            borderRadius="100%"
            bgColor="hepsiback.darkGrey"
          />
          {divider && <Divider height="50px" passive />}
        </Flex>
      </Flex>
      <Box w="100%">
        <Text color="hepsiback.darkGrey" fontWeight="semibold">
          {title}
        </Text>
      </Box>
    </Flex>
  );
}

function Timeline({ steps }: { steps: Step[] }) {
  return (
    <Flex flexDir="column" justifyContent="stretch" height="100%" width="100%">
      {steps.map((step, index) => {
        if (step.date) {
          return (
            <Passed
              key={index}
              title={step.title}
              divider={!step.hideDivider}
              content={step.date}
            />
          );
        }

        if (step.passive) {
          return (
            <Passive
              key={index}
              divider={!step.hideDivider}
              title={step.title}
            />
          );
        }

        return (
          <Current
            key={index}
            title={step.title}
            divider={!step.hideDivider}
            content={step.content}
          />
        );
      })}
    </Flex>
  );
}

export default Timeline;
