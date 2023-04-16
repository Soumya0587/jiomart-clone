import React from "react";
import Carousel from "../Components/HomeCarousel/Carousel";
import "../styles/Home.css";
import Slider1 from "../Components/Slider/Slider1";
import Slider2 from "../Components/Slider/Slider2";
import { PosterData,FoodAndBeveragesData } from "../Components/Slider/SliderData";
const Home = () => {
  return (
    <div>
      <Carousel />
      <img
        id="Poster"
        src="https://res.cloudinary.com/dn6cfpohc/image/upload/v1681153994/1681134097_KOLKATA_b7rhc0.jpg"
        alt="grocery"
      />
      <Slider1 data={PosterData} />
      <Slider2 data={FoodAndBeveragesData} heading="Food & Beverages" />

    </div>
  );
};

export default Home;
