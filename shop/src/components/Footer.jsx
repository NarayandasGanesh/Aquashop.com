import React from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { CgMail } from "react-icons/cg";
import { Image } from "@chakra-ui/react";

const Footer = () => {
  return (

    <Box borderTop="1px solid grey" width={"100%"}>
      <Box justifyContent={"space-between"} backgroundColor={"#545871"}>
        <Flex
          justifyContent={"space-between"}
          borderBottom="1px solid white"
          p={2}
        >
          <Box display={"flex"} w={"60%"}>
        
            <Text
              color={"white"}
              fontSize={{ xl: "20", lg: "15", sm: "12", base: "8" }}
            >
              Get Email Deals & Earn Cashback
            </Text>{" "}
            <Input placeholder="Enter email address..." width={"50%"} ml={2} />
            <Button>Signup</Button>
          </Box>
          <Box display={"flex"}>
            <Text
              color={"white"}
              fontSize={{ xl: "20", lg: "15", sm: "12", base: "8" }}
            >
              Link To This Page & Tell All Your Friends!
            </Text>
            <Button borderRadius={"25"} ml={2}>
              Copy Link
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box justifyContent={"space-between"} backgroundColor={"#545871"}>
        <Flex
          justifyContent={"space-between"}
          borderBottom="1px solid white"
          p={1}
        >
          <Box
            display={"flex"}
            w={"80%"}
            fontSize={{ xl: "12", lg: "10", sm: "8", base: "7" }}
          >
            {" "}
            <Text color={"white"}>About Us | </Text>
            <Text color={"white"}> Help | </Text>
            <Text color={"white"}> Accessibility Statement | </Text>
            <Text color={"white"}> Contact Us | </Text>
            <Text color={"white"}> Partner with Us | </Text>
            <Text color={"white"}> Services Us | </Text>
            <Text color={"white"}> Country Region ^ | </Text>
            <Text color={"white"}> Connect ^ | </Text>
            <Text color={"white"}> Own your SHOP Site | </Text>
          </Box>
          <Box
            display={"flex"}
            mr={"10px"}
            fontSize={{ xl: "20", lg: "18", sm: "16", base: "13" }}
          >
            <CgMail color="white" />
            <ImFacebook color="white" />
            <BsTwitter color="white" />
          </Box>
        </Flex>
      </Box>
      <Box
        fontSize={{ xl: "12", lg: "10", sm: "8", base: "7" }}
        borderBottom="1px solid grey"
        backgroundColor={"#f0f1f7 "}
        p={3}
      >
        <Text>
          © 1997-2022 Market America, Inc. or its affiliates. All other
          designated trademarks, copyrights, and brands are the property of
          their respective owners.
        </Text>
        <Text>
          Only Customers will receive cashback on qualifying purchases.
          UnFranchise Owners/Shop Consultants will receive increased IBV instead
          of cashback on qualifying purchases.
        </Text>
        <Text>
          Privacy Policy | Terms of Use | Advertising Disclosure | Return Policy
          | Shipping Information
        </Text>
      </Box>
      <Box backgroundColor={"#f0f1f7 "} p={3}>
        <Flex justifyContent={"center"} columns={[1, 4]}>
          {" "}
          <Image src="./images/badge1.png" />
          <Image src="./images/badge2.png" />
          <Image src="./images/badge3.png" />
          <Image src="./images/badge4.png" />
          <Image src="./images/badge5.png" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
