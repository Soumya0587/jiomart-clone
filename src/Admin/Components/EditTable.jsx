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
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate, useParams } from "react-router-dom";
  import { getProducts, updateProduct } from "../../Redux/AdminReducer/AdminActions";
  
  const EditTable = () => {
    const { id } = useParams();
    const allProducts = useSelector((store) => store.AdminReducer.products);
    const { isLoading } = useSelector((store) => store.AdminReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const [currentProduct, setCurrentProduct] = useState({
      brand: "",
      product_name: "",
      retail_price: 0,
      discounted_price: 0,
      stock: 0,
    });
  
    const handleSubmit = () => {
      dispatch(updateProduct(id, currentProduct)).then((res) => {
        toast({
          title: "Product Updated",
          description: "The product is updated successfully",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
  
        dispatch(getProducts());
        navigate("/admin/products");
      });
    };
  
    useEffect(() => {
      if (allProducts.length === 0) dispatch(getProducts());
  
      if (id) {
        const product = allProducts.find((el) => el._id === id);
        product && setCurrentProduct(product);
      }
    }, [allProducts.length, dispatch, id, allProducts]);
  
    if (isLoading) {
      return <CircularProgress isIndeterminate color="green.300" />;
    } else {
      return (
        <>
          <TableContainer mt={"-10"}>
            <Table variant="simple" colorScheme="teal">
              <TableCaption>
                Please verify all details before saving changes
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
                  <Td>MRP</Td>
                  <Td>
                    <Input
                      value={currentProduct.retail_price}
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          retail_price: e.target.value,
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
                          discounted_price: e.target.value,
                        })
                      }
                    />
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
                          stock: e.target.value,
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
                      Save Changes
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
  
  export default EditTable;
  