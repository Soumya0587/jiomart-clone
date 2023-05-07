import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Redux/AdminReducer/AdminActions";

const CategoryMenu = () => {
    const dispatch = useDispatch();

    const handleCat=(cat)=>{
        dispatch(getProducts(cat))
    }
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Category
        </MenuButton>
        <MenuList>
          <MenuItem value='' onClick={()=>handleCat('Snacks & Branded foods')}>Snacks & Branded foods</MenuItem>
          <MenuItem value='' onClick={()=>handleCat('Fruits & Vegetables')}>Fruits & Vegetables</MenuItem>
          <MenuItem value='' onClick={()=>handleCat('Dairy & Bakery')}>Dairy & Bakery</MenuItem>
          <MenuItem value='' onClick={()=>handleCat('Beverages')}>Beverages</MenuItem>
          <MenuItem value='' onClick={()=>handleCat('Staples')}>Staples</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default CategoryMenu;
