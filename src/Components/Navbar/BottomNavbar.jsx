import React from "react";
import { data } from "./BottomNavbarCategory";
import "../../styles/BottomNavbar.css";
import { Link } from "react-router-dom";
const BottomNavbar = () => {
  return (
    <div id="bottom_container">
      <ul id="bottom_category">
        {data.map((el) => (
          <div id="dropdown" key={el.id}>
            <Link to={`/grocery/${el.category}`}>
            <li key={el.id} class="dropbtn">
              {el.category}
            </li>
            </Link>
            
            <div id="single_dropdown">
              {el.subcategory.map((ele)=>(
                <Link to={`/grocery/${ele}`}>
                  <div class="dropdown_content" key={ele}>
                <p>{ele}</p>
                </div>
                </Link>
                
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavbar;
