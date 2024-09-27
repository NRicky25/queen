import React from "react";
import {
  Container,
  Divider,
  Box,
  AbsoluteCenter,
  Button,
  Text,
  Flex,
  useColorMode,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import CustomDrawer from "./CustomDrawer";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Container maxW={"1440px"} px={4}>
      <Flex
        h={16}
        alignItems={"Center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          bgGradient="linear(to-r, red.500, blue.500)"
          bgClip={"text"}
        >
          <Link to={"/"}>♔ Queen</Link>
        </Text>
        {/* <Box >Menu {<HamburgerIcon />}</Box> */}
        <HStack>
          <Link to={"/create"}>
            <Button>+</Button>
          </Link>
          <Button onClick={toggleColorMode}>
          {colorMode  === "light" ? <IoMoon/> : <LuSun size="20"/>
                }
          </Button>
          <Button ref={btnRef} onClick={onOpen}>
            {<HamburgerIcon />}
          </Button>
        </HStack>
      </Flex>
      {/* <Box my={4}>
        <Divider orientation={{ base: 'vertical', md: 'horizontal' }} />
      </Box> */}
      <CustomDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Container>
  );
};

export default Navbar;
