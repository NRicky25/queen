import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    Avatar,
    HStack,
    Divider,
    useColorModeValue,
    Text,
    VStack
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom";

const CustomDrawer = ({ isOpen, onClose, btnRef }) => {
    const dcolor = useColorModeValue("gray.700", "white.200");


    return (
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <HStack spacing={4}>
                    <Avatar
                    size='sm'
                    name={""}
                    src=''
                    spacing={2}
                  />
                  <p>Hello, Sign in</p>
                </HStack>
              </DrawerHeader>
              <DrawerBody>
                <VStack spacing={3} align="flex-start">
                  <Text as='b' fontSize={22}>Trending</Text>
                  <p>Best Seller</p>
                  <p>New Release</p>
                  <p>Movers & Shaker</p>
                </VStack>     
                <Divider my={4} borderColor={dcolor} />
                <VStack spacing={3} align="flex-start">
                  <Text as='b' fontSize={22}>Digital content & devices</Text>
                  <p>Echo</p>
                  <p>TV</p>
                  <p>Muisc</p>
                  <p>Video</p>
                </VStack>     
              </DrawerBody>
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomDrawer;