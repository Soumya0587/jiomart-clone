import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    HStack,
    Text,
    Stack,
  } from "@chakra-ui/react";
  import { useEffect, useRef } from "react";
  import { BiFilterAlt } from "react-icons/bi";
  import { useSelector } from "react-redux";
  import { useParams } from "react-router-dom";
  import Accordian from '../Accordian/Accordian';
import { BrandFilter } from "../Filter/BrandFilter";

  
  export const FiltersDrawer = ({
    Q,
   
    brand,
    setBrand,
    initialBrands,
    handleClear,
    
  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
  
    const { products, isLoading, TotalData } = useSelector((store) => {
      return {
        products: store.GroceryReducer.products,
      isLoading: store.GroceryReducer.isLoading,
      TotalData: store.GroceryReducer.TotalData,
      };
    });
  
    const collections = (data, name) => {
      const unique = [];
  
      data.forEach((item) => {
        if (!unique.includes(item[name])) {
          unique.push(item[name]);
        }
      });
  
      const newArr = unique.filter((str) => str !== "");
  
      return newArr;
    };
  
    return (
      <>
        <Button
          size={"sm"}
          pb={"2px"}
          bg={"#ff3f6c"}
          zIndex={"50"}
          rightIcon={<BiFilterAlt />}
          ref={btnRef}
          color={"white"}
          onClick={onOpen}
          _hover={{ color: "white", backgroundColor: "#fb5d82" }}
          _active={{ color: "white", backgroundColor: "#ff3f6c" }}
          transition={"0.3s"}
        >
          Filters
        </Button>
        
        <Drawer
        
          size={"xs"}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Text
              mt={"10px"}
              pb={"10px"}
              pl={"25px"}
              fontSize={"18px"}
              fontWeight={"600"}
              borderBottom={"1px solid lightgray"}
            >
              JIOMART
            </Text>
  
            <DrawerBody>
              <Stack w={"100%"} maxW={"240px"}>
                <HStack justify={"space-between"}>
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
                <Stack w={"95%"} position={"relative"} top={"5px"}>
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        
        
      </>
    );
  };
  