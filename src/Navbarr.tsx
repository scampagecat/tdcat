import {
    Box,
    HStack,
    Image,
    Flex,
    Link,
  } from "@chakra-ui/react";
  import { FiMenu } from "react-icons/fi";
  
  function Navbarr() {
  
    return (
      <Box
        minW="100%"
        fontSize="lg"
        display={{ base: "flex", md: "flex" }}
        fontWeight="semibold"
        bgColor="white"
      >
        <Flex
          h="100%"
          p={3}
          mx={{ base: 0, md: 0, lg: 40 }}
          w="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex w="100%">
            <Link href="/">
              <HStack>
                <FiMenu color={'#54bc4c'} />
                <Image w={100}  src="../images/tdd.png" alt="logo" />
                
              </HStack>
            </Link>
          </Flex>
  
   
        </Flex>
      </Box>
    );
  }
  
  export default Navbarr;
  