import React from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Box>
        <Flex>
          <Box display={"flex"}>
            {" "}
            <Text>Get Email Deals & Earn Cashback</Text> <Input />
            <Button>Signup</Button>
          </Box>
          <Box display={"flex"}>
            <Text>Link To This Page & Tell All Your Friends!</Text>
            <Button>Copy Link</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
