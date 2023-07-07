import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Text marginTop={"15%"} fontSize={"4xl"}>
          Hello This Is Home Page
        </Text>
      </Flex>
    </Box>
  );
};

export default Home;
