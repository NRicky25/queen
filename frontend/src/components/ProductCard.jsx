import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Box,
  ButtonGroup,
  IconButton,
  Input,
  HStack,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { useProductStore } from "../store/product";
import { useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("gray.600", "gray.100");
  const bg = useColorModeValue("white", "gray.500");
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      console.log("Product deleted successfully");
    } else {
      console.error("Failed to delete product:", message);
    }
    onDeleteClose();
  };
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onClose();
  };


  return (
    <Box>
      <Card bg={bg} overflow='hidden'
        >
        <CardBody
        >
          <Image
            src={product.image}
            alt={product.name}
            borderRadius="lg"
            h={48}
            w="full"
            objectFit="cover"
            transition='all 0.3s'
			      _hover={{ transform: "scale(1.05)", shadow: "xl" }}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>
            <Text color={textColor}>${product.price}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <HStack spacing={2}>
            <IconButton
              icon={<EditIcon />}
              onClick={onOpen}
              colorScheme="blue"
            />
            <IconButton
              icon={<DeleteIcon />}
              onClick={onDeleteOpen}
              colorScheme="red"
            />
              <DeleteConfirmationDialog       
              isOpen={isDeleteOpen}
              onClose={onDeleteClose}
              handleDelete={() => handleDeleteProduct(product._id)}
            />
          </HStack>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
