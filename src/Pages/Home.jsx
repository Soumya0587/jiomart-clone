import React from 'react'
import Carousel from '../Components/HomeCarousel/Carousel'
import "../styles/Home.css"
const Home = () => {
  return (
    <div>
        <Carousel/>
        <img id='Poster' src="https://res.cloudinary.com/dn6cfpohc/image/upload/v1681153994/1681134097_KOLKATA_b7rhc0.jpg" alt="grocery" />
    </div>
  )
}

export default Home