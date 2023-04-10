import React from "react";
import { data } from "./BottomNavbarCategory";
import "../../styles/BottomNavbar.css";
const BottomNavbar = () => {
  return (
    <div id="bottom_container">
      <ul id="bottom_category">
        {data.map((el) => (
          <div id="dropdown" key={el.id}>
            <li key={el.id} class="dropbtn">
              {el.category}
            </li>
            <div id="single_dropdown">
              {el.subcategory.map((ele)=>(
                <div class="dropdown_content" key={ele}>
                <p>{ele}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavbar;
