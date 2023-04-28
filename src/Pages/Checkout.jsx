import { useState, useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {AddAddress,getAdress,updateAddress} from "../Redux/DeliveryReducer/DeliveryActions"
import { BASE_URL } from "../Util/Constant.js";

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
  Stack,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Textarea
} from '@chakra-ui/react'
import axios from "axios";
// import PaymentCard from "../Components/PaymentCard/PaymentCard";

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

  const handleChange = () => {
    setChange(!change);
  };
  function handleAddAddress(){
    dispatch(AddAddress(AdressDetails)).then(handleChange)
  }

  useEffect(() => {
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
  return (
    <div style={{ margin: "auto", marginTop: "150px" }}>
      <div>
        <h1>Order Review</h1>
        {/* <PaymentCard/> */}
        {address.length === 0 ? <div>
          <h1>Add your delivery adress here</h1>
          <Button colorScheme='teal' onClick={onOpen}>
        Add
      </Button>
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
        <div>
            {address.map((el)=>(
              <div key={el._id}>
                <p>{el.landmark}</p>
                <p>{el.mobile}</p>
              </div>
            ))}
            <button onClick={onOpen}>edit</button>
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
    </div>
  );
};

export default Checkout;
