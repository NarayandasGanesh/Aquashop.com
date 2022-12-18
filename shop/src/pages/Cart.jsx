import React from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, Box, Button, Center, CloseButton, Flex, Heading, Image, Tag, TagLabel, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Get_Cart_item, REMOVE_Cart_item } from "../store/Cart/Cart.action";
import { DeleteIcon } from "@chakra-ui/icons";
 
function CartPage(){
   
   
    const [err,setErr]=useState("");
    const { id } = useParams();
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
      console.log(Cart)
      let totel=0
      Cart.forEach(el => {
        totel+=Number(el.price)
      });

      const handleDelete=(id)=>{
        dispatch(REMOVE_Cart_item(id))
      }

    return(
    <>
     
     <div>
      <h1>Cart</h1>
    </div>
       <Center><Heading mt={5}  marginTop={"150px"}>Cart</Heading></Center>
        <Box m="auto" mt={5} w="100%" h="550px">   
      {/* <Alert status='error'>
        {err?<AlertTitle>{err}</AlertTitle>:"Avoid Fake Payments!"}  
      </Alert> */}
<Center><Heading mt={2} mb={2} size="md" >Order Summary</Heading></Center>

<hr />


       {
       <Flex w={"100%"}>
      <Box>    
      {
        Cart.map((item)=>{
          return <Flex key={item.id} justifyContent="center" align={"center"} gap="10px">
            <Image w="50%" h="70%" src={item.image4} />
            <Heading size="md">{item.title}</Heading>
            <h3>{item.price}</h3>
            <button onClick={()=>{handleDelete(item.id)}}>
               <DeleteIcon   />
            </button>
           


          </Flex>
          
        })
      }</Box>
        <Image w="50%" h="70%" src={Cart.image4} />
       <Box mt={10}> 
       <Heading size="md">{Cart.title}</Heading>
          <Heading mt={5} size="lg">Total Amount:{totel}</Heading>
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
   </>
  )
}
export default CartPage;
