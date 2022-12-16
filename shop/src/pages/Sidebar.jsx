import React from 'react'
import { Flex,Grid,Box ,Text, Button,Link,Image, Heading} from "@chakra-ui/react";
import "../index.css";

const Sidebar = (setFilter) => {
  return (
    <>
 <Box id='maindiv' border={"1px solid"} width={"20%"}>
  <Text marginTop={2} color={"teal"} id="clothe" fontSize={35} fontWeight={"bold"}>CLOTHES</Text>
  <Box marginLeft={"40px"}   textAlign={"left"} marginTop={"15px"}>
<Flex alignItems={"center"} gap={"15px"}> 
  <Image marginTop={"8px"} borderRadius={"50%"} height={"25px"} width={"25px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXelByMSTcBlhsGChcrAWlXVXNXxI53LxzirHbHwGJQ&s'></Image>
  <Text className='menu' onClick={()=>setFilter("Mens")}  fontWeight={"bold"}>Mens</Text></Flex>

  <Flex alignItems={"center"} gap={"15px"}> 
  <Image marginTop={"8px"} borderRadius={"50%"} height={"25px"} width={"25px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZH_L731sgBrBunH8f5lp6pLAhvehf2DuZJGjFeI&s'></Image>
  <Text className='menu'  onClick={()=>setFilter("womens")}   fontWeight={"bold"}>Womes</Text></Flex>
   
    
  <Flex alignItems={"center"} gap={"15px"}> 
  <Image marginTop={"8px"} borderRadius={"50%"} height={"25px"} width={"25px"} src='https://img.icons8.com/color/2x/children.png'></Image>
  <Text className='menu'  onClick={()=>setFilter("KIDS")}   fontWeight={"bold"}>Kids</Text></Flex>


  </Box>

  <Box id="filter">
  <select name="" id="">
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


  </>
  )
}

export default Sidebar