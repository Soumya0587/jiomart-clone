import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Divider,
  HStack,
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Spacer
} from "@chakra-ui/react";
import app_store_logo from "../../Images/app_store.png";
import play_store_logo from "../../Images/play_store.png";
const NavDrawer = ({ isOpen, onClose }) => {
  const data = [
    {
      id: 1,
      value: "Home",
      logo: "https://www.jiomart.com/assets/ds2web/jds-icons/home-icon.svg",
    },
    {
      id: 2,
      value: "Shop By Category",
      logo: "https://www.jiomart.com/assets/ds2web/jds-icons/category-icon.svg",
    },
    {
      id: 3,
      value: "My List",
      logo: "https://www.jiomart.com/assets/ds2web/jds-icons/my-list-viewicon.svg",
    },
    {
      id: 4,
      value: "Wishlist",
      logo: "https://www.jiomart.com/assets/ds2web/jds-icons/wishlist-icon.svg",
    },
  ];

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader backgroundColor={"#0078ad"} color={"white"}>
            Hello !
          </DrawerHeader>

          <DrawerBody>
            {data.map((el) => (
              <Box key={el.id}cursor={"pointer"} p={"3"}>
                <HStack p={"3"}>
                  <Box>
                    <Image src={el.logo} alt="logo" />
                  </Box>
                  <Box>
                    <Text>{el.value}</Text>
                  </Box>
                </HStack>
                <Divider orientation="horizontal" />
              </Box>
            ))}

            <Box p={"3"} bg={"#f5f5f5"} >
            <Text fontWeight={"bolder"} p={"3"}>Download apps</Text>
            <Flex p={"3"} gap={"1rem"}>
              
              <Box cursor={"pointer"}>
                <Image src={play_store_logo} alt="google" />
              </Box>
              <Box cursor={"pointer"}>
                <Image src={app_store_logo} alt="google" />
              </Box>
            </Flex>
            
           
            
            <Box m={"4"}>
              <Image src="https://www.jiomart.com/assets/ds2web/jds-icons/jiomart-logo-hamburger.svg"/>
              <Text m={"3"} fontSize='sm'>
              Please note that you are accessing the BETA Version of jiomart.com
              </Text>
              
              <Text m={"3"} fontSize='sm'>
              Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com
              </Text>
            </Box>
            </Box>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
