import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  import CartCard from "../Components/CartCard/CartCard";
  import { getCartData } from "../Redux/CartReducer/CartActions";
import PaymentCard from "../Components/PaymentCard/PaymentCard";
import Navbar from "../Components/Navbar/Navbar";
import Loader from "../Components/Loader";
//   import Loading from "../admin/components/Loading";

  const CartPage = () => {
    const dispatch = useDispatch();
    const [change, setChange] = useState(false);
    const { isLoading, isError, items } = useSelector((store) => {
      return {
        isLoading: store.CartReducer.isLoading,
        isError: store.CartReducer.isError,
        items: store.CartReducer.items,
      };
    });
    let userId= JSON.parse(localStorage.getItem("UserDetails"))?.userId
    console.log(items);
    // let cartTotal = 0;
    // for (let i = 0; i < items.length; i++) {
    //   cartTotal += items[i].discounted_price * items[i].quantity;
    // }
    // let totalMRP = 0;
    // for (let i = 0; i < items.length; i++) {
    //   totalMRP += items[i].retail_price * items[i].quantity;
    // }
    const handleChange = () => {
      setChange(!change);
    };
  
    useEffect(() => {
      dispatch(getCartData(userId));
    }, [change]);
  
    return isLoading ? (
      <div>
        <Navbar/>
      <Loader/>
      </div>
      
    ) : isError ? (
      <Heading>Something went wrong..</Heading>
    ) : items.length === 0 ? (
      <Box>
        <Navbar/>
      <Box
        m="auto"
        mt="150px"
        mb="100px"
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          m="auto"
          src="https://static1.hkrtcdn.com/hknext/static/media/cart/empty-cart-new.svg"
        />
        <Text fontWeight={"bold"}>Hey, it feels so light!</Text>
        <Text mb="30px">There is nothing in you bag. Let’s add some items.</Text>
        <Link to="/">
          <Button
            color={"white"}
            _hover={{ bgColor: "rgb(5,161,163)" }}
            bgColor={"rgb(15,181,183)"}
          >
            Continue Shopping
          </Button>
        </Link>
      </Box>
      </Box>
    ) : (
      <div style={{marginTop:"150px"}}>
        <Navbar/>
        <Flex
          direction={{ base: "column", md: "row" , lg : "row" }}
          w={{ base: "95%", md: "90%", lg: "90%" }}
          m="auto"
          justifyContent={"space-around"}
        >
          <Box m="20px" w={{ base: "90%", md: "60%" }}>
            <Heading >My Cart</Heading>
            <Box borderRadius={"5%"}>
            {items.map((item) => (
              <CartCard handleChange={handleChange} key={item.pid} {...item} />
            ))}
            </Box>
           
          </Box>
          
          <PaymentCard/>
          
          
          {/* <Box
            mt="5%"
            p="1%"
            w={{ base: "90%", md: "27%" }}
            variant="outline"
            borderRadius={"10px"}
            //   border={"1px solid gray"}
            h="moz-min-content"
          >
            <Heading as="h3" size="md" marginBottom="4">
              Order Summary
            </Heading>
  
            <Flex marginBottom="2" justifyContent={"space-between"}>
              <Text>Total MRP:</Text>
              <Text>Rs.{totalMRP}</Text>
            </Flex>
  
            <Flex marginBottom="2" justifyContent={"space-between"}>
              <Text>Total Discount:</Text>
              <Text>Rs.{totalMRP - cartTotal}</Text>
            </Flex>
  
            <Flex marginBottom="2" justifyContent={"space-between"}>
              <Text>Shipping Charges:</Text>
              <Text color={"rgb(5,161,163)"}>FREE</Text>
            </Flex>
  
            <Divider />
  
            <Flex marginBottom="3" justifyContent={"space-between"}>
              <Text fontWeight={"bold"}>Payable Amount:</Text>
              <Text fontWeight={"bold"}>Rs.{cartTotal}</Text>
            </Flex>
  
            <Button
              as={Link}
              to={"/checkout"}
              color={"white"}
              _hover={{ bgColor: "rgb(5,161,163)" }}
              bgColor={"rgb(15,181,183)"}
              ml={"20%"}
            >
              Proceed to Pay
            </Button>
          </Box> */}
        </Flex>
      </div>
    );
  };
  
  export default CartPage;
  