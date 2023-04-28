import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import Grocery from "../Pages/Grocery"
import SingleGroceryPage from '../Pages/SingleGrocery'
import CartPage from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Payment from '../Pages/Payment'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<SignIn/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/grocery/:Q" element={<Grocery/>}></Route>
        <Route path="/signlegrocery/:id" element={<SingleGroceryPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>

    </Routes>
  )
}

export default AllRoutes