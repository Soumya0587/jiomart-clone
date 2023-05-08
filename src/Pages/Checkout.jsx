import { useState, useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {AddAddress,getAdress,updateAddress} from "../Redux/DeliveryReducer/DeliveryActions"
import { BASE_URL } from "../Util/Constant.js";
import { MdEdit } from 'react-icons/md'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Flex,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Textarea,
  Heading
} from '@chakra-ui/react'
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Loader from "../Components/Loader";
import CartCard from "../Components/CartCard/CartCard";
import PaymentCard from "../Components/PaymentCard/PaymentCard";
import { getCartData } from "../Redux/CartReducer/CartActions";
import "../styles/Checkout.css"
const Checkout = () => {
  const [change, setChange] = useState(false);

  let userId = JSON.parse(localStorage.getItem("UserDetails"))?.userId;
console.log(userId);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
  const dispatch = useDispatch();
  const { isLoading, isError, address } = useSelector((store) => {
    return {
      isLoading: store.AddressReducer.isLoading,
      isError: store.AddressReducer.isError,
      address: store.AddressReducer.address,
    };
  });
  const {items } = useSelector((store) => {
    return {
     
      items: store.CartReducer.items,
    };
  });
  const handleChange = () => {
    setChange(!change);
  };
  function handleAddAddress(){
    dispatch(AddAddress(AdressDetails)).then(handleChange)
  }

  useEffect(() => {
    dispatch(getCartData(userId));
   dispatch(getAdress(userId))
  }, [change]);
  const initialstate = {
    mobile: ""  ,
    address:   "",
    houseNo:   "",
    building:  "",
    pincode:  "",
    landmark: "",
    city: "",
    state:  "",
    userId: userId,
  };
  
  const [AdressDetails, setAdressDetails] = useState(initialstate);
 
  const [getadress,setgetadress]=useState("")
  
  const getAdressdata =()=>{
    
    axios
      .get(BASE_URL + `/address/${userId}`)
      .then((res) => {
        // console.log(res.data[0]);
        setgetadress(res.data[0])})
      
  };
  // getAdressdata()
  useEffect(() => {
    getAdressdata()
  }, []);

  function handleEditAddress(){
    dispatch(updateAddress(getadress)).then(handleChange)
    onClose()
  }
console.log(getadress);
  return isLoading ? (
    <div>
      
    <Loader/>
    </div>
    
  ) : isError ? (
    <Heading >Something went wrong..</Heading>
  ) : (
    
    <div style={{ margin: "auto"}}>
       <Flex
          direction={{ base: "column", md: "row" , lg : "row" }}
          w={{ base: "95%", md: "90%", lg: "90%" }}
          m="auto"
          justifyContent={"space-around"}
        >
          <Box m="20px" w={{ base: "90%", md: "60%" }}>
          <div>
        <Heading>Order Review</Heading>
        
        {address.length === 0 ? <div>
          <Flex justifyContent={"space-between"}> <h1>Add your delivery adress here</h1>
          <Button backgroundColor='#0078ad' color={"white"} _hover={{ bg: '#0c5273' }} onClick={onOpen}>
        Add
      </Button></Flex>
         
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Address Details
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='houseNo'>House No.</FormLabel>
                <Input
                  onChange={(e) =>
                    setAdressDetails({ ...AdressDetails, houseNo: e.target.value })
                  }
                  id='houseNo'
                  placeholder='House No. '
                />
              </Box>

              <Box>
                <FormLabel htmlFor='Building Name'>Building Name</FormLabel>
                <Input
                  onChange={(e) =>
                    setAdressDetails({ ...AdressDetails, building: e.target.value })
                  }
                  id='building'
                  placeholder='Building Name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='address'>Address</FormLabel>
                <Input
                  onChange={(e) =>
                    setAdressDetails({ ...AdressDetails, address: e.target.value })
                  }
                  id='address'
                  placeholder='address'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='landmark'>landmark</FormLabel>
                <Input
                  onChange={(e) =>
                    setAdressDetails({ ...AdressDetails, landmark: e.target.value })
                  }
                  id='landmark'
                  placeholder='landmark '
                />
              </Box>
              <Box>
                <FormLabel htmlFor='pincode'>pincode</FormLabel>
                <Input
                  onChange={(e) =>
                    setAdressDetails({ ...AdressDetails, pincode: e.target.value })
                  }
                  id='pincode'
                  placeholder='pincode '
                />
              </Box>
              <Box>
                <FormLabel htmlFor='city'>city</FormLabel>
                <Input
                  onChange={(e) =>
                    setAdressDetails({ ...AdressDetails, city: e.target.value })
                  }
                  id='city'
                  placeholder='city '
                />
              </Box>
              <Box>
                <FormLabel htmlFor='state'>state</FormLabel>
                <Input
                  onChange={(e) =>
                    setAdressDetails({ ...AdressDetails, state: e.target.value })
                  }
                  id='state'
                  placeholder='state '
                />
              </Box>
              <Box>
                <FormLabel htmlFor='mobile'>mobile</FormLabel>
                <Input
                  onChange={(e) =>
                    setAdressDetails({ ...AdressDetails, mobile: e.target.value })
                  }
                  id='mobile'
                  placeholder='mobile '
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
                    
            <Button colorScheme='blue' onClick={handleAddAddress} >Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </div> : 
        <div className="address-box" >
          <Flex justifyContent={"space-between"}>
          {address.map((el)=>(
              <div key={el._id}>
                <p>{el.houseNo},{el.building},{el.address},{el.landmark},{el.city}-{el.pincode}</p>
                <p>phone: +91 - {el.mobile}</p>
              </div>
            ))}
            {/* <button onClick={onOpen}>edit</button> */}
            <div className="edit" onClick={onOpen}>
              <MdEdit/>
            </div>
          </Flex>
            
            <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Address Details
          </DrawerHeader>

          <DrawerBody>
          
            <Stack spacing='24px'>
              
                <Box>
                <FormLabel htmlFor='username'>House No.</FormLabel>
                <Input
                defaultValue={getadress.houseNo}
                  onChange={(e) =>
                    setgetadress({ ...getadress, houseNo: e.target.value })
                  }
                  
                  id='houseNo'
                  placeholder='House No. '
                />
              </Box>

              <Box>
                <FormLabel htmlFor='Building Name'>Building Name</FormLabel>
                <Input
                defaultValue={getadress.building}
                  onChange={(e) =>
                    setgetadress({ ...getadress, building: e.target.value })
                  }
                  id='building'
                  placeholder='Building Name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='address'>Address</FormLabel>
                <Input
                defaultValue={getadress.address}
                  onChange={(e) =>
                    setgetadress({ ...getadress, address: e.target.value })
                  }
                  id='address'
                  placeholder='address'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='landmark'>landmark</FormLabel>
                <Input
                  defaultValue={getadress.landmark}

                  onChange={(e) =>
                    setgetadress({ ...getadress, landmark: e.target.value })
                  }
                  id='landmark'
                  placeholder='landmark '
                />
              </Box>
              <Box>
                <FormLabel htmlFor='pincode'>pincode</FormLabel>
                <Input
                defaultValue={getadress.pincode}
                  onChange={(e) =>
                    setgetadress({ ...getadress, pincode: e.target.value })
                  }
                  id='pincode'
                  placeholder='pincode '
                />
              </Box>
              <Box>
                <FormLabel htmlFor='city'>city</FormLabel>
                <Input
                defaultValue={getadress.city}
                  onChange={(e) =>
                    setgetadress({ ...getadress, city: e.target.value })
                  }
                  id='city'
                  placeholder='city '
                />
              </Box>
              <Box>
                <FormLabel htmlFor='state'>state</FormLabel>
                <Input
                defaultValue={getadress.state}
                
                  onChange={(e) =>
                    setgetadress({ ...getadress, state: e.target.value })
                  }
                  id='state'
                  placeholder='state '
                />
              </Box>
              <Box>
                <FormLabel htmlFor='mobile'>mobile</FormLabel>
                <Input
                defaultValue={getadress.mobile}
                  onChange={(e) =>
                    setgetadress({ ...getadress, mobile: e.target.value })
                  }
                  id='mobile'
                  placeholder='mobile '
                />
              </Box>
              
              
            </Stack>
            
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
                    
            <Button colorScheme='blue' onClick={handleEditAddress} >Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
          </div>}
      </div>
    
            <Box borderRadius={"5%"}>
            {items.map((item) => (
              <CartCard handleChange={handleChange} key={item.pid} {...item} />
            ))}
            </Box>
           
          </Box>
          
          <PaymentCard/>
         
        </Flex>
        </div>
  );
};

export default Checkout;
