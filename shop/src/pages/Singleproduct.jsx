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
          <img onClick={()=>setImg(data.image1)}  width={140}  src={data.image1} alt="" /><br />
          <img onClick={()=>setImg(data.image2)}  width={140}  src={data.image2} alt="" /><br />
          <img  onClick={()=>setImg(data.image3)} width={140}  src={data.image3} alt="" /><br />
          </Box>
        <Image  width={655} src={curimg} alt=""
        fit={'cover'}
        align={'center'}
       
        h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
        <Box textAlign={"left"}>
            <Text fontSize={24}>{data.soldby}</Text>
            <Text  color={"teal"} fontSize={32}
            >{data.title}</Text>
            <Text fontSize={14}>Sold by {data.soldby}</Text>
            <Text cursor={"pointer"} marginTop={3} fontSize={12}>Write a review</Text>
            <Text marginTop={10} fontWeight={"bold"} fontSize={31} >{data.price}</Text>
              <Box id="select" marginTop={5}><select >
              <option value="reset">Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select><br/></Box>
           
            <Button backgroundColor={"pink.400"} width={"190px"} marginRight={1} marginTop={14}>Add to cart</Button>
        </Box>
     </Flex>
     </SimpleGrid>
  )
}

export default Singleproduct