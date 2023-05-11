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
import ProductCard from "../ProductCard/ProductCard";

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
            <ProductCard item={item} index={index}/>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSlider;
