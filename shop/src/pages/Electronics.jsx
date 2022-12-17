import React from "react";
import Sidebar from "./Sidebar";
import { Flex,Grid,Box ,Text, Button,Link,Image} from "@chakra-ui/react";
import axios from "axios";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import {setItem} from '../utility/localStorage'
import "../index.css"
import { useDispatch, useSelector } from "react-redux";
import { Get_Electronics_item } from "../store/Electronics/Electronics.action";
const Electronics = () => {
const[filter,setFilter]=useState("Mens")
  const [loading ,setLoading]=useState(false);
  const [order,setOrder]=useState("")
  const navigate=useNavigate();

  const handleClick=(item)=>{
      setItem("singleproduct",item)
      navigate("/electronics/singleproduct")
    }
  

    const {isLoading,Electronics}=useSelector((store)=>store.ElectronicsManger)
  const dispatch=useDispatch()
  useEffect(()=>{
  
    dispatch(Get_Electronics_item())
   },[Electronics]) 

   let  data=Electronics.filter((item)=>item.category===filter)

   useEffect(()=>{
    data=Electronics.filter((item)=>item.category===filter)
   },[filter])

   useEffect(()=>{
    console.log(order,"1")
    if(order=="high"){
     console.log(order,"2")
      data=data.sort((a,b)=>a.price-b.price )
    }
    if(order=="low"){
      console.log(order,"3")
      data=data.sort((a,b)=>b.price-a.price )
    }

    
   },[order])

   
  
  {
    if(loading){
      return <Image marginLeft={635} src={"https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"} fontSize={27} style={{"marginTop":"200px"}}></Image>
    }else{
    
      return (
        <div style={{"marginTop":"100px"}}>
      
          <Flex>
          {/* <Sidebar setFilter={setFilter}/> */}
          <Box id='maindiv' border={"1px solid"} width={"20%"}>
  <Text marginTop={2} color={"teal"} id="Electronicse" fontSize={35} fontWeight={"bold"}>Electronics</Text>
  <Box marginLeft={"40px"}   textAlign={"left"} marginTop={"15px"}>
{/* <Flex alignItems={"center"} gap={"15px"}> 
  <Image marginTop={"8px"} borderRadius={"50%"} height={"25px"} width={"25px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXelByMSTcBlhsGChcrAWlXVXNXxI53LxzirHbHwGJQ&s'></Image>
  <Text className='menu' onClick={()=>setFilter("Mens")}  fontWeight={"bold"}>Mens</Text>
  </Flex> */}

  {/* <Flex alignItems={"center"} gap={"15px"}> 
  <Image marginTop={"8px"} borderRadius={"50%"} height={"25px"} width={"25px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZH_L731sgBrBunH8f5lp6pLAhvehf2DuZJGjFeI&s'></Image>
  <Text className='menu'  onClick={()=>setFilter("Womens")}   fontWeight={"bold"}>Womes</Text></Flex> */}
   
    
  {/* <Flex alignItems={"center"} gap={"15px"}> 
  <Image marginTop={"8px"} borderRadius={"50%"} height={"25px"} width={"25px"} src='https://img.icons8.com/color/2x/children.png'></Image>
  <Text className='menu'  onClick={()=>setFilter("KIDS")}   fontWeight={"bold"}>Kids</Text></Flex> */}


  </Box>

  <Box id="filter">
  <select name="" id="" onChange={(e)=>setOrder(e.target.value)}>
     <option value="reset">Filter by Price</option>
      <option value="high">Low to high </option>
      <option value="low">High to low</option>
     </select>
  </Box>
 
 <Box id="add" marginLeft={"0px"} textAlign={"left"} marginTop={"50px"}>
  <img src="https://img.shop.com/Image/topbrands/nmlogos_76181.gif" alt="" />
  <Text> Up to 6.00% Cashback <br/>
Store conditions </Text>
<Button>partner Site 🤝</Button>
 </Box>

 <Box id="add" marginLeft={"0px"} textAlign={"left"} marginTop={"20px"}>
  <img src="https://img.shop.com/Image/topbrands/nmlogos_98199.gif" alt="" />
  <Text> Up to 6.00% Cashback <br/>
Store conditions </Text>
<Button>partner Site 🤝</Button>
 </Box>
  </Box>

     



         <Grid mt={"30px"} marginLeft={"240px"} paddingLeft={"15px"} width={"80%"} templateColumns='repeat(3, 1fr)' gap={6}>
         
           {Electronics.map((el)=>{
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

export default Electronics;
