import {useEffect,useMemo,useState} from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import axios from "axios";
import {
  NavLink,
  Link as RouterLink,
  Link,
  useNavigate,
} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import "../../styles/TopNavbar.css";
import logo from "../../Images/jiomart_beta_logo.svg";
import cart from "../../Images/cart-icon.svg";
import NavDrawer from "./NavDrawer";
import { debounce } from "lodash";
import { BASE_URL } from "../../Util/Constant.js";
const TopNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    // for search state
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  // function for getting the Search data from backend
  const getdata = () => {
    axios
      .get(BASE_URL + `/grocery?c_value=${searchValue}`)
      .then((res) => {
        console.log("search: ", res.data);
        setSearchResults(res.data);
      });
  };
    // display Search Data
    let listToDisplay = searchResults;

    // onChange apply on input
    const handleInputChange = (e) => {
      setSearchValue(e.target.value);
    };
      // Store the Search Data in Function and Call when search will happen
  const SearchData = () => {
    return listToDisplay.map((el, i) => {
      return (
        <Link to={`/signlegrocery/${el._id}`} onClick={()=>setSearchValue("")}>
          <Box
            key={el._id}
            pl={2}
           display={"flex"}
           alignItems={"flex-start"}
            textAlign={"left"}
            // mt={2}
            overflow="auto"
            // maxHeight="20rem"
            // color={"white"}
          >
            <Text fontSize="xs" fontWeight="bold">
              {el.product_name}
            </Text>
           
          </Box>
        </Link>
      );
    });
  };
    // Filtering logic is apply on SearchResults
    if (searchValue !== "" || searchValue.trim() ) {
      listToDisplay = searchResults.filter((el) => {
        // return fruit.includes(searchValue);
        return el.product_name.toLowerCase().includes(searchValue);
      });
    }
  
    // Use Debounce for searching with useMemo
    const debouncedResults = useMemo(() => {
      return debounce(handleInputChange, 3000);
    }, []);
  
    // for unmounting search functionality (it means when backspace hit the search data will vanish)
    useEffect(() => {
      return () => {
        debouncedResults.cancel();
      };
    });
    useEffect(() => {
      
      getdata();
    }, [searchValue]);
  return (
    <div id="container">
      <div className="leftNav">
        <Box>
          <IconButton
            id="IconButton"
            variant="outline"
            colorScheme="#0078ad"
            borderRadius={"50%"}
            color={"white"}
            size="lg"
            aria-label="hamburger"
            fontSize="22px"
            icon={<GiHamburgerMenu />}
            onClick={onOpen}
          />
          <NavDrawer isOpen={isOpen} onClose={onClose}/>
        </Box>
        <Box className="Box">
          <Image src={logo} alt="" />
        </Box>
        <Box className="Box">
          <Text color="white">Deliver to kolkata 700050</Text>
        </Box>
      </div>
      <div className="rightNav">
        <div className="search">
          <span>
            {" "}
            <AiOutlineSearch />
          </span>
          <input id="input" type="text" placeholder="Search JioMart" value={searchValue}
                  onChange={handleInputChange} />
                  <VStack className="searchResult" mt={10} spacing={2}>
        {searchValue.trim().length>0 && SearchData()}
              </VStack>
        </div>
        
        <div className="cart">
          <Image src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
