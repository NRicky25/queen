import { Center, Container, Heading, Box, VStack,Input,Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { Link as RouterLink } from 'react-router-dom';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name:"",
        price:"",
        image:""
    })

    const { createProduct } = useProductStore();
    
    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newProduct);
        console.log("Success:", success);
        console.log("message:", message);
        console.log(newProduct);
        setNewProduct({name: "", price:"", image:""});
    }

    // to use toast style
    // const handleAddProduct = async () => {
	// 	// const { success, message } = await createProduct(newProduct);
	// 	// if (!success) {
	// 	// 	toast({
	// 	// 		title: "Error",z
	// 	// 		description: message,
	// 	// 		status: "error",
	// 	// 		isClosable: true,
	// 	// 	});
	// 	// } else {
	// 	// 	toast({
	// 	// 		title: "Success",
	// 	// 		description: message,
	// 	// 		status: "success",
	// 	// 		isClosable: true,
	// 	// 	});
	// 	// }
	// 	// setNewProduct({ name: "", price: "", image: "" });
    //     console.log(newProduct);
	// };



    return (
        <Container maxW={"container.sm"}>
        <Heading 
            textAlign={"Center"}
            p={5}
            >Create Product
        </Heading>
        <Box>
            <VStack
                spacing={4}>
                <Input
                    placeholder='Product Name'
                    name='name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({
                        ...newProduct, name: e.target.value
                    })}
                />
                <Input
                        placeholder='Price'
                        name='price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                <Input
                        placeholder='Image URL'
                        name='image'
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                />
                <Button 
                    w='full'
                    onClick={handleAddProduct}
                    >
                        Create
                    </Button>
                    <Button as={RouterLink} to="/" w="full">
                    Cancel
                    </Button>   
            </VStack>      
        </Box>
        </Container>
  );
};

export default CreatePage;
