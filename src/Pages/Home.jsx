import {useState,useEffect} from "react";
import Carousel from "../Components/HomeCarousel/Carousel";
import "../styles/Home.css";
import axios from "axios"
import Slider1 from "../Components/Slider/Slider1";
import Slider2 from "../Components/Slider/Slider2";
import { PosterData,FoodAndBeveragesData } from "../Components/Slider/SliderData";
import {BASE_URL} from "../Util/Constant.js"
import ProductSlider from "../Components/Slider/ProductSlider";
import Navbar from "../Components/Navbar/Navbar";
const Home = () => {
  const [Beverages,SetBeverages]=useState([])
  const [Chocolates,SetChocolates]=useState([])
  const [Fruits,SetFruits]=useState([])
  const [FruitJuices,SetFruitJuices]=useState([])


  useEffect(() => {
    axios.get(`${BASE_URL}/grocery?category=Beverages`).then((res)=>SetBeverages(res.data))
    axios.get(`${BASE_URL}/grocery?sub_category=Chocolates & Candies`).then((res)=>SetChocolates(res.data))
    axios.get(`${BASE_URL}/grocery?category=Fruits & Vegetables`).then((res)=>SetFruits(res.data))
    axios.get(`${BASE_URL}/grocery?sub_category=Fruit Juices`).then((res)=>SetFruitJuices(res.data))
   
  }, []);
  console.log(Beverages);
  return (
    <div>
      <Navbar/>
      <Carousel />
      <img
        id="Poster"
        src="https://res.cloudinary.com/dn6cfpohc/image/upload/v1681153994/1681134097_KOLKATA_b7rhc0.jpg"
        alt="grocery"
      />
      <Slider1 data={PosterData} />
      <Slider2 data={FoodAndBeveragesData} heading="Food & Beverages" />
      <ProductSlider data={Beverages} value="Beverages"/>
      <ProductSlider data={Chocolates} value="Chocolates"/>
      <ProductSlider data={Fruits} value="Fruits & Vegetables"/>
      <ProductSlider data={FruitJuices} value="Fruit Juices"/>
    </div>
  );
};

export default Home;
