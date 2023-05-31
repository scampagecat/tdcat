import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box>
            <Center>
            <Divider orientation={'horizontal'} mx={4} borderColor={'#47A040'}  />
            </Center>
            <Flex  color={'blackAlpha.800'} textAlign={'center'} fontFamily={'Poppins'} bgColor="whitesmoke"  p={'16px'} display={'block'}>
                <Text >Privacy</Text>
                <Text >Online Advertising</Text>
                <Text >Terms of Use</Text>
                <Text >Securtiy</Text>
                <Text >About US</Text>
                <Text >Careers</Text>
                <Text >Site Map</Text>
                <Text fontSize={'small'} pt={5}>
                    © 2023 TD Bank, N.A. All Rights Reserved.
                </Text>
                
            </Flex>
        </Box>

    )
}

export default Footer;