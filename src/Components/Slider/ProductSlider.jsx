import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Box,
  useToast
} from "@chakra-ui/react";
 
import { Link } from "react-router-dom";

const ProductSlider = ({ data,value }) => {
 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "10px" }}>
      {/* <Flex w={"80%"} margin={"auto"} pt={3} justifyContent={"space-between"}> */}
        <Heading size="sm">Top {value}</Heading>
      {/* </Flex> */}
      <div style={{ width: "95%", margin: "auto" }}>
        <Carousel responsive={responsive}>
          {data.map((item, index) => (
            <Card maxW="sm" h="400px" key={index} mr={1} ml={1}>
              <Flex alignItems={"center"} justifyContent={"center"}>
              <Link to={`product/${item._id}`} ><Image
                  
                  
                  w={"100px"}
                  h={"150px"}
                  display={"block"}
                  src={item.image[0]}
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
                  {item.product_name}
                </Heading>
                <Flex gap={2} alignItems={"center"}>
                  <Heading fontSize="xl">₹ {item.discounted_price}</Heading>{" "}
                  <Text color="gray" textDecoration={"line-through"}>
                    ₹{item.retail_price}
                  </Text>
                  <Text color="green.600" fontSize="14">
                    {item.discount}
                    % Off
                  </Text>
                </Flex>
              </Stack>
              <Button
                // onClick={() => handleAddtoCart(item)}
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
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSlider;
