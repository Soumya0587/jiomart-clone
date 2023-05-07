import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../../styles/PaymentCard.css";

const PaymentCard = () => {
  const { isLoading, isError, items } = useSelector((store) => {
    return {
      //   isLoading: store.CartReducer.isLoading,
      //   isError: store.CartReducer.isError,
      items: store.CartReducer.items,
    };
  });
  //   let userId= JSON.parse(localStorage.getItem("UserDetails"))?.userId
  console.log(items);
  let cartTotal = 0;
  for (let i = 0; i < items.length; i++) {
    cartTotal += items[i].discounted_price * items[i].quantity;
  }
  let totalMRP = 0;
  for (let i = 0; i < items.length; i++) {
    totalMRP += items[i].retail_price * items[i].quantity;
  }

  return (
    <Box
      mt="5%"
      // p="1%"
      w={{ base: "95%", md: "35%", lg: "30%" }}
      variant="outline"
      borderRadius={"20px"}
      // border={"1px solid gray"}
      // h="200px"
    >
      <Box className="header">
        <Text className="header-text">Yay! You get FREE delivery with this order.</Text>
      </Box>
      <Box p={"4%"}>
        <Heading marginBottom="2" as="h6" size='md'>Payment Details</Heading>
      <Flex marginBottom="2" justifyContent={"space-between"}>
        <Text>MRP Total</Text>
        <Text>₹{totalMRP}</Text>
      </Flex>

      <Flex marginBottom="2" justifyContent={"space-between"}>
        <Text>Product Discount</Text>
        <Text>₹{totalMRP - cartTotal}</Text>
      </Flex>

      <Flex marginBottom="2" justifyContent={"space-between"}>
        <Text>Delivery Fee</Text>
        <Text color={"#00b259"}>FREE</Text>
        
      </Flex>

      <Divider />

      <Flex marginBottom="3" justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>Total</Text>
        <Text fontWeight={"bold"}>₹{cartTotal}</Text>
      </Flex>
      </Box>
      

      <Button
        as={Link}
        to={"/checkout"}
        w="full"
        bgColor="#0078ad"
        size="lg"
        _hover={{ bg: '#0c5273' }}
        color={"white"}
        borderRadius={"30px"}
        // ml={"20%"}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default PaymentCard;
