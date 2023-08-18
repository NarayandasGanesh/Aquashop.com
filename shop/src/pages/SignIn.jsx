import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SetUserDataAfterLogin } from "../store/Auth/auth.action";
import { useDispatch } from "react-redux";
const SignIn = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const signUppage = () => {
    toast({
      position: "bottom-left",
      title: "Welcome to SignUp.",
      description: "Here You can Create Your Account.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    navigateTo("/signup");
  };
  const Login = () => {
    try {
      let users = axios
        .get("https://next-backend-orpin.vercel.app/user")
        .then((response) => {
          let login = response.data.find((item) => {
            return (
              item.email === formData.email &&
              item.password === formData.password
            );
          });
          console.log("login in user", login, response.data);
          if (
            formData.email === "admin@admin.com" &&
            formData.password === "123456"
          ) {
            navigateTo("/adminPage");
          } else if (login) {
            dispatch(SetUserDataAfterLogin(login));
            toast({
              title: "Welcome to Our AquaShop.",
              description: "We are Happy To serve you.",
              status: "success",
              duration: 6000,
              isClosable: true,
            });
            navigateTo("/");
          } else {
            console.log("login creds invalid");

            toast({
              title: "Credential Invalid.",
              description: "",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
          }

        });
    } catch (error) {
      console.log("error", error);
    }
  };

  const HandleChange = (evt) => {
    let { name, value } = evt.target;
    setFormData({

      ...formData,
      [name]: value,
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}

    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign In</Heading>
          <Text fontSize={"lg"} color={"gray.600"}></Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          bgColor="#f0f1f7 "
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                borderColor={"grey"}
                value={formData.email}
                onChange={HandleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                borderColor={"grey"}
                value={formData.password}
                onChange={HandleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox borderColor={"grey"}>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={Login}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have a account?{" "}
                <Link color={"blue.400"} onClick={signUppage}>
                  SignUp
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;
