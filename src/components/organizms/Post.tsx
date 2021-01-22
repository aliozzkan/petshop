import React from "react";
import {
  AspectRatio,
  Box,
  Image,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

function Post() {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      bgColor="gray.900"
      border="1px"
      borderColor="gray.600"
    >
      <AspectRatio ratio={16 / 9} overflow="hidden">
        <Image
          src="https://www.shell.com/energy-and-innovation/new-energies/nature-based-solutions/_jcr_content/pagePromo/image.img.960.jpeg/1554332446421/canopy-header.jpeg"
          fallback={<Box bgColor="gray.700" />}
          alt="i"
        />
      </AspectRatio>
      <Box p="5">
        <Box>
          <Heading color="gray.300" fontSize="xl">
            Lorem ipsum dolor sit.
          </Heading>
        </Box>
        <Box mt="1">
          <Text color="gray.400" fontSize="sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            delectus adipisci eius, iusto a quo atque provident labore ut ea?
          </Text>
        </Box>

        <Box mt="5">
          <Button colorScheme="teal">Detay</Button>
          <Button colorScheme="teal" ml="2">
            Kaydet
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
