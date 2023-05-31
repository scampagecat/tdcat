import { Box, Text, Image, Heading, Link, Center, Button } from '@chakra-ui/react'

function Success() {
  return (
    <Box>
      <Box fontFamily={'Poppins'} minH="72.3vh">
      

       

        <Box >
            <Center>
            <Image mt={10} w={320} src={'./images/tikk.png'} />
            </Center>
            <Box>
                <Center>
          <Heading px={4} pt={7} fontWeight="semibold" as="h2" fontSize="26" color="blackAlpha.800">
            Success
          </Heading>
          </Center>
        </Box>
            <Text textAlign={'center'}  fontWeight={'normal'} mt={4} p={4} fontSize="15px" color="blackAlpha.800">
                          No further action is required. A representative will contact you within 24 to 72 hours.
                        </Text>
                        
        </Box>


       
    
          
          <Box p={4}>
         <Link href='https://www.td.com/us/en/personal-banking/contact-us'>
          <Button _hover={{ bg: '#526f30', color: 'whitesmoke', borderRadius: 2 }} mt={2} h={12}  bgColor="#47A040" color="whitesmoke" borderRadius={2} w="100%">
            Continue
          </Button>
          </Link>
          </Box>

          
        </Box>
      </Box>
   
  )
}

export default Success;
