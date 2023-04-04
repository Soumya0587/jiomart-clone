import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  Heading,
} from "@chakra-ui/react";


import app_store_logo from "../../Images/app_store.png";
import play_store_logo from "../../Images/play_store.png";

const Footer = () => {
  return (
    <Box bg='#f5f5f5' maxW={"100%"} border={"2px"}  >
      
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        bg='#f5f5f5'
        
      >
        <Container
          as={Stack}
          maxW={"7xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Box>
            <Flex gap={"1rem"}>
              <Box>Download apps</Box>
              <Box>
                <img src={play_store_logo} alt="google" />
              </Box>
              <Box>
                <img src={app_store_logo} alt="google" />
              </Box>
            </Flex>
          </Box>
        
        </Container>
      </Box>
      <Container as={Stack} maxW={"8xl"} py={10} >
        <SimpleGrid columns={{ base: 2, sm: 3, md: 6 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Heading size={"xsm"} >All Categories</Heading>
            <Text fontSize='sm' color="grey">Grocery</Text >
            <Text fontSize='sm' color="grey">Electronics</Text >
            <Text fontSize='sm' color="grey">Fashion</Text>
            <Text fontSize='sm' color="grey">Home & Kitchen</Text >
            <Text fontSize='sm' color="grey">Premium Fruits</Text >
            <Text fontSize='sm' color="grey">Books</Text >
            <Text fontSize='sm' color="grey">Furniture</Text >
          </Stack>

          <Stack align={"flex-start"}>
            <Heading size={"xsm"}>Preminum Movies</Heading>
            <Text fontSize='sm' color="grey">Helmet</Text>
            <Text fontSize='sm' color="grey">200 Halla Ho</Text>
            <Text fontSize='sm' color="grey">14 Phere</Text>
            <Text fontSize='sm' color="grey">Dial 100</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading size={"xsm"}>Popular LIVE TV Channels</Heading>
            <Text fontSize='sm' color="grey">Aaj Tak</Text >
            <Text fontSize='sm' color="grey">Zee News</Text >
            <Text fontSize='sm' color="grey">Zee TV HD</Text >
            <Text fontSize='sm' color="grey">&TV HD</Text>
          </Stack>
          
          <Stack align={"flex-start"}>
            <Heading size={"xsm"}>Popular Web Series</Heading>
            <Text fontSize='sm' color="grey">Sunflower</Text >
            <Text fontSize='sm' color="grey">Jeet Ki Zid</Text>
            <Text fontSize='sm' color="grey">Bicchoo Ka Khel</Text >
            <Text fontSize='sm' color="grey">State of Siege:26/11</Text>
            <Text fontSize='sm' color="grey">Naxalbari</Text>
            <Text fontSize='sm' color="grey">Tripling</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading size={"xsm"}>Bollywood Top Celebrites</Heading>

            <Text fontSize='sm' color="grey">Sunny Leon</Text >
            <Text fontSize='sm' color="grey">Disha Patani</Text >
            <Text fontSize='sm' color="grey">Deepika Padukone</Text >
            <Text fontSize='sm' color="grey">Slamana Khan</Text >
            <Text fontSize='sm' color="grey">Nora Fatehi</Text >
          </Stack>
          <Stack align={"flex-start"}>
            <Heading size={"xsm"}>Games & News</Heading>
            <Text fontSize='sm' color="grey">play</Text >
            <Text fontSize='sm' color="grey">Stories</Text >
            <Text fontSize='sm' color="grey">Articles</Text >
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;