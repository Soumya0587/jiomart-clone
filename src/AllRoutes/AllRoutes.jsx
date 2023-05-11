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
import Profile from '../Pages/Profile'
import AddProducts from '../Admin/AdminPages/AddProduct'
import Inventory from '../Admin/AdminPages/Inventory'
import EditProduct from '../Admin/AdminPages/EditProduct'
import UserDetails from '../Admin/AdminPages/UserDetails'
import Wishlist from '../Pages/Wishlist'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<SignIn/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/grocery/:Q" element={<Grocery/>}></Route>
        <Route path="/signlegrocery/:id" element={<SingleGroceryPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/admin' element={<AddProducts/>}></Route>
        <Route path='/admin/products' element={<Inventory/>}></Route>
        <Route path="/admin/edit/:id" element={<EditProduct/>}/>
        <Route path="/admin/userdetails" element={<UserDetails/>}/>
    </Routes>
  )
}

export default AllRoutes