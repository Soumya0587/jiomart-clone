import React from 'react'
import {
    Box,
    Grid,
    HStack,
    Select,
    Stack,
    Text,
    UnorderedList,
    useToast,
  } from "@chakra-ui/react"
  import AccordianFilter from '../Components/Filter/AccordianFilter';
import {
    getProducts,
    productsGetErrorAction,
    productsGetRequestAction,
    productsGetSuccessAction,
  } from "../Redux/GroceryReducer/GroceryActions";
  import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from '../Util/Constant';
import { BrandFilter } from '../Components/Filter/BrandFilter';
import GroceryCard from '../Components/Grocery/GroceryCard';
import Accordian from '../Components/Accordian/Accordian';
const Grocery = () => {

const [searchParams, setSearchParams] = useSearchParams();

const initialBrands = searchParams.getAll("brand");
console.log(initialBrands);
  const [brand, setBrand] = useState(initialBrands || []);

  const { products, isLoading, TotalData } = useSelector((store) => {
    return {
      products: store.GroceryReducer.products,
      isLoading: store.GroceryReducer.isLoading,
      TotalData: store.GroceryReducer.TotalData,
    };
  });
// console.log(products);
  const collections = (data, name) => {
    const unique = [];
    
    data?.forEach((item) => {
      if (!unique.includes(item[name])) {
        unique.push(item[name]);
      }
    });

    const newArr = unique.filter((str) => str !== "");

    return newArr;
  };

  const filterData = (data, name) => {
    let collectionQueries = "";
    for (let i = 0; i <= data.length - 1; i++) {
      collectionQueries += `${name}=${data[i]}&`;
    }
    return collectionQueries;
  };

  const [value, setValue] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const { Q } = useParams();

  const c_value =
    Q === "Snacks & Branded foods"
      ? "Snacks & Branded foods"
      : Q === "Fruits & Vegetables"
      ? "Fruits & Vegetables"
      : Q === "Dairy & Bakery"
      ? "Dairy & Bakery"
      : Q === "Beverages"
      ? "Beverages"
      : Q === "Staples"
      ? "Staples"
      : Q === "Biscuits & Cookies"
      ? "Biscuits & Cookies"
      : Q === "Noodle & Pasta"
      ? "Noodle & Pasta"
      : Q === "Snacks & Namkeen"
      ? "Snacks & Namkeen"
      : Q === "Chocolates & Candies"
      ? "Chocolates & Candies"
      : Q === "Fresh Vegetables"
      ? "Fresh Vegetables"
      : Q === "Fresh Fruits"
      ? "Fresh Fruits"
      : Q === "Premium Fruits"
      ? "Premium Fruits"
      : Q === "Butter"
      ? "Butter"
      : Q === "Ghee"
      ? "Ghee"
      : Q === "Cakes & Muffins"
      ? "Cakes & Muffins"
      : Q === "Tea"
      ? "Tea"
      : Q === "Atta, Flours & Sooji"
      ? "Atta, Flours & Sooji"
      : Q === "Coffee"
      ? "Coffee"
      : Q === "Fruit Juices"
      ? "Fruit Juices"
      : Q === "Edible Oils"
      ? "Edible Oils"
      : Q;
      const dispatch = useDispatch();
      const getFilterProducts = (data) => {
        const brandCollection = filterData(data?.brand, "brand");
       
        console.log(brandCollection);
        dispatch(productsGetRequestAction());
        axios
          .get(
            `${BASE_URL}/grocery?c_value=${c_value}&${brandCollection}sortBy=${value}&page=${page}&limit=${limit}`
          )
          .then((res) => {
            console.log(res.data);
            dispatch(productsGetSuccessAction(res.data));
          })
          .catch((err) => {
            dispatch(productsGetErrorAction());
            console.log(err.message);
          });
      };

      useEffect(() => {
        dispatch(getProducts(c_value));
    
        const params = {
          brand,
        };
        getFilterProducts(params);
        setSearchParams(params);
        

      }, [brand,page,limit]);

      // const handleInfiniteScroll= async()=>{
      //   try{
      //     if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      //       setPage((prev)=> prev +1)
      //     }
      //   }
      //   catch(e){
      //     console.log(e);
      //   }
      // }
      // useEffect(() => {
      //   window.addEventListener("scroll" ,  handleInfiniteScroll)
      //   return () => window.removeEventListener("scroll",handleInfiniteScroll)
      // }, []);


      const handleClear = () => {
        setBrand([]);
      };
    // console.log(TotalData);
  return (  
    <>
     <Stack
        w={"100%"}
        mt={"100px"}
        p={{ base: "10px", sm: "10px", md: "15px", lg: "25px" }}
      >
        <Box mb={"15px"}>
          {/* <BreadCrumb /> */}
          <HStack w={"100%"}>
            <HStack w={"100%"}>
              <Text fontSize={"16px"} fontWeight={"650"} textAlign={"left"}>
                JioMart Store
              </Text>
              <Text fontSize={"14px"} color={"#696d7f"} fontWeight={"450"}>
                {" "}
                - {TotalData?.length} items
              </Text>
            </HStack>
            <UnorderedList
              display={{ base: "block", sm: "block", md: "none", lg: "none" }}
            >
              <Stack w={"100%"} justify={"flex-start"} align={"flex-start"}>
                {/* <FiltersDrawer
                  Q={Q}
                  brands={brands}
                  setBrands={setBrands}
                 
                  handleClear={handleClear}
                
                  initialBrands={initialBrands}
                  
                /> */}
              </Stack>
            </UnorderedList>
          </HStack>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(1, 100%)",
            sm: "repeat(1, 100%)",
            md: "repeat(2, 25% 75%)",
            lg: "repeat(2, 18% 82%)",
          }}
          w={"100%"}
          boxSizing={"border-box"}
        >
          <UnorderedList
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            marginLeft={"0px"}
          >
            <Stack w={"100%"} maxW={"240px"}>
              <HStack justify={"space-between"} mb={"12px"}>
                <Text fontSize={"18px"} fontWeight={"600"}>
                  FILTERS
                </Text>
                <Text
                  pr={{ base: "5px", sm: "5px", md: "10px", lg: "20px" }}
                  fontSize={"14px"}
                  fontWeight={"600"}
                  color={"#ff3f6c"}
                  cursor={"pointer"}
                  onClick={handleClear}
                >
                  CLEAR ALL
                </Text>
              </HStack>
              <Stack
                w={"95%"}
                borderRight={"1px solid #f2f2f2"}
                position={"relative"}
                top={"5px"}
              >
                {/* <CheckBoxPerson
                  Q={Q}
                  setBrand={setBrand}
                  initialBrands={initialBrands}
                /> */}
                {/* <AccordianFilter
                 Q={Q}
                 setBrand={setBrand}
                 initialBrands={initialBrands}
               
                /> */}
                <Accordian  Q={Q}
                 
                  setBrand={setBrand}
                 brand={brand}
                  initialBrands={initialBrands}
               />
                <BrandFilter
                  options={collections(TotalData, "brand")}
                  name={"Brand"}
                  setBrand={setBrand}
                  brand={brand}
                />
               
              </Stack>
            </Stack>
          </UnorderedList>

          <Stack>
            <HStack w={"100%"} mt={"0px"}>
              {/* <FiltersTop
                collections={collections}
                brand={brand}
                value={value}
                setValue={setValue}
              /> */}
            </HStack>

            <Grid
              position={"relative"}
              top={"-40px"}
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              w={"100%"}
              boxSizing={"border-box"}
            >
              {products?.map((item, i) => (
                <GroceryCard
                //   handleOption={AddToWishlist}
                //   option={"WISHLIST"}
                //   key={item._id}
                  props={item}
                />
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Stack>
    </>
  )
}

export default Grocery