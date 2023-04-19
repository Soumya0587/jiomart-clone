import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import Grocery from "../Pages/Grocery"
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<SignIn/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/grocery/:Q" element={<Grocery/>}></Route>

    </Routes>
  )
}

export default AllRoutes