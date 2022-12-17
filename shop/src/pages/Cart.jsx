import React from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, Box, Button, Center, CloseButton, Flex, Heading, Image, Tag, TagLabel, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const GetClothesById=(id)=>{
    return axios(`https://next-backend-orpin.vercel.app/cloths/${id}`);

}
const MakeupProduct=(id)=>{
  return axios(`https://next-backend-orpin.vercel.app/cloths/${id}`)
  }
function CartPage(){
    const [mdata,setMdata]=useState([]);
    const [makeup,setMakeup]=useState("");
    const [err,setErr]=useState("");
    const { id } = useParams();
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: false });
    useEffect(() => {
        
        GetClothesById(id).then(res=>{
           setMdata(res.data)
            console.log("ganesh",res.data)
      
        }).catch(err=>{
            console.log("virat",err.message);
            setErr(err.message)

        })
         
      }, [id]);

      useEffect(() => {
        
        MakeupProduct(id).then(res=>{
           setMakeup(res.data)
            console.log("ss",res.data)
      
        }).catch(err=>{
            console.log(err)
            setErr(err.message)
        })
         
      }, [id]);
      let price=mdata.price;
      const { userData } = useSelector((store) => store.auth);
      const navigateTo = useNavigate();
      useEffect(() => {
        console.log("userdata", userData);
        if (!userData || JSON.stringify(userData) === "{}") {
          alert("please login");
          navigateTo("/signin");
          return;
        }
      }, [userData]);
    return(
    <>
     <div>
      <h1>Cart</h1>
    </div>
       <Center><Heading mt={5}  marginTop={"150px"}>Cart</Heading></Center>
        <Box m="auto" mt={5} w="50%" h="550px">   
      {/* <Alert status='error'>
        {err?<AlertTitle>{err}</AlertTitle>:"Avoid Fake Payments!"}  
      </Alert> */}
<Center><Heading mt={2} mb={2} size="md" >Order Summary</Heading></Center>
<hr />

       {
        makeup===""? <Flex>

        <Image w="50%" h="70%" src={mdata.main_image} />
       <Box mt={10}> 
       <Heading size="md">{mdata.title}</Heading>
          <Heading mt={5} size="lg">Total Amount:{price}</Heading>
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
         

        </Flex> : 
<Flex>

<Image w="50%" mr={5} h="70%" src={makeup.image_link} />
</Flex> 
    }

    </Box>
   </>
  )
}
export default CartPage;
