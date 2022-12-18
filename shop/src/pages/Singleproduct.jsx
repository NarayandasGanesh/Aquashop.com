import React from 'react'
import { useParams } from "react-router-dom";
// import { Flex,Box,Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getItem } from '../utility/localStorage';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
 
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import "../index.css";

const Singleproduct = () => {
   const [data,setData]=useState({})
  const [curimg , setImg]=useState(data.image4)

            console.log(data.image4)
   useEffect(()=>{
    setData(getItem("singleproduct"))
   },[])
   console.log(data)
   
   useEffect(()=>{
     setImg(data.image4)
   },[data])

  return (
  <SimpleGrid 
  as={Box}
  textAlign={'center'}
  spacing={{ base: 8, md: 14 }}
  py={{ base: 20, md: 36 }}>
  

    
     <Flex gap={7}
    
     >
          <Box>
          <img onClick={()=>setImg(data.image1)}  width={"370px"}  src={data.image1} alt="" /><br />
          <img onClick={()=>setImg(data.image2)}  width={140}  src={data.image2} alt="" /><br />
          <img  onClick={()=>setImg(data.image3)} width={140}  src={data.image3} alt="" /><br />
          </Box>
          <Box marginLeft={"70px"} >
          <Image  width={755} src={curimg} alt=""
        fit={'cover'}
        align={'center'}
       
        h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
          </Box>
      
        <Box marginLeft={"40px"} width={"100%"} marginTop={-8} textAlign={"left"}>
            <Text fontSize={20}>{data.soldby}</Text>
            <Text  color={"teal"} fontSize={27}
            >{data.title}</Text>
            <Text fontSize={14}>Sold by {data.soldby}</Text>
            <Text cursor={"pointer"} marginTop={3} fontSize={12}>Write a review</Text>
            <Flex textAlign={"center"} width={"auto"} backgroundColor={"gray.100"} marginTop={3}>
              <Box  marginLeft={35} padding="1px, 1px,1px,1px">
              <img width={210} src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg" alt="" />
              </Box>
            
              <Text marginTop={1} marginLeft={"20px"} fontSize={21}>Now accepting Crypto at Checkout!</Text>
            </Flex>
            <Text marginTop={5} fontWeight={"bold"} fontSize={31} >${data.price}</Text>
              <Flex id="select" marginTop={5}>
            
            <Button height={50} backgroundColor={"blue.300"} width={"340px"}  marginLeft={18} marginTop={3}>Add to cart</Button>
            </Flex>
            <Text  color={"teal"} fontSize={19} marginTop={10}>Style and color that stand the test of time. Our top-selling polo is now available with long-sleeves.  The Long Sleeve Spin Lady Pique Polo is made with spin dye technology for long lasting color that never fade. The eco-friendly production process...</Text>
          
          <Flex textAlign={"center"}>
          <Button height={"auto"} width={50} marginTop={2} backgroundColor={"blue.300"}>like 👍</Button>
          <Text marginLeft={7} marginTop={2} ><a href='#'>Sign Up</a> to see your friends like.</Text>
          </Flex>
            
        </Box>
     </Flex>
     </SimpleGrid>
  )
}

export default Singleproduct