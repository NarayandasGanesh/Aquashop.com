import React from "react";
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
import { Show, Hide } from "@chakra-ui/react";
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
import { BsCart } from "react-icons/bs";
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
const Navbar = () => {
  const navigateTo = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { onToggle } = useDisclosure();
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  return (
    <>
      <Box
        w={"100%"}
        //position={"fixed"}
        position={"sticky"}
        top={0}
        zIndex={999}
        bg={useColorModeValue("#f0f1f7 ")}
        bgColor={{
          base: "#f0f1f7 ",
          sm: "#f0f1f7 ",
          md: "#f0f1f7 ",
          lg: "#f0f1f7 ",
          xl: "#f0f1f7 ",
        }}
        px={4}
        // border={"3px solid blue"}
      >
        <Box
          bgColor={useColorModeValue("#f0f1f7 ", "gray.800")}
          color={useColorModeValue("gray.600", "#f0f1f7 ")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          display={"flex"}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
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
              // border={"1px solid blue"}
              display={"flex"}
              justifyContent={"space-between"}
              bgColor="#f0f1f7 "
            >
              <Box
                // border={"1px solid grey"}
                w={{ base: "100%", md: "200px" }}
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "#f0f1f7 ")}
                bgColor="#f0f1f7 "
              >
                <Show above="md">
                  <Box>
                    {" "}
                    <Image
                      alt={"Logo"}
                      objectFit={"cover"}
                      onClick={() => GoTo("/")}
                      w={{ lg: "100%", md: "600px", sm: "600px" }}
                      pr={"10px"}
                      src={"./images/Aqualogo.jpeg"}
                      cursor="pointer"
                    />
                  </Box>
                </Show>
                <Show below="md">
                  <Box
                    fontStyle={"normal"}
                    pt={3}
                    color={"teal"}
                    onClick={() => GoTo("/")}
                    pr={"10px"}
                    w={{ lg: "0", md: "0", sm: "100%", base: "100%" }}
                    cursor="pointer"
                  >
                    <strong>AS</strong>
                  </Box>
                </Show>
              </Box>
              <Box width="100%">
                <Box
                  width={{ base: "100px", sm: "200px", md: "100%", lg: "100%" }}
                  pl={{ base: "0", md: "0", lg: "100px" }}
                >
                  <InputGroup
                    // display={{ base: "1", md: "inline-flex" }}
                    bgColor="#f0f1f7 "
                    justifyItems={"center"}
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
                </Box>
                <Flex
                  display={{ base: "none", md: "flex" }}
                  ml={10}
                  bgColor="#f0f1f7 "
                >
                  <Box
                    display={"flex"}
                    pt={5}
                    justifyContent={"space-evenly"}
                    pl={{ base: "0", md: "0", lg: "80px" }}
                    // border={"1px solid red"}
                    gap={10}
                    bgColor="#f0f1f7 "
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
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={50}
            bgColor="#f0f1f7 "
            // border={"1px solid grey"}
            width={{ lg: "1000px", md: "500px", sm: "200px" }}
            pb={{ lg: "10px", md: "10px" }}
          >
            <Button
              display={{ base: "flex", md: "inline-flex" }}
              textAlign="center"
              fontWeight={"bold"}
              gap={2}
              mt={{ base: "0", md: "40px", lg: "22px" }}
              ml={{ base: "0", md: "0", lg: "35px" }}
              bgColor="#f0f1f7 "
              cursor="pointer"
              fontSize={"25px"}
              onClick={() => GoTo("/cart")}
              color={"black"}
            >
              <BsFillCartFill color={"black"} />
              Cart
            </Button>

            <Button
              display={{ base: "none", md: "inline-flex" }}
              color={"black"}
              //as={"a"}
              // fontSize={"sm"}
              // mt={{ base: "0", md: "33px", lg: "35px" }}

              fontWeight={"bold"}
              variant={"link"}
              // href={"#"}

              onClick={onOpen}
              gap={2}
              fontSize={"25px"}
              bgColor="#f0f1f7 "
            >
              <FaUserCircle color="black" /> Sign In
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
                    <Box display={"flex"} mt={2} gap={3} cursor="pointer">
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
                    <Box display={"flex"} mt={2} gap={3} cursor="pointer">
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
            {/* <Container></Container> */}
            <Box mt={"5px"}>
              {" "}
              <Button
                display={{ base: "none", md: "none", lg: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                // href={"#"}
                marginTop="20px"
                // _hover={{
                //   bg: "pink.300",
                // }}
              >
                Admin
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
