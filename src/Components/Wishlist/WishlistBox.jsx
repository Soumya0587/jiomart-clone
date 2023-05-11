import { Box, HStack, Image, Stack, Text, VStack,Card ,Flex, Heading, Button,useToast} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {deleteWishlistItem} from "../../Redux/WishlistReducer/WishlistActions"
import { addToCart } from "../../Redux/CartReducer/CartActions";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistBox = ({props,handleChange}) => {
    console.log(props);
    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(deleteWishlistItem(props._id)).then(handleChange)
    };
    let userId= JSON.parse(localStorage.getItem("UserDetails"))?.userId
    console.log(userId);
    const toast = useToast();
    const handleAddtoCart = ({
        image,
        product_name,
        discounted_price,
        retail_price,
        category,
        sub_category,
        discount,
        rating,
        brand,
        stock,
        _id,
       
      }) => {
        dispatch(
          addToCart({
            image,
        product_name,
        discounted_price,
        retail_price,
        category,
        sub_category,
        discount,
        rating,
        brand,
        stock,
        
            
            pid: _id,
            userId,
            quantity: 1,
          })
        ).then((res)=>{
         
          if(res==="Item Already exist in the Cart"){
            toast({
              title: "Item Already exist in the Cart",
              description: "",
              status: "error",
              duration: 9000,
              isClosable: true,
            })
          }else{
            toast({
              title: "item added.",
              description: "Item added to your cart",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
    
          }
          navigate("/cart")
        })
       
      };
  return (
    <Box>
        <Card maxW="sm" h="400px" mr={1} ml={1}>
              <Flex alignItems={"center"} justifyContent={"center"}>
             <Image
                  
                  
                  w={"100px"}
                  h={"150px"}
                  display={"block"}
                  src={props.image[0]}
                  borderRadius="lg"
                />
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
              <HStack >
              <Button
          onClick={() => handleAddtoCart(props)}
          w={"65%"}
          margin="auto"
          m="2"
          borderRadius={"20px"}
        //   boxShadow="lg"
          p="2"
          bg="white"
          _hover={{ borderColor:"#0078ad"}}
          color="#0078ad"
          variant="outline"
        >
          Add to cart
        </Button>
              <Button
            _hover={{ bgColor: "#0c5273" }}
            bgColor={"#0078ad"}
            onClick={handleDelete}
            size="sm"
          >
            <RiDeleteBin6Line color="white" />
          </Button>
              </HStack>
             
            </Card>
    </Box>
  )
}

export default WishlistBox