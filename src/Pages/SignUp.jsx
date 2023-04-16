import React from "react";
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
  useDisclosure,
  Select,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { validate } from "email-validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import OtpModal from "../Components/OtpValidator"
import {BASE_URL} from "../Util/Constant.js"
import emailjs from "@emailjs/browser";
const SignUp = () => {
  const initData = {
    name: "",
    email: "",
    password: "",
    gender: "",
  };
  const [userData, setUserData] = useState(initData);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSignIn = () => {
    axios
      .post(BASE_URL + `/users/register`, userData)
      .then((res) => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          position: "top",
          isClosable: true,
        });
        navigate("/login");
        onClose();
      })
      .catch((err) => {
        if (err.response.data == "User Already Registered") {
          toast({
            title: "User Already Exist",
            status: "error",
            duration: 4000,
            position: "top",
            isClosable: true,
          });
        } else {
          console.log(err.response);
        }
      });
  };
  const sendEmail = (form) => {
    emailjs
      .sendForm(
        "service_75milvr",
        "template_c25al0j",
        form.current,
        "3R6Rkn7Jlt3wrgYA3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validatePassword = (sent, entered) => {
    if (sent !== entered) {
      toast({
        title: "Incorrect OTP",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      handleSignIn();
    }
  };




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
                  
                    <Box>
                      <FormControl id="name" isRequired>
                        <FormLabel>Full Name</FormLabel>
                       <Input
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    type="text"
                  />
                      </FormControl>
                    </Box>
                    <Select
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              placeholder="Select gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
                  
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                type="email"
              />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  } type={showPassword ? "text" : "password"} />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={()=>{
                        if(validate(userData.email)){
                          onOpen()
                        }else{
                          toast({
                            title: "Please Enter Valid Email",
                            status: "error",
                            duration: 3000,
                            position: "top",
                            isClosable: true,
                          });
                        }
                      }}
                    >
                      Sign up
                    </Button>
                    <OtpModal
                email={userData.email}
                validate={validatePassword}
                sendEmail={sendEmail}
                onOpen={onOpen}
                onClose={onClose}
                isOpen={isOpen}
              />
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Already a user? <Link href="/login" color={"blue.400"}>Login</Link>
                    </Text>
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

export default SignUp;
