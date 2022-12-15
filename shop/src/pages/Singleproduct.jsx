import React from 'react'
import { useParams } from "react-router-dom";
 import { Flex,Box,Text } from '@chakra-ui/react';


const Singleproduct = () => {
    let data ={
        "id": 1,
        "image1": "https://img.shop.com/Image/290000/291600/291696/products/1940910013.jpg?plain&size=1500x1500",
        "image2": "https://img.shop.com/Image/290000/291600/291696/products/alt_853777891.jpg?plain&size=400x400",
        "image3": "https://img.shop.com/Image/290000/291600/291696/products/1940910013.jpg?plain&size=1500x1500",
        "image4": "https://img.shop.com/Image/290000/291600/291696/products/alt_853777891.jpg?plain&size=400x400",
        "title": "Cutter & Buck Epic Easy Care Nailshead Mens Big and Tall Long Sleeve Dress Shirt",
        "soldby": "Cutter & Buck",
        "price": "$75.00 - $90.00",
        "code": "MNK59Y",
        "category": "Mens"
      }
    
  return (
  <>
     <Flex gap={7}>
          <Box>
          <img  width={140}  src={data.image1} alt="" /><br />
          <img  width={140}  src={data.image2} alt="" /><br />
          <img  width={140}  src={data.image3} alt="" /><br />
          </Box>
        <img width={555} src={data.image4} alt="" />
        <Box textAlign={"left"}>
            <Text fontSize={14}>{data.soldby}</Text>
            <Text color={"teal"} fontSize={21}>{data.title}</Text>
            <Text fontSize={14}>Sold by {data.soldby}</Text>
            <Text cursor={"pointer"} marginTop={3} fontSize={12}>Write a review</Text>
            <Text marginTop={10} fontWeight={"bold"} fontSize={31} >{data.price}</Text>
        </Box>
     </Flex>
     </>
  )
}

export default Singleproduct