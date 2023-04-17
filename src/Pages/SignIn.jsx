import React from 'react'
import {
  Box,
  Flex,
  Image,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Checkbox,
  Select,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

import axios from "axios";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/Actions";
import { Navigate } from "react-router-dom";
const SignIn = () => {


  const { isLoggedIn, role } = useSelector((store) => {
    return {
      isLoggedIn: store.AuthReducer.isLoggedIn,
      role: store.AuthReducer.role,
    };
  });

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const handleLogin = () => {
    const details = { email, password };
    dispatch(login(details)).then((res) => {
      if (res === "Incorrect password ") {
        toast({
          title: "Incorrect Password.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else if (res === "User not register") {
        toast({
          title: "You are not Registered.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login Success",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    });
  };
  if (isLoggedIn) {
    if (role === "admin") {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/" />;
    }
  }
  return (
    <Box
      width={"90%"}
      style={{ margin: "auto", marginTop: "150px" }}
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box w={{ base: "100%", md: "100%", lg: "45%" }}>
          <Image
            src="https://res.cloudinary.com/dn6cfpohc/image/upload/v1681572571/1677147547_pp_plekdz.png"
            alt="signup"
            w={"100%"}
          />
        </Box>
        <Spacer/>
        <Box w={{ base: "100%", md: "100%", lg: "45%" }}>
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Sign up
                </Heading>
            
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                 
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
                  </FormControl>
                  <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New User?{" "}
                  <Link href="/signup" color={"blue.400"}>
                    Register Here
                  </Link>
                </Text>
              </Stack>
              <Button
                onClick={handleLogin}
                color={"white"}
                _hover={{ bgColor: "rgb(5,161,163)" }}
                bgColor={"rgb(15,181,183)"}
              >
                Sign in
              </Button>
            </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignIn;
