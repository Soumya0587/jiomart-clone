import { Box, HStack, Image, Stack, Text, VStack,Card ,Flex, Heading, Button} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const GroceryCard = ({props}) => {
    console.log(props);
  return (
    <Box>
        <Card maxW="sm" h="400px" mr={1} ml={1}>
              <Flex alignItems={"center"} justifyContent={"center"}>
              <Link to={`product/${props._id}`} ><Image
                  
                  
                  w={"100px"}
                  h={"150px"}
                  display={"block"}
                  src={props.image[0]}
                  borderRadius="lg"
                /></Link>
              </Flex>
              <Stack p="6" bg="white">
                {/* <Flex gap={4} textAlign={"center"}>
                  <Box bg={"#00B5B7"} color={"white"} pl={3} pr={3}>
                    {item.rating} <span style={{ fontSize: "20px" }}>*</span>
                  </Box>
                  <Text fontSize={12}>{item.review} reviews</Text>
                </Flex> */}
                <Heading size="sm">
                  {props.product_name}
                </Heading>
                <Flex gap={2} alignItems={"center"}>
                  <Heading fontSize="xl">₹ {props.discounted_price}</Heading>{" "}
                  <Text color="gray" textDecoration={"line-through"}>
                    ₹{props.retail_price}
                  </Text>
                  <Text color="green.600" fontSize="14">
                    {props.discount}
                    % Off
                  </Text>
                </Flex>
              </Stack>
              <Button
                // onClick={() => handleAddtoCart(props)}
                w={"95%"}
                margin="auto"
                mb="3"
                boxShadow="lg"
                p="6"
                bg="white"
                _hover={{ bg: "orange", color: "white" }}
                colorScheme="orange"
                variant="outline"
              >
                Add to cart
              </Button>
            </Card>
    </Box>
  )
}

export default GroceryCard