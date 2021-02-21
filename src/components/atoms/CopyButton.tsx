import React from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import { useText } from "hooks/text";

interface CopyButtonProps {
  text: string;
}
function CopyButton(props: CopyButtonProps) {
  const t = useText("atoms", "CopyButton");
  return (
    <Button
      variant="ghost"
      colorScheme="orange"
      size="sm"
      onClick={() => copy(props.text)}
    >
      <CopyIcon /> {t("copy")}
    </Button>
  );
}

export default CopyButton;
