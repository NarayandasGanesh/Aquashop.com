import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Center, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
function PaymentPage(){
    const [input, setInput] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [opn,setOpn]=useState(false)
    const handleOpen=()=>{

setTimeout(()=>{
    setOpn(!opn)

},2000)}
const handleClose=()=>{
    setOpn(false);
    onClose();
}

    console.log(opn)
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === '';
    return (
    <div style={{marginTop:"150px"}}>
        <Center><Heading mt={3} mb={3} size="md">Payment Options</Heading></Center>
        <Tabs ml={10} align='center' variant='enclosed'>
  <TabList w="90%" border={"1px solid red"}>
    <Tab>
        <Image mr={3} w="20%" src="https://img1a.flixcart.com/linchpin-web/batman-returns/logos/upiLogo6.gif"></Image>
        UPI</Tab>
    <Tab>
    <Image mr={3} w="20%" src="https://img1a.flixcart.com/www/linchpin/batman-returns/logos/Payments%20Logo%20animation_1.gif"></Image>
      
        Wallets</Tab>
    <Tab>    
        <Image mr={3} w="10%" src="https://img.icons8.com/fluency/344/bank-card-back-side.png"></Image>
      Credit/Debit/ATM Card     
    </Tab>
    <Tab w="30%">
    <Image mr={3} w="20%" src="https://i.makeagif.com/media/10-07-2015/sjvv9-.gif"></Image>
    Cash On Delivery
    </Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <FormControl isRequired w="40%" isInvalid={isError}>
      <FormLabel>UPI ID</FormLabel>
      <Input
        type='text'
       
        onChange={handleInputChange}
        placeholder="Enter UPI ID"
        
      />
      {!isError ? (
        <FormHelperText>
         <Button w="100%" onClick={onOpen} colorScheme="orange">CONTINUE</Button>
         <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>OTP send on your number!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
      <>    <FormControl isRequired >
          <FormLabel>OTP</FormLabel>
      <Input
        type='text'
        placeholder="Enter OTP"
        /></FormControl>
      {
        opn&&<Alert
        mt={3}
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
         Payment Successful!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for Shopping with us!. Have a nice day!.
        </AlertDescription>
      </Alert>
      }
      
      
</>
          </ModalBody>

          <ModalFooter>
            <Link to="/">
          <Button colorScheme='blue' mr={3} >
              Go Back
            </Button>
            </Link>
            
            <Button bg="orange" color="white" onClick={handleOpen} variant='ghost'>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </FormHelperText>
      ) : (
        <FormErrorMessage> Input is Empty!</FormErrorMessage>
      )}
    </FormControl>
     
    </TabPanel>
    <TabPanel>
    <FormControl isRequired w="40%" isInvalid={isError}>
      <FormLabel>WALLETS NO</FormLabel>
      <Input
        type='text'
       
        onChange={handleInputChange}
        placeholder="Enter no"
        
      />
      {!isError ? (
        <FormHelperText>
         <Button w="100%" onClick={onOpen} colorScheme="orange">CONTINUE</Button>
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>OTP send on your number!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
      <>    <FormControl isRequired >
          <FormLabel>OTP</FormLabel>
      <Input
        type='text'
        placeholder="Enter OTP"
        /></FormControl>
      { 
        opn&&<Alert
        mt={3}
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
         Payment Successful!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for Shopping with us!. Have a nice day!.
        </AlertDescription>
      </Alert>
      }
      
      
</>
          </ModalBody>

         
        </ModalContent>
      </Modal>
        </FormHelperText>
      ) : (
        <FormErrorMessage> Input is Empty!</FormErrorMessage>
      )}
    </FormControl>
    
    </TabPanel>
    <TabPanel>
    <FormControl isRequired w="40%" isInvalid={isError}>
      <FormLabel>Card Number</FormLabel>
      <Input
        type='text'
       
        onChange={handleInputChange}
        placeholder="Enter card no"
        
      />
       <FormLabel>Valid till</FormLabel>
      <Input
     placeholder="Select Date and Time"
     size="md"
     type="datetime-local"
    />
      <FormLabel>CVV</FormLabel>
      <Input
     placeholder="CVV"
     size="md"
     type="number"
    />
      {!isError ? (
        <FormHelperText>
         <Button w="100%" onClick={onOpen} colorScheme="orange">CONTINUE</Button>
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>OTP send on your number!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
      <>    <FormControl isRequired >
          <FormLabel>OTP</FormLabel>
      <Input
        type='text'
        placeholder="Enter OTP"
        /></FormControl>
      {
        opn&&<Alert
        mt={3}
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
         Payment Successful!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for Shopping with us!. Have a nice day!.
        </AlertDescription>
      </Alert>
      }
      
      
</>
          </ModalBody>

          <ModalFooter>
            <Link to="/">
          <Button colorScheme='blue' mr={3} >
              Go Back
            </Button>
            </Link>
            
            <Button bg="orange" color="white" onClick={handleOpen} variant='ghost'>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </FormHelperText>
      ) : (
        <FormErrorMessage> Input is Empty!</FormErrorMessage>
      )}
    </FormControl>
    
    </TabPanel>
    <TabPanel>
    <FormControl isRequired w="40%" isInvalid={isError}>
      <FormLabel>Enter a unique id and share the unique id with the Delivery boy </FormLabel>
      <Input
        type='text'
       
        onChange={handleInputChange}
        placeholder="Enter ID"
        
      />
      {!isError ? (
        <FormHelperText>
         <Button w="100%" onClick={onOpen} colorScheme="orange">CONTINUE</Button>
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>OTP send on your number!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
      <>    <FormControl isRequired >
          <FormLabel>OTP</FormLabel>
      <Input
        type='text'
        placeholder="Enter OTP"
        /></FormControl>
      {
        opn&&<Alert
        mt={3}
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
         Payment Successful!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for Shopping with us!. Have a nice day!.
        </AlertDescription>
      </Alert>
      }
      
      
</>
          </ModalBody>

          <ModalFooter>
            <Link to="/">
          <Button colorScheme='blue' mr={3} >
              Go Back
            </Button>
            </Link>
            {/* <Link to="/"> */}
            <Button bg="orange" color="white" onClick={handleOpen} variant='ghost'>Confirm</Button>
            {/* </Link> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
        </FormHelperText>
      ) : (
        <FormErrorMessage> Input is Empty!</FormErrorMessage>
      )}
    </FormControl>
    
    </TabPanel>
  </TabPanels>
</Tabs>
</div>

    )
}

export default PaymentPage;