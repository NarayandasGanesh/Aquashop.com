import React from "react";
import SimpleSidebar from "./Sidebar";
import { Flex,Grid,Box ,Text, Button,Link} from "@chakra-ui/react";
import axios from "axios";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import {setItem} from '../utility/localStorage'
const Clothes = () => {
  const [data,setData]=useState([]);
  const navigate=useNavigate();

  const handleClick=(item)=>{
      setItem("singleproduct",item)
    navigate("/clothes/singleproduct")
 }
 useEffect(() => {
    axios.get("https://next-backend-orpin.vercel.app/cloths").then((response) => {
     console.log("res",response.data)
     setData(response.data)
    });
  }, []);

  return (
    <div>
      <h1>Clothes</h1>
      <Flex>
      <SimpleSidebar/>
     <Grid templateColumns='repeat(3, 1fr)' gap={6}>
     
       {data.map((el)=>{
         return <Box  key={el.id}>
          <Box textAlign={"left"}>
          <img src={el.image1} alt="" />
          <Text fontSize={17} >{el.title}</Text>
          <Flex gap={2}>
            <img  width={17} src="https://img.shop.com/Image/resources/images/onecart-icon.svg" alt="" />
            <Text fontSize={13}>Sold by {el.soldby}</Text>

          </Flex>
          <p>{el.category}</p>
          <Text fontWeight={"bold"}>{el.price}</Text>
          <Text color={"teal"} fontSize={14}>Free shipping with $50.00 orders</Text>

          <Button backgroundColor={"blue.300"} onClick={()=>handleClick(el)} borderRadius={25} width={85}>View</Button>

       
          </Box>
          
        </Box>
      })}
  
    </Grid>
      </Flex>
      

     
    </div>
  );
};

export default Clothes;
