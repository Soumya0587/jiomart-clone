import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import Grocery from "../Pages/Grocery"
import SingleGroceryPage from '../Pages/SingleGrocery'
import CartPage from '../Pages/Cart'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<SignIn/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/grocery/:Q" element={<Grocery/>}></Route>
        <Route path="/signlegrocery/:id" element={<SingleGroceryPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>

    </Routes>
  )
}

export default AllRoutes