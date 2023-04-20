import React from "react";
import "../../styles/Accordian.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { data } from "./data.js";
import { Radio, RadioGroup, Text } from "@chakra-ui/react";
const Accordian = ({ Q, setBrand, initialBrands,brand }) => {
  const [selected, setselected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setselected(null);
    }
    setselected(i)
  };

  // console.log(data);
  const [person, setPerson] = useState(Q);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPerson(e.target.value);
    // heandleclear()
  };

  useEffect(() => {
    setBrand([]);
    return navigate(`/grocery/${person}`);
  }, [person]);
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((item,i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.category}</h2>
              <span>{selected === i ? "-" :"+"}</span>
            </div>

            <div className={selected === i ? "content show" : "content"}>
              {item.subcategory.map((el, i) => (
                <RadioGroup>
                  <label className="section" >
                  <input
                    type="radio"
                    id={i}
                    name={el}
                    value={el}
                    onChange={handleChange}
                    checked={person === el}
                  />
                  <Text textAlign={"left"}>{el}</Text>
                  </label>
                  
                </RadioGroup>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
