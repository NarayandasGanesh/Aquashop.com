import React from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, Box, Button, Center, CloseButton, Flex, Heading, Image, Tag, TagLabel, Text, useDisclosure, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Get_Cart_item, REMOVE_Cart_item } from "../store/Cart/Cart.action";
import { DeleteIcon ,Icon} from "@chakra-ui/icons";
import { AiFillStar } from 'react-icons/ai'


 
function CartPage(){

   

    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: false });
   
        
       
      
      const { userData } = useSelector((store) => store.auth);
      const {Cart } = useSelector((store) => store.CartManger)
      const navigateTo = useNavigate();
      const dispatch=useDispatch()

      useEffect(() => {
        console.log("userdata", userData);
        if (!userData || JSON.stringify(userData) === "{}") {
          alert("please login");
          navigateTo("/signin");
          return;
        }
      }, [userData]);

      useEffect(()=>{
    
     dispatch(Get_Cart_item())
      },[Cart])
      // console.log(Cart)
      let totel=0
      Cart.forEach(el => {
        totel+=Number(el.price)
      });

      const handleDelete=(id)=>{
        dispatch(REMOVE_Cart_item(id))
      }

    return(
    <div style={{minHeight:"1000px"}}>
     
     <div>
      <h1>Cart</h1>
    </div>
       <Center><Heading mt={5}  marginTop={"150px"}>Cart</Heading></Center>
        <Box m="auto" mt={5} w="100%"  >   
      {/* <Alert status='error'>
        {err?<AlertTitle>{err}</AlertTitle>:"Avoid Fake Payments!"}  
      </Alert> */}
<Center><Heading mt={2} mb={2} size="md" >Order Summary</Heading></Center>

<hr />


       {
       <Flex w={"100%"}>
      <Box gap="10px" >    
      {
        Cart.map((item)=>{
          return <Flex key={item.id} justifyContent="center" align={"center"}
          borderWidth='1px' borderRadius='lg'  mt={"20px"}
          >
            <Image w="50%"  src={item.image4} />
            <VStack>
           <Heading size="md">{item.title}</Heading>
            <Text fontWeight="500"> Price: ${item.price }</Text>
            <Box mb="15px">
                  {Array(5)
                    .fill("")
                    .map((_, i) => {
                      let rating = Math.ceil(Math.random() * 3);

                      return <Icon
                        as={AiFillStar}
                        key={i}
                        color={i <= 2 ? "gold" : "gray.300"}
                      />
                    })}
                </Box>
            
            <button onClick={()=>{handleDelete(item.id)}}>
               <DeleteIcon width="40px"  height="40px" />
            </button>
            </VStack>
            
        

           


          </Flex>
          
        })
      }</Box>
        <Image w="50%" h="70%" src={Cart.image4} />
       <Box  mt={10}> 
       <Heading size="md">{Cart.title}</Heading>
          <Heading mt={5} size="lg">Total Amount:${totel}</Heading>
          {
            isVisible ? (
              <Alert mt={3} status='success'>
                <AlertIcon />
                <Box>
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Congrats! coupan Applied!
                    Your Applicable for free Home Delivary
                  </AlertDescription>
                </Box>
                <CloseButton
                  alignSelf='flex-start'
                  position='relative'
                  right={-1}
                  top={-1}
                  onClick={onClose}
                />
              </Alert>
            ) : (
              <Button borderRadius={2} mt={5} w="80%" bg="blue" color="white" onClick={onOpen} leftIcon={<Avatar size='sm' src="https://img.icons8.com/external-those-icons-flat-those-icons/344/external-Flash-weather-those-icons-flat-those-icons.png" />}> Click and Get Free Delivery! </Button>
            )
          }




         
          <Link  to={`/address`}>
          <Button w="50%" mt={10} colorScheme='pink' variant='solid'>
          Buy Now!
        </Button>
        </Link>

        <Link  to={`/`}>
          <Button ml={1} w="50%" mt={10} colorScheme='green' variant='solid'>
          Go Back!
        </Button>
        </Link>
          
          </Box>
         

        </Flex> 
 
    }

    </Box>
   </div>
  )
}
export default CartPage;
