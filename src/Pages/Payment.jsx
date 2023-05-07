import {
    Box,
    Button,
    Divider,
    Flex,
    Input,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import React, { useRef, useState,useEffect } from "react";
  import PayCard from "../Components/PayCard";
  import { useDispatch, useSelector } from "react-redux";
  import { addToOrder } from "../Redux/OrderReducer/OrderActions";
  // import { getCartData } from "../Redux/CartReducer/CartActions";
  import { BASE_URL } from "../Util/Constant";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import emailjs from "@emailjs/browser";
import PaymentCard from "../Components/PaymentCard/PaymentCard";
  import { getCartData } from "../Redux/CartReducer/CartActions";
  
  const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items } = useSelector((store) => store.CartReducer);
      console.log(items);
    const [payment, setPayment] = useState("UPI");
    const toast = useToast();
    const { token, email, name } = useSelector((state) => state.AuthReducer);
    const form = useRef();
    let userId= JSON.parse(localStorage.getItem("UserDetails"))?.userId
    useEffect(() => {
      
      dispatch(getCartData(userId));
      
    }, []);
    let cartTotal = 0;
  
    for (let i = 0; i < items.length; i++) {
      cartTotal += items[i].discounted_price * items[i].quantity;
    }
  
    let totalMRP = 0;
    for (let i = 0; i < items.length; i++) {
      totalMRP += items[i].retail_price * items[i].quantity;
    }
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dateString = `${year}-${month}-${day} ${hours}:${minutes}`;

    let imageData=[]
    let ProductName=[]
    let TotalLength
    let TotalOrderValue=0
    let userdetail
    for(let i=0;i<items.length;i++){
      imageData.push(items[i].image[0])
      ProductName.push(items[i].product_name)
      TotalLength=items.length
      TotalOrderValue+=+items[i].discounted_price * +items[i].quantity
      userdetail=items[0].userId
    }
console.log(userdetail);

    const handleClick = () => {
      // const item = items.map((ele) => {
      //   return { image : ele.image, 
      //     product_name : ele.product_name,
      //     discounted_price:ele.discounted_price,
      //     userId:ele.userId,
      //     pid:ele.pid,
      //     quantity:ele.quantity,
      //     status:"Order Placed",
      //     date : dateString,
      //     payment: payment };
      // });
      // console.log(item);
      async function CartDelete(){
        let del = await axios
          .delete(`${BASE_URL}/users/cart/delete/all/${userId}`
          )
      }
      dispatch(addToOrder({images:imageData,
        products:ProductName,
        count:TotalLength,
        total:TotalOrderValue,
        date:dateString,
        userId:userdetail,
        status:"Order Placed",
        payment:payment
      })).then((res) => {
        toast({
          title: "Order Placed.",
          description: "Order will be delivered to your address within 5 days",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      
            // sendEmail();
            CartDelete()
            setTimeout(() => {
              navigate("/profile");
            }, 2000);
          
      });
      // dispatch(payforOrder());
    };
  
    // const sendEmail = (e) => {
    //   emailjs
    //     .sendForm(
    //       "service_75milvr",
    //       "template_enaloja",
    //       form.current,
    //       "3R6Rkn7Jlt3wrgYA3"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // };
  
    if (items) {
      return (
        <Box marginTop={"150px"}>
          <Box
            display={{ md: "flex" }}
            mt={"2rem"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10rem"}
            mb={"2rem"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"1rem"}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              p={"1rem"}
              borderRadius={".5rem"}
            >
              <Box fontSize={"lg"} fontWeight={"semibold"}>
                Payment Method
              </Box>
              <Box>
                <Tabs>
                  <TabList>
                    <Tab onClick={() => setPayment("UPI")}>Pay using UPI</Tab>
                    <Tab onClick={() => setPayment("Debit")}>Debit Card</Tab>
                    <Tab onClick={() => setPayment("Credit")}>Credit Card</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"1rem"}
                        p={"1rem"}
                        borderRadius={".5rem"}
                      >
                        <Text fontSize={"md"} fontWeight={"normal"}>
                          Add a new UPI
                        </Text>
                        You need to have a registered UPI ID
                        <Flex gap={"1rem"}>
                          <Input placeholder="Enter UPI ID" isRequired />
                          <Button
                            p={"1em 1em"}
                            color={"white"}
                            _hover={{ bg: "orange" }}
                            bg={"#ff8913"}
                          >
                            Verify
                          </Button>
                        </Flex>
                        <Button w={"19rem"} onClick={() => handleClick()}>
                          Securely Pay
                        </Button>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <PayCard handleClick={handleClick} />
                    </TabPanel>
                    <TabPanel>
                      <PayCard handleClick={handleClick} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
            <Box
              boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
              p={"1rem"}
              borderRadius={".5rem"}
              display={"flex"}
              flexDirection={"column"}
              gap={"1rem"}
            >
          {/* <PaymentCard/> */}
                
              <Box>
                <Text fontSize={"xl"} fontWeight={"semibold"}>
                  Order Summary
                </Text>
              </Box>
              <Box>
                <Flex justifyContent={"space-between"} gap={"5rem"}>
                  <Box>
                    <Text>Total MRP</Text>
                  </Box>
                  <Box>₹{totalMRP}</Box>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent={"space-between"} gap={"5rem"}>
                  <Box>
                    <Text>Total Discounts</Text>
                  </Box>
                  <Box color={"green.300"}>₹{totalMRP - cartTotal}</Box>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent={"space-between"} gap={"5rem"}>
                  <Box>
                    <Text>Shipping Charges</Text>
                  </Box>
                  <Box color={"green.300"}>FREE</Box>
                </Flex>
              </Box> 
               <Divider></Divider>
              <Flex
                justifyContent={"space-between"}
                fontSize={"lg"}
                fontWeight={"semibold"}
                gap={"5rem"}
              >
                <Box>Payable Amount</Box>
                <Box>₹{totalMRP - (totalMRP - cartTotal)}</Box>
              </Flex> 
            </Box>
          </Box>
          {/* <form style={{ display: "none" }} ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input value={name} type="text" name="user_name" />
            <label>Email</label>
            <input value={email} type="email" name="user_email" />
            <label>Message</label>
            <textarea
              value={`Your Order has been confirmed , it will be deliver in 5-7 days `}
              name="message"
            />
            <input type="submit" value="Send" />
          </form> */}
        </Box>
      );
    }
  };
  
  export default Payment;
  