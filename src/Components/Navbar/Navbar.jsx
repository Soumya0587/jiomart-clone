import React from 'react'
import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'
import { Flex } from '@chakra-ui/react'
import "../../styles/Navbar.css"
const Navbar = () => {
  return (
    <div >
      <Flex direction={"column"} id='total_nav'>
      <TopNavbar/>
      <BottomNavbar/>
      </Flex>
      
        
      
    </div>
  )
}

export default Navbar