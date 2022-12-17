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
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import {
  FaUserCircle,
  FaUser,
  FaTruckMoving,
  FaUserPlus,
  FaRegUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineQuestionCircle, AiOutlineReload } from "react-icons/ai";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdOutlineReorder } from "react-icons/md";
import { BsGift, BsFillCartFill } from "react-icons/bs";
import { RiPriceTagLine } from "react-icons/ri";
import { TbJewishStar } from "react-icons/tb";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Textarea,
  FormLabel,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Heading,
  Container,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
const Navbar = () => {
  const navigateTo = useNavigate();
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { onToggle } = useDisclosure();
  const [Data, SetData] = useState({});
  const { userData } = useSelector((store) => store.auth);

  useEffect(() => {
    console.log("userdata", userData);
    SetData(userData);
  }, [userData]);

  return (
    <div>
      <Box w={"100%"} position={"fixed"} zIndex={999} top={0}>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          w={"100%"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          bgColor="#f0f1f7 "
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            bgColor="#f0f1f7 "
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
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            bgColor="#f0f1f7 "
          >
            <Box
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              //   border="1px solid blue"
              mt={{ lg: "10px" }}
              ml={{ lg: "10px" }}
              w={{ lg: "120px", md: "120px", sm: "120px" }}
            >
              <Image
                alt={"Logo"}
                objectFit={"cover"}
                onClick={() => GoTo("/")}
                pr={"10px"}
                src={"./images/Aqualogo.jpeg"}
                cursor="pointer"
                w={"120px"}
              />
            </Box>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              {/* <DesktopNav /> */}
              <Box width={{ base: "0", md: "80%" }}>
                <InputGroup
                  // display={{ base: "1", md: "inline-flex" }}
                  w={"800px"}
                  justifyItems={"center"}
                  width={{
                    xl: "800px",
                    lg: "500px",
                    md: "300px",
                    base: "100px",
                  }}
                >
                  <Input
                    placeholder="Search Here"
                    size="lg"
                    //

                    borderRadius={50}
                    bgColor="white"
                  />
                  <InputRightElement children={<SearchIcon />} />
                </InputGroup>
                <Flex
                  display={{ base: "none", md: "flex" }}
                  ml={10}
                  width={{
                    xl: "800px",
                    lg: "500px",
                    md: "300px",
                    base: "100px",
                  }}
                  fontSize={{ lg: "16px", md: "12px" }}
                  //bgColor="#f0f1f7 "
                >
                  <Box
                    width={{
                      xl: "800px",
                      lg: "300px",
                      md: "200px",
                      base: "100px",
                    }}
                    display={"flex"}
                    pt={5}
                    justifyContent={"space-evenly"}
                    pl={{ base: "0", md: "0", lg: "80px" }}
                    // border={"1px solid red"}
                    gap={10}

                    // bgColor="#f0f1f7 "
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
                    <Box as="button" onClick={() => GoTo("/health")}>
                      Health & Nutrition
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            bgColor="#f0f1f7 "
          >
            <Button
              display={{ base: "none", md: "inline-flex" }}
              textAlign="center"
              fontWeight={"bold"}
              gap={2}
              // mt={{ base: "0", md: "40px", lg: "22px" }}

              bgColor="transparent"
              cursor="pointer"
              fontSize={{ xl: "25px", lg: "16px", md: "13px", base: "10px" }}
              onClick={() => GoTo("/cart")}
              color={"black"}
            >
              <BsFillCartFill color={"black"} />
              Cart
            </Button>
            <Button
              display={{ base: "flex", md: "inline-flex" }}
              color={"black"}
              //as={"a"}
              // fontSize={"sm"}
              // mt={{ base: "0", md: "33px", lg: "35px" }}

              fontWeight={{ lg: "bold", md: "bold" }}
              variant={"link"}
              // href={"#"}

              onClick={onOpen}
              gap={2}
              fontSize={{ xl: "25px", lg: "16px", md: "13px", base: "20px" }}
              bgColor="transparent"
            >
              <FaUserCircle color="black" />
              {Data && Data.firstName ? `Hi ${Data.firstName}` : "Sign In"}
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              initialFocusRef={firstField}
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                  <FaUserCircle />
                  Account
                </DrawerHeader>

                <DrawerBody>
                  <Box direction={"row"}>
                    <Text fontWeight={"bold"}>
                      Your Consultant is AquaShop.COM
                    </Text>
                    <Box
                      display={"flex"}
                      mt={2}
                      gap={3}
                      cursor="pointer"
                      onClick={() => GoTo("/signin")}
                    >
                      <FaUser />
                      Sign In
                    </Box>
                    <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                      <FaTruckMoving />
                      Track Orders
                    </Box>
                    <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                      <AiOutlineReload />
                      Reorder Items
                    </Box>
                    <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                      <HiCurrencyDollar />
                      Cashback Program
                    </Box>
                    <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                      <AiOutlineQuestionCircle />
                      Help
                    </Box>
                    <Box
                      display={"flex"}
                      mt={2}
                      gap={3}
                      cursor="pointer"
                      onClick={() => GoTo("/signup")}
                    >
                      <FaUserPlus />
                      Create Account
                    </Box>
                    <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                      <FaRegUser />
                      My Account
                    </Box>
                  </Box>
                </DrawerBody>
                <DrawerBody borderTopWidth="1px" borderEndWidth={"1px"}>
                  <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                    <MdOutlineReorder /> List Manager
                  </Box>
                  <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                    <BsGift />
                    Gift Registry
                  </Box>
                  <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                    <RiPriceTagLine /> eGifts
                  </Box>
                  <Box display={"flex"} mt={2} gap={3} cursor="pointer">
                    <TbJewishStar /> Wellness Manager
                  </Box>
                </DrawerBody>

                <DrawerFooter borderTopWidth="1px"></DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              backgroundColor={"blue.300"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
              onClick={() => GoTo("/adminPage")}
            >
              Admin
            </Button>
          </Stack>
        </Flex>

        {/* <Collapse in={isOpen} animateOpacity> */}
        {/* <MobileNav /> */}
        {/* </Collapse> */}
      </Box>
    </div>
  );
};

export default Navbar;
