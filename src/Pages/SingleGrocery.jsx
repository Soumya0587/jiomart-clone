import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Heading,
    HStack,
    Image,
    Input,
    Text,
    useToast,
    VStack,
    Icon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
    useDisclosure,
    Flex,
    Spacer,
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";
  import { Link, useParams, useNavigate } from "react-router-dom";
  import { TbTruckDelivery } from "react-icons/tb";
  import { AiOutlineQuestionCircle } from "react-icons/ai";
  import React from "react";
  import axios from "axios";
  import { useDispatch, useSelector } from "react-redux";
  import { addToCart } from "../Redux/CartReducer/CartActions";
//   import AddedToCartModal from "../components/Cart/AddedToCartModal";
//   import Loader from "../components/Loader";
import { BASE_URL } from "../Util/Constant";
import ProductSlider from "../Components/Slider/ProductSlider";
import SimilarProduct from "../Components/SingleProductPageComp/SimilarProduct";
import Navbar from "../Components/Navbar/Navbar";
  
  function SingleGroceryPage() {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    const toast = useToast();
    const { id } = useParams();
    const dispatch = useDispatch();
    // const { loading, error, message, total } = useSelector(
    //   (store) => store.cartManager
    // );
    const [product, setProduct] = React.useState([]);
    const [currentImage, setCurrentImage] = React.useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [imageHeight, setImageHeight] = React.useState("100");
    
    React.useEffect(() => {
      axios
        .get(`${BASE_URL}/grocery/${id}`)
        .then(function (response) {
          let data = response.data;
          setProduct(data);
          setCurrentImage(data.image[0]);
          if (data.image.length === 1) {
            setImageHeight("200");
          } else if (data.image.length === 2) {
            setImageHeight("200");
          } else if (data.image.length === 3) {
            setImageHeight("266");
          } else if (data.image.length === 4) {
            setImageHeight("200");
          } else if (data.image.length === 5) {
            setImageHeight("160");
          } else {
            setImageHeight("100");
          }
        })
        .catch(function (error) {
          console.log("error in getting single product data" + error);
        });
    }, [id]);
  
    // Handle add to cart button click
    // const handleAddToCart = () => {
    //   // Add logic to add product to cart
    //   dispatch(addToCart(id, onOpen));
    // };
    // React.useEffect(()=>{
    //   toast({
    //     position: "top-right",
    //     title: msg,
    //     status: "success",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    // }, [setCartItem])


    let userId= JSON.parse(localStorage.getItem("UserDetails"))?.userId
    console.log(userId);

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
   


    
    if (product.length === 0) {
      return (
        <Box pt={"23%"} pb="15%">
          <Navbar/>
          {/* <Loader /> */}
        </Box>
      );
    } else {
      return (
        <Box>
          <Navbar/>
        <Box display={"grid"} py={10} pt={{ base: "30px", md: "120px" }}>
          <Flex ml={{ base: "2%", sm: "2%", md: "2%", lg: "2%" }}>
            <Button
              onClick={handleGoBack}
              fontSize={{ base: "small", sm: "large", md: "larger" }}>
              Go Back
            </Button>
          </Flex>
          {/* Top section for image and prices */}
          <Container maxW={{ base: "80%", md: "95%", lg: "90%" }}>
            <Grid
              gridTemplateColumns={{ base: "100%", md: "50% 50%", lg: "60%,40%" }}
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between">
              {/* images left section */}
              <Box p="10px">
                {/* for larger screen */}
                <Box display={{ base: "none", md: "none", lg: "block" }}>
                  <HStack justify={"space-between"}>
                    {/* left multiple images */}
  
                    <VStack
                      align="flex-start"
                      gap={0}
                      w={{ base: "20%", md: "30%" }}>
                      {product &&
                        product.image
                          .slice(0, 4) // only map the first 6 elements, starting from index 1
                          .map((e, i) => (
                            <Box
                              key={e + i}
                              h={`${imageHeight}`}
                              overflow="hidden">
                              <Image
                                src={e}
                                alt={`Image${i}`}
                                objectFit="contain"
                                onClick={() => {
                                  setCurrentImage(e);
                                }}
                              />
                            </Box>
                          ))}
                    </VStack>
  
                    {/* Right main Image */}
                    <Box
                      // overflow="hidden"
                      h={{
                        md: `${
                          (product.image.length - 1) * imageHeight +
                          (product.image.length - 1) * 7
                        }`,
                        lg: `${
                          (product.image.length - 1) * imageHeight +
                          (product.image.length - 1) * 7
                        }`,
                      }}>
                      {currentImage ? (
                        <Image
                          src={currentImage}
                          alt={product.name}
                          objectFit="contain"
                        />
                      ) : (
                        ""
                      )}
                    </Box>
                  </HStack>
                </Box>
                {/* for small screen */}
                <Box display={{ base: "block", md: "block", lg: "none" }}>
                  <VStack>
                    <Box
                      overflow="hidden"
                      maxH={`${
                        (product.image.length - 1) * 100 +
                        (product.image.length - 1) * 7
                      }px`}>
                      {currentImage ? (
                        <Image
                          src={currentImage}
                          alt={product.name}
                          objectFit="cover"
                        />
                      ) : (
                        ""
                      )}
                    </Box>
                    <HStack align="flex-start">
                      {product &&
                        product.image.map(
                          (e, i) =>
                            i >= 0 && (
                              <Box key={i + e} h="100px" overflow="hidden">
                                <Image
                                  src={e}
                                  alt={`Image${i}`}
                                  objectFit="cover"
                                  onClick={() => {
                                    setCurrentImage(e);
                                  }}
                                />
                              </Box>
                            )
                        )}
                    </HStack>
                  </VStack>
                </Box>
              </Box>
  
              {/* Right sections */}
              <Box py={{ base: 6, md: 0 }} pl={{ md: 6 }}>
              <Heading size={{ base: "md", md: "md", lg: "md" }} mb={3} color={"#0078ad"}>
                  {product.brand}
                </Heading>
                <Heading size={{ base: "md", md: "md", lg: "md" }} mb={3}>
                  {product.product_name}
                </Heading>
                <Box d="flex" alignItems="center" mb={3}>
                  <HStack>
                    <Text>
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={
                              i < Math.floor(product.rating)
                                ? "yellow.500"
                                : "gray.300"
                            }
                          />
                        ))}
                    </Text>
                    <Text ml={2} color="gray.500">
                      ({product.rating})
                    </Text>
                    
                  </HStack>
                </Box>
                <HStack>
                  <Text fontSize="2xl" fontWeight="bold">
                  ₹{product.discounted_price}
                  </Text>
                  <Box bgColor={"#e5f7ee"}>
                    <Text fontWeight="bold" color={"#03753c"} p={"5px"}>{product.discount}% Off</Text>
                  </Box>
                  </HStack>
                  <HStack>
                    <Text>M.R.P:</Text>
                  <Text
                    textDecoration={"line-through"}
                    fontSize="xl"
                    mb={3}
                    color="gray.500">
                    ₹{product.retail_price}
                  </Text>
                  <Text> (Incl. of all taxes)</Text>
                  </HStack>
                  <Divider borderColor={"black"} mt={"20px"} mb={"20px"}></Divider>
                  <Box>
                  <Heading size={{ base: "md", md: "md", lg: "lg" }} mb={3}>Features & Details</Heading>
                  <UnorderedList>
                    {product.features.map((el)=>(
                      
                        <ListItem>{el}</ListItem>
                        
                      
                    ))}
                  </UnorderedList>
                  </Box>
                  <Divider borderColor={"black"} mt={"20px"} mb={"20px"}></Divider>
                <Box>
                  <Heading size={{ base: "md", md: "md", lg: "lg" }} mb={3}>Description</Heading>
                  <Text>{product.description}</Text>
                </Box>
                
  
                <VStack mt={"20px"} spacing={3}>
                  <Button
                    // isLoading={loading}
                    w="full"
                    bgColor="#0078ad"
                    size="lg"
                    _hover={{ bg: '#0c5273' }}
                    color={"white"}
                    borderRadius={"30px"}
                    // onClick={handleAddToCart}
                    onClick={() => handleAddtoCart(product)}
                    >
                    Add to cart
                  </Button>
                  
                 
                </VStack>
              </Box>
            </Grid>
         
            
          </Container>
         
          
          
          
        </Box>
        <SimilarProduct value={product}/>
        </Box>
      );
    }
  }
  
  export default SingleGroceryPage;
  