import React, { useEffect } from 'react' 
import { Link } from 'react-router-dom'
import {Container, Box, SimpleGrid,Text,VStack,HStack} from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'
import { useProductStore } from '../store/product'

const HomePage = () => {
    const {fetchProducts, products} = useProductStore();
    useEffect(()=>{
        fetchProducts();
    },[fetchProducts]);
    console.log(products)

  return (
    <Container maxW='container.xl' py={12}>
        <VStack spacing={8}>
        <Text 
        textAlign={'center'}
        fontSize='4xl'
        bgGradient="linear(to-r, red.600, blue.500)"
        bgClip={"text"}
        >
            Current Prodcut
        </Text>
        <SimpleGrid
         columns={{
                base: 1,
                md: 2,
                lg: 3,
            }}
            spacing={10}
            w={"full"}
        >
            {products.map((product) => (
                <ProductCard key={product._id} product={product}/>
            ))}
        </SimpleGrid>

        {products.length === 0 && (
            <HStack>
               <Text fontSize={20}>No product found !!!</Text> 
               <Link to={"/create"}>
                <Text color={"green"} fontSize={20}>
                    Create a product
                </Text>
                </Link>
            </HStack>          
        )}
     </VStack>
    </Container>
  );
};

export default HomePage