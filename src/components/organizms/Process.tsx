import { AccordionItem, AccordionPanel } from "@chakra-ui/react";
import ProcessRow from "components/molecules/ProcessRow";
import React from "react";
import Detail from "./Detail";

function Process() {
  return (
    <AccordionItem border="0px" mb="2">
      <ProcessRow />
      <AccordionPanel px={0} pb={4} >
        <Detail />
      </AccordionPanel>
    </AccordionItem>
  );
}

export default Process;
