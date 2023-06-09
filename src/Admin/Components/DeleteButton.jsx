import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    useToast,
    CircularProgress,
  } from "@chakra-ui/react";
  import { DeleteIcon } from "@chakra-ui/icons";
  import { useDispatch, useSelector } from "react-redux";
  import { deleteProduct, getProducts } from "../../Redux/AdminReducer/AdminActions";
  
  function DeleteButton(id) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const toast = useToast();
    const { isLoading } = useSelector((store) => store.AdminReducer);
  
    const handleDelete = () => {
      const prod_id = id.id;
      console.log(prod_id);
      onClose();
  
      dispatch(deleteProduct(prod_id)).then((res) => {
        console.log("deleted");
        toast({
          title: "Product Deleted",
          description: "The product is deleted successfully",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
  
        dispatch(getProducts());
      });
    };
  
    if (isLoading) {
      return <CircularProgress isIndeterminate color="green.300" />;
    } else {
      return (
        <>
          <Button onClick={onOpen}>{<DeleteIcon />}</Button>
  
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{<DeleteIcon />}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  This product will be deleted. Do you want to continue?
                </Text>
              </ModalBody>
  
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={handleDelete}>
                  Delete
                </Button>
                <Button variant="ghost">Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    }
  }
  
  export default DeleteButton;
  