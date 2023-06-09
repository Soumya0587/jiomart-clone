import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Button,
    Progress,
  } from "@chakra-ui/react";
  
  import { EditIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getProducts } from "../../Redux/AdminReducer/AdminActions";
  import { useNavigate } from "react-router-dom";
  import DeleteButton from "../Components/DeleteButton";
  import CategoryMenu from "../Components/CategoryMenu";
  
  const Inventory = () => {
    const { products, isLoading } = useSelector((store) => store.AdminReducer);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const PaginateFor = () => {
      setPage((prev) => prev + 1);
      console.log(page);
      dispatch(getProducts(page));
    };
    const PaginateBack = () => {
      if (page <= 1) {
        setPage(1);
      } else {
        setPage((prev) => prev - 1);
      }
      console.log(page);
      dispatch(getProducts(page));
    };
  
    useEffect(() => {
      if (products.length === 0) dispatch(getProducts());
      // console.log(isLoading);
    }, [dispatch, products, isLoading,page]);
  
    if (isLoading === true) {
      return <Progress size="xs" isIndeterminate />;
    } else {
      return (
        <Flex p="2" w={{ base: "100%" }} justifyContent={"center"} mt={"150px"}>
          <TableContainer w={"100%"} p="2">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th textAlign={"center"}>Brand</Th>
                  <Th textAlign={"center"}>Product Name</Th>
                  <Th textAlign={"center"}>PID</Th>
                  <Th isNumeric textAlign={"center"}>
                    MRP
                  </Th>
                  <Th textAlign={"center"}>Price</Th>
                  
                  <Th>
                    <CategoryMenu />
                  </Th>
  
                  {/* <Th>Stock</Th> */}
                  <Th>
                    <Flex gap="2">
                      <Button
                        isDisabled={page === 1}
                        onClick={() => PaginateBack()}
                      >
                        <ArrowBackIcon />
                      </Button>
                      <Button isDisabled={page >= 3} onClick={() => PaginateFor()}>
                        {page}
                        <ArrowForwardIcon color={"teal"} />
                      </Button>
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {products?.length &&
                  products.map((el) => {
                    return (
                      <Tr key={el._id}>
                        <Td textAlign={"center"}>{el.brand}</Td>
                        <Td textAlign={"left"}>{el.product_name}</Td>
                        <Td textAlign={"center"}>{el._id}</Td>
                        <Td textAlign={"center"}>{el.retail_price}</Td>
                        <Td textAlign={"center"}>{el.discounted_price}</Td>
                        <Td textAlign={"center"}>
                          {el.category}
                        </Td>
                        {/* <Td>{el.stock}</Td> */}
                        <Td>
                          <Flex gap="2">
                            <Button onClick={() => navigate(`/admin/edit/${el._id}`)}>
                              {<EditIcon />}
                            </Button>
  
                            <DeleteButton id={el._id} />
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      );
    }
  };
  
  export default Inventory;
  
