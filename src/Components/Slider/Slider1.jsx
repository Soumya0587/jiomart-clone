import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, Image, Heading } from "@chakra-ui/react";
const Slider1 = ({data}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ width: "100%", margin: "auto", marginTop: "10px" }}>
      <div style={{ width: "100%", margin: "auto", padding: "10px" }}>
        
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <Carousel responsive={responsive}>
          {data.map((item) => (
            <Card cursor="pointer" maxW="sm" key={item.id} mr={1} ml={1}>
              <Image src={item.img} borderRadius="lg" />
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider1;
