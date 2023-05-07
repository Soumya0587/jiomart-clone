import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useToast,
    Button,
    Input,
    Select,
    CircularProgress,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addProduct, getProducts } from "../../Redux/AdminReducer/AdminActions";
  
  const AddTable = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const { isLoading } = useSelector((store) => store.AdminReducer);
  
    const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [features1, setFeatures1] = useState("");
  const [features2, setFeatures2] = useState("");
    const [currentProduct, setCurrentProduct] = useState({image: [],
        product_name: "",
    description: "",
    category: "Snacks & Branded foods",
    sub_category: "Biscuits & Cookies",
    retail_price: 0,
    discounted_price: 0,
    discount: 0,
    brand: "",
    rating: 0,
    stock: 0,
    food_type: "veg",
    features:[],
    net_quantity: 0,});
  
    const handleSubmit = () => {
      const imgArr = [img1, img2, img3, img4];
      const featuresArr = [features1, features2];
      currentProduct.image = imgArr;
      currentProduct.features = featuresArr;
      console.log(currentProduct);
  
      dispatch(addProduct(currentProduct)).then((res) => {
        toast({
          title: "Product Added",
          description: "The product is added successfully",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
      }).then((res)=>{
        dispatch(getProducts())
      })
    };
  
    if (isLoading) {
      return <CircularProgress isIndeterminate color="green.300" />;
    } else {
      return (
        <>
          <TableContainer mt={"-10"}>
            <Table variant="simple" colorScheme="teal">
              <TableCaption color='tomato'>
                Please verify all details before adding product
              </TableCaption>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
  
              <Tbody>
                <Tr>
                  <Td>Brand</Td>
                  <Td>
                    <Input
                      value={currentProduct.brand}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          brand: e.target.value,
                        })
                      }
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Image 1</Td>
                  <Td>
                    <Input
                      value={img1}
                      onChange={(e) => setImg1(e.target.value)}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Image 2</Td>
                  <Td>
                    <Input
                      value={img2}
                      onChange={(e) => setImg2(e.target.value)}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Image 3</Td>
                  <Td>
                    <Input
                      value={img3}
                      onChange={(e) => setImg3(e.target.value)}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Image 4</Td>
                  <Td>
                    <Input
                      value={img4}
                      onChange={(e) => setImg4(e.target.value)}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Product Name</Td>
                  <Td>
                    <Input
                      value={currentProduct.product_name}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          product_name: e.target.value,
                        })
                      }
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Description</Td>
                  <Td>
                    <Input
                      value={currentProduct.description}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          description: e.target.value,
                        })
                      }
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Features 1</Td>
                  <Td>
                    <Input
                      value={features1}
                      onChange={(e) => setFeatures1(e.target.value)}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Features 2</Td>
                  <Td>
                    <Input
                      value={features2}
                      onChange={(e) => setFeatures2(e.target.value)}
                    />
                  </Td>
                </Tr>
                <Tr></Tr>
                <Tr>
                  <Td>Net Quantity</Td>
                  <Td>
                    <Input
                      value={currentProduct.net_quantity}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          net_quantity: +e.target.value,
                        })
                      }
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>MRP</Td>
                  <Td>
                    <Input
                      value={currentProduct.retail_price}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          retail_price: Number(e.target.value),
                        })
                      }
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Selling Price</Td>
                  <Td>
                    <Input
                      value={currentProduct.discounted_price}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          discounted_price: Number(e.target.value),
                        })
                      }
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Discount</Td>
                  <Td>
                    <Input
                      value={currentProduct.discount}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          discount: Number(e.target.value),
                        })
                      }
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Category</Td>
                  <Td>
                    <Select
                      variant="filled"
                      value={currentProduct.category}
                      
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          category: e.target.value,
                        })
                      }
                    >
                      <option value="Snacks & Branded foods">Snacks & Branded foods</option>
                      <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                      <option value="Dairy & Bakery">
                      Dairy & Bakery
                      </option>
                      <option value="Beverages">Beverages</option>   
                      <option value="Staples">Staples</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Sub Category</Td>
                  <Td>
                    <Select
                      variant="filled"
                      value={currentProduct.sub_category}
                      
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          sub_category: e.target.value,
                        })
                      }
                    >
                      <option value="Biscuits & Cookies">Biscuits & Cookies</option>
                      <option value="Noodle & Pasta">Noodle & Pasta</option>
                      <option value="Snacks & Namkeen">Snacks & Namkeen</option>
                      <option value="Chocolates & Candies">Chocolates & Candies</option>
                      <option value="Fresh Vegetables">Fresh Vegetables</option>
                      <option value="Fresh Fruits">Fresh Fruits</option>
                      <option value="Premium Fruits">
                        Premium Fruits
                      </option>
                      <option value="Butter">
                        Butter
                      </option>
                      <option value="Ghee">Ghee</option>
                      <option value="Cakes & Muffins">Cakes & Muffins</option>
                      <option value="Tea">Tea</option>
                      <option value="Coffee">Coffee</option>
                      <option value="Fruit Juices">Fruit Juices</option>
                      <option value="Atta, Flours & Sooji">Atta, Flours & Sooji</option>
                      <option value="Edible Oils">Edible Oils</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Food Type</Td>
                  <Td>
                    <Select
                      variant="filled"
                      value={currentProduct.food_type}
                      
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          food_type: e.target.value,
                        })
                      }
                    >
                      <option value="veg">veg</option>
                      <option value="non-veg">non-veg</option>
                      
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Stock</Td>
                  <Td>
                    <Input
                      value={currentProduct.stock}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          stock: Number(e.target.value),
                        })
                      }
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Rating</Td>
                  <Td>
                    <Input
                      value={currentProduct.rating}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          rating: Number(e.target.value),
                        })
                      }
                    />
                  </Td>
                </Tr>
              </Tbody>
  
              <Tfoot>
                <Tr>
                  <Th>
                    <Button onClick={handleSubmit} colorScheme="blue">
                      Add Product
                    </Button>
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </>
      );
    }
  };
  
  export default AddTable;