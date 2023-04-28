import React from 'react'
import { useSelector } from 'react-redux';
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
            p="1%"
            w={{ base: "90%", md: "27%" }}
            variant="outline"
            borderRadius={"10px"}
            //   border={"1px solid gray"}
            h="moz-min-content"
          >
            <Heading as="h3" size="md" marginBottom="4">
              Order Summary
            </Heading>
  
            <Flex marginBottom="2" justifyContent={"space-between"}>
              <Text>Total MRP:</Text>
              <Text>Rs.{totalMRP}</Text>
            </Flex>
  
            <Flex marginBottom="2" justifyContent={"space-between"}>
              <Text>Total Discount:</Text>
              <Text>Rs.{totalMRP - cartTotal}</Text>
            </Flex>
  
            <Flex marginBottom="2" justifyContent={"space-between"}>
              <Text>Shipping Charges:</Text>
              <Text color={"rgb(5,161,163)"}>FREE</Text>
            </Flex>
  
            <Divider />
  
            <Flex marginBottom="3" justifyContent={"space-between"}>
              <Text fontWeight={"bold"}>Payable Amount:</Text>
              <Text fontWeight={"bold"}>Rs.{cartTotal}</Text>
            </Flex>
  
            <Button
              as={Link}
              to={"/checkout"}
              color={"white"}
              _hover={{ bgColor: "rgb(5,161,163)" }}
              bgColor={"rgb(15,181,183)"}
              ml={"20%"}
            >
              Proceed to Pay
            </Button>
          </Box>
  )
}

export default PaymentCard