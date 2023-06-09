import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import EditTable from "../Components/EditTable";

const EditProduct = () => {
  return (
    <>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Edit Details</Heading>
        </CardHeader>
        <CardBody>
            <EditTable/>
        </CardBody>
      </Card>
    </>
  );
};

export default EditProduct;