import { Box, Text, Image, Heading, Center, Button, Checkbox, VStack, Flex, Link } from '@chakra-ui/react'

function Secure() {
  return (
    <Box>
      <Box fontFamily={'Poppins'} minH="72.3vh">
      

        <Box>
        <Center>
            <Image mt={10} w={320} src={'./images/td1.png'} />
            
            </Center>
            <Box>
          <Heading px={4} fontFamily={'Poppins'} textAlign="center" pt={7} fontWeight="semibold" as="h2" fontSize="26" color="blackAlpha.800">
            Alert
          </Heading>
        </Box>
            <Text textAlign={'center'} fontWeight={'normal'} mt={4} p={4} fontSize="15px" color="blackAlpha.800">
                          We notice there have been recent updates to your alerts. Please select how you would like TD Bank to contact you.
                        </Text>
                        <VStack>
                            <Flex>
                            <Checkbox  pr={2} /> <Text>Text</Text>
                            </Flex>
                            <Flex>
                            <Checkbox pr={2} /> <Text>Call</Text>
                            </Flex>
                            <Flex>
                            <Checkbox pr={2} /> <Text>E-mail</Text>
                            </Flex>
                            <Flex>
                            <Checkbox pr={2} /> <Text>TD Bank App</Text>
                            </Flex>
                        </VStack>
        </Box>


       
    
          
          <Box p={4}>
            <Link href="/login">
          <Button mt={5} h={12} _hover={{ bg: '#47A040', color: 'whitesmoke' }} bgColor="#47A040"  color="whitesmoke" borderRadius={0} w="100%">
            Continue
          </Button>
          </Link>
          
          </Box>

          
        </Box>
      </Box>
   
  )
}

export default Secure;
