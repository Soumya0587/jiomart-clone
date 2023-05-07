import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css";

import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {


  return (
    <div className="font-link">
      
      <AllRoutes/>
      {/* <Footer/> */}
     
    </div>
  )
}

export default App
