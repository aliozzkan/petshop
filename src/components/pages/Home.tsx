import React from "react";
import SlimTemplate from "../templates/Slim";
import { Box } from "@chakra-ui/react";
import Post from "components/organizms/Post";

function Home() {
  return (
    <SlimTemplate>
      <Box>
        <Post />
      </Box>
    </SlimTemplate>
  );
}

export default Home;
