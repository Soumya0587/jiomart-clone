
import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import AddTable from "../Components/AddTable";

const AddProducts = () => {
  return (
    <>
      <Card align="center" bg="transparent" mt={"150px"}>
        <CardHeader>
          <Heading size="md"> Add Details</Heading>
        </CardHeader>
        <CardBody>
          <AddTable />
        </CardBody>
      </Card>
    </>
  );
};

export default AddProducts;
