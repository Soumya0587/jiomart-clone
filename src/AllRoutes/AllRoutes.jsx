import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<SignIn/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
    </Routes>
  )
}

export default AllRoutes