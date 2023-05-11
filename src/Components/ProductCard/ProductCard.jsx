import {useState,useCallback} from "react";
import {
    Card,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    Flex,
    Box,
    useToast
  } from "@chakra-ui/react";
  import { Link, useParams, useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";

import {RiHeart3Fill} from "react-icons/ri"
import { addToCart } from "../../Redux/CartReducer/CartActions";
import {addToWishlist} from "../../Redux/WishlistReducer/WishlistActions"
import "../../styles/ProductCard.css"
const ProductCard = ({item,index}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  [toggleHeart, setToggleHeart] = useState(false)
    
    const changeColor = useCallback(() =>{
     setToggleHeart(!toggleHeart)
    },[])
    let userId= JSON.parse(localStorage.getItem("UserDetails"))?.userId
    console.log(userId);
    const toast = useToast();
    const handleAddtoCart = ({
        image,
        product_name,
        discounted_price,
        retail_price,
        category,
        sub_category,
        discount,
        rating,
        brand,
        stock,
        _id,
        net_quantity,
      }) => {
        dispatch(
          addToCart({
            image,
        product_name,
        discounted_price,
        retail_price,
        category,
        sub_category,
        discount,
        rating,
        brand,
        stock,
        
            
            pid: _id,
            userId,
            quantity: 1,
          })
        ).then((res)=>{
         
          if(res==="Item Already exist in the Cart"){
            toast({
              title: "Item Already exist in the Cart",
              description: "",
              status: "error",
              duration: 9000,
              isClosable: true,
            })
          }else{
            toast({
              title: "item added.",
              description: "Item added to your cart",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
    
          }
          navigate("/cart")
        })
       
      };
      const handleAddtoWishlist = ({
        image,
        product_name,
        discounted_price,
        retail_price,
        category,
        sub_category,
        discount,
        rating,
        brand,
        stock,
        _id,
      }) => {
        dispatch(
          addToWishlist({
            image,
        product_name,
        discounted_price,
        retail_price,
        category,
        sub_category,
        discount,
        rating,
        brand,
        stock,
            pid: _id,
            userId,
          })
        ).then((res)=>{
         
          if(res==="Item Already exist in the Wishlist"){
            toast({
              title: "Item Already exist in the Wishlist",
              description: "",
              status: "error",
              duration: 9000,
              isClosable: true,
            })
          }else{
            toast({
              title: "item added.",
              description: "Item added to your Wishlist",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
    
          }
          
        })
       
      };
  return (
    <>
      <Card maxW="sm" key={index} variant={"unstyled"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
        <RiHeart3Fill className={
            toggleHeart ? 'heart active' : 'heart'
          } onClick={()=>{
            changeColor()
            handleAddtoWishlist(item)
            }}/>
          <Link to={`../signlegrocery/${item._id}`}>
         
            <Box w={"80%"} margin={"auto"} h={"150px"}>
            <Image
              w={"100%"}
              h={"100%"}
              display={"block"}
              src={item.image[0]}
            //   borderRadius="lg"
            />
            </Box>
           
          </Link>
        </Flex>
        <Stack pl="6" pr="6" bg="white">
            <div className="name">
            {item.product_name}
            </div>
            

            <Heading fontSize="md">₹ {item.discounted_price}</Heading>{" "}
            <Flex gap={2} alignItems={"center"}>
            <Text color="gray" textDecoration={"line-through"}>
              ₹{item.retail_price}
            </Text>
            <Box bgColor={"#e5f7ee"}>
                    <Text fontWeight="bold" color={"#03753c"} p={"5px"}>{item.discount}% Off</Text>
                  </Box>
          </Flex>
        </Stack>
        <Button
          onClick={() => handleAddtoCart(item)}
          w={"85%"}
          margin="auto"
          m="2"
          borderRadius={"20px"}
        //   boxShadow="lg"
          p="2"
          bg="white"
          _hover={{ borderColor:"#0078ad"}}
          color="#0078ad"
          variant="outline"
        >
          Add to cart
        </Button>
      </Card>
    </>
  );
};

export default ProductCard;
