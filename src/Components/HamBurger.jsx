import {
    Badge,
    
    Button,
    
    
    Flex,
    Heading,
    
    VStack,
  } from "@chakra-ui/react";

  export default function MobileSideNav({ setTab, tab, name, role,onClose }) {
    return (
      <VStack
        borderTopRightRadius={20}
        padding={"8px 0px"}
        h={"100vh"}
        className="sidebar"
        w={{base:"100%",sm:"100%",md:"100%",lg:"25%"}}
      >
        <Flex
          justifyContent={"end"}
          maxH={150}
          padding={2}
          border={"1px solid orange"}
          borderRadius={6}
          alignItems={"center"}
          w={"90%"}
        >
          <VStack>
            <Heading fontSize={"md"} color={"teal"}>
              {name}
            </Heading>
            <Badge colorScheme={"green"}>{role}</Badge>
          </VStack>
          {/* <CardAvatar name={name} role={role}></CardAvatar> */}
        </Flex>
  
        <VStack gap={4} w={"100%"}>
          <Button
            variant={"outline"}
            borderColor={"teal"}
            bg={tab === 1 && "teal"}
            color={tab === 1 ? "white" : "teal"}
            w={"90%"}
            onClick={() => {
              setTab(1);
              onClose()
            }}
          >
        My Orders
          </Button>
          <Button
            variant={"outline"}
            borderColor={"teal"}
            bg={tab === 2 && "teal"}
            color={tab === 2 ? "white" : "teal"}
            w={"90%"}
            onClick={() => {
              setTab(2);
              onClose()
            }}
          >
            Personal Information
          </Button>
          <Button
            variant={"outline"}
            borderColor={"teal"}
            bg={tab === 3 && "teal"}
            color={tab === 3 ? "white" : "teal"}
            w={"90%"}
            onClick={() => {
              setTab(3);
              onClose()
            }}
          >
            Addresses
          </Button>
          <Button
            variant={"outline"}
            borderColor={"teal"}
            bg={tab === 4 && "teal"}
            color={tab === 4 ? "white" : "teal"}
            w={"90%"}
            onClick={() => {
              setTab(4);
              onClose()
            }}
          >
            Refer and Earn
          </Button>
        </VStack>
      </VStack>
    );
  }