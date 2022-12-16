import React from "react";
import Sidebar from "./Sidebar";
import { Flex,Grid,Box ,Text, Button,Link,Image} from "@chakra-ui/react";
import axios from "axios";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import {setItem} from '../utility/localStorage'
import "../index.css"
const Clothes = () => {
  const [data,setData]=useState([]);
  const [loading ,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleClick=(item)=>{
      setItem("singleproduct",item)
    navigate("/clothes/singleproduct")
 }
 useEffect(() => {
  setLoading(true)
    axios.get("https://next-backend-orpin.vercel.app/cloths").then((response) => {
     console.log("res",response.data)
     setData(response.data)
     setLoading(false)
    });
  }, []);

  
  {
    if(loading){
      return <Image marginLeft={635} src={"https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"} fontSize={27} style={{"marginTop":"200px"}}></Image>
    }else{
    
      return (
        <div style={{"marginTop":"100px"}}>
      
          <Flex>
          <Sidebar/>

         <Grid marginLeft={"240px"} paddingLeft={"15px"} width={"80%"} templateColumns='repeat(3, 1fr)' gap={6}>
         
           {data.map((el)=>{
             return <Box id='probox' key={el.id}>
              <Box textAlign={"left"}>
              <img id="hov" src={el.image1} alt="" />
              <Text fontSize={17} >{el.title}</Text>
              <Flex gap={2}>
                <img  width={17} src="https://img.shop.com/Image/resources/images/onecart-icon.svg" alt="" />
                <Text fontSize={13}>Sold by {el.soldby}</Text>
    
              </Flex>
              <p>{el.category}</p>
              <Text fontWeight={"bold"}>{el.price}</Text>
              <Text color={"teal"} fontSize={14}>Free shipping with $50.00 orders</Text>
    
              <Button backgroundColor={"blue.300"} onClick={()=>handleClick(el)} marginTop={"-65px"} borderRadius={25} width={85} marginLeft={"70%"}>View</Button>
    
           
              </Box>
              
            </Box>
          })}
      
        </Grid>
          </Flex>
          
    
         
        </div>
      );
    }
  }


 
};

export default Clothes;
