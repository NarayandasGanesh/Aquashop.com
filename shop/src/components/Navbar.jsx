import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
  InputGroup,
  CheckboxIcon,
  InputRightElement,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {BsCart} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateTo = useNavigate();

  const { isOpen, onToggle } = useDisclosure();
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  return (
    <div>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Box width={"90%"} border={"1px solid blue"} display={"flex"}>
              {" "}
              <Box width={"25%"}>
                <Image
                  alt={"Logo"}
                  objectFit={"cover"}
                  // p={[4, 10]}
                  // m={[4, 8, 16, 10]}

                  // border={"1px solid black"}
                  w={["50%", "50%"]}
                  minH={["20px"]}
                  ml={5}
                  src={"./images/logo.jpeg"}
                />
              </Box>
              <Box border={"1px solid black"} width="100%">
                {" "}
                <Box width={{ base: "120%", md: "80%" }}>
                  {" "}
                  <InputGroup
                    // display={{ base: "1", md: "inline-flex" }}

                    justifyItems={"center"}
                  >
                    {" "}
                    <Input
                      placeholder="Search Here"
                      size="lg"
                      //
                      borderRadius={50}
                    />
                    <InputRightElement children={<SearchIcon />} />
                  </InputGroup>
                </Box>
                <Flex display={{ base: "none", md: "flex" }} ml={10}>
                  <Box
                    display={"flex"}
                    pt={5}
                    justifyContent={"space-between"}
                    gap={10}
                  >
                    <Box as="button" onClick={() => GoTo("/clothes")}>
                      Exclusive Clothes
                    </Box>
                    <Box as="button" onClick={() => GoTo("/jewelery")}>
                      Jewelery
                    </Box>
                    <Box as="button" onClick={() => GoTo("/electronics")}>
                      Electronics
                    </Box>
                    <Box as="button" onClick={() => GoTo("/cosmetic")}>
                      Cosmetics
                    </Box>
                    <Box as="button" onClick={() => GoTo("/shopbuddy")}>
                      Shop Buddy
                    </Box>
                    <Box as="button" onClick={() => GoTo("/shoplocal")}>
                      Shop Local
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>

            {/* <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Logo
            </Text> */}

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              {/* <DesktopNav /> */}
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={50}
          >
            <Button display={{ base: "none", md: "inline-flex" }}>
              <BsCart />

              <Text>Cart</Text>
            </Button>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          {/* <MobileNav /> */}
        </Collapse>
      </Box>
    </div>
  );
};

export default Navbar;
