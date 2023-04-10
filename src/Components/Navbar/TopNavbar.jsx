import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import "../../styles/TopNavbar.css";
import logo from "../../Images/jiomart_beta_logo.svg";
import cart from "../../Images/cart-icon.svg";
import NavDrawer from "./NavDrawer";

const TopNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div id="container">
      <div className="leftNav">
        <Box>
          <IconButton
            id="IconButton"
            variant="outline"
            colorScheme="#0078ad"
            borderRadius={"50%"}
            color={"white"}
            size="lg"
            aria-label="hamburger"
            fontSize="22px"
            icon={<GiHamburgerMenu />}
            onClick={onOpen}
          />
          <NavDrawer isOpen={isOpen} onClose={onClose}/>
        </Box>
        <Box className="Box">
          <Image src={logo} alt="" />
        </Box>
        <Box className="Box">
          <Text color="white">Deliver to kolkata 700050</Text>
        </Box>
      </div>
      <div className="rightNav">
        <div className="search">
          <span>
            {" "}
            <AiOutlineSearch />
          </span>
          <input id="input" type="text" placeholder="Search JioMart" />
        </div>
        <div className="cart">
          <Image src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
