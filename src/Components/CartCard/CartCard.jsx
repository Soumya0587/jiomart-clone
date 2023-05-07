import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    VStack,
    HStack,
    Text,
    Flex,
    Spacer,
    Box
  } from "@chakra-ui/react";
  import React from "react";
  import { RiDeleteBin6Line } from "react-icons/ri";
  import { useDispatch } from "react-redux";
  import { deleteCartItem, updateQuantity } from "../../Redux/CartReducer/CartActions";
  import "../../styles/CartCard.css"
  const CartCard = ({
    pid,
    _id,
    image,
    product_name,
    discounted_price,
    retail_price,
    quantity,
    handleChange,
  }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(deleteCartItem(_id)).then(handleChange);
    };
    const handleAdd = () => {
      quantity += 1;
      let data = {
        pid,
        _id,
        image,
        product_name,
    discounted_price,
    retail_price,
        quantity,
      };
      dispatch(updateQuantity(data)).then(handleChange);
    };
    const handleReduce = () => {
      quantity -= 1;
      let data = {
        pid,
        _id,
        image,
        product_name,
    discounted_price,
    retail_price,
        quantity,
      };
      dispatch(updateQuantity(data)).then(handleChange);
    };
    return (
      <Card
        key={pid}
        // direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        marginTop={"50px"}
        // variant="elevated"
        justifyContent={"space-evenly"}
      >
        <Flex direction={{ base: "column", md: "row" }} justifyContent={"space-between"}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "150px" }}
            src={image[0]}
            alt={product_name}
          />
  
          <VStack>
            <CardBody>
              <Heading size="sm">{product_name}</Heading>
              <Heading size="md">Rs.{discounted_price}</Heading>
              <Flex>
                <Text>MRP:</Text>
                <Text textDecoration={"line-through"}>{retail_price}</Text>
              </Flex>
            </CardBody>
            {/* <Spacer/> */}
           
             
             
            
          </VStack>
          <Spacer />
          <Button
            _hover={{ bgColor: "#0c5273" }}
            bgColor={"#0078ad"}
            onClick={handleDelete}
            size="sm"
          >
            <RiDeleteBin6Line color="white" />
          </Button>
        </Flex>
        {/* <CardFooter> */}
          <Box className="counter">
          <Flex alignItems="center" >
                <Button
                  _hover={{border :"1px solid #0c5273"}}
                 
                  onClick={handleReduce}
                  size="sm"
                  color={"#0c5273"}
                  isDisabled={quantity === 1}
                  borderRadius={"50%"}
                >
                  -
                </Button>
                <Text ml="10px" mr="10px">
                  {quantity}
                </Text>
                <Button
                  _hover={{border :"1px solid #0c5273"}}
                  
                  onClick={handleAdd}
                  size="sm"
                  color={"#0c5273"}
                  borderRadius={"50%"}
                  isDisabled={quantity === 2}

                >
                  +
                </Button>
              </Flex>
              
          </Box>
           
            {/* </CardFooter> */}
      </Card>
    );
  };
  
  export default CartCard;
  