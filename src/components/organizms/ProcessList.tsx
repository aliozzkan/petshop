import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import ProcessRow from "components/molecules/ProcessRow";
import React from "react";
import Process from "./Process";

function ProcessList() {
  return (
    <Accordion allowToggle>
      <Process />
      <Process />
      <Process />
    </Accordion>
  );
}

export default ProcessList;
