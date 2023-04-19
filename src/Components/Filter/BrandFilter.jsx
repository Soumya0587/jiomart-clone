import { Stack, Text } from "@chakra-ui/react";
import filterStyles from "../../styles/Filter.module.css";

export const BrandFilter = ({ options = [], name, brand, setBrand }) => {
  const handlefilter = (e) => {
    let newBrands = [...brand];
    if (newBrands.includes(e.target.value)) {
      newBrands.splice(newBrands.indexOf(e.target.value), 1);
    } else {
      newBrands.push(e.target.value);
    }
    setBrand(newBrands);
  };
// console.log(options);
  return (
    <>
      <Stack
        pb={"15px"}
        pt={"5px"}
        borderBottom={"1px solid #f2f2f2"}
        direction="column"
        justify={"space-between"}
      >
        <Text mb={"3px"} w={"100%"} textAlign={"left"} fontWeight={"500"}>
          {name}
        </Text>
        {options.map((item, i) => (
          <CheckBox
            key={i}
            item={item}
            handlefilter={handlefilter}
            brand={brand}
          />
        ))}
      </Stack>
    </>
  );
};

const CheckBox = ({ item, handlefilter, brand }) => {
  return (
    <>
      <label className={filterStyles.CheckBoxFilter}>
        <input
          className={filterStyles.CheckBox}
          type="checkbox"
          name={item}
          value={item}
          onChange={(e) => handlefilter(e)}
          checked={brand.includes(item)}
        />
        <Text
          fontSize={{ base: "13px", sm: "12px", md: "13px", lg: "14px" }}
          w={"150px"}
          textAlign={"left"}
        >
          {item}
        </Text>
      </label>
    </>
  );
};
