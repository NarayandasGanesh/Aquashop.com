import React from "react";
import Sidebar from "./Sidebar";
import { Flex, Grid, Box, Text, Button, Icon, Link, Image } from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai'

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setItem } from '../utility/localStorage'
import "../index.css"
import { useDispatch, useSelector } from "react-redux";
import { Get_Electronics_item, sortMyElectronics } from "../store/Electronics/Electronics.action";
import Loading from "./Loading";

// import Loading from "./Loading";
const Electronics = () => {

  const [reset,setReset ]=useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate();

  // const [data,setData] = useState([])

  const Electronics = useSelector((state) => state.ElectronicsManger.Electronics);
  const handleClick = (item) => {
    setItem("singleproduct", item)
    navigate("/electronics/singleproduct")
  }
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value)
    if(value=="reset"){

      setReset((previous)=>!previous)
      return 
    }
    dispatch(sortMyElectronics(value))

  }

  useEffect(() => {

    dispatch(Get_Electronics_item())
  }, [reset])

  if (Electronics.length === 0) return <Loading />
  
  return (
    <div style={{ "marginTop": "120px" }}>

      <Flex>
      
        <Box id='maindiv' border={"1px solid"} width={"20%"}>
          <Text marginTop={2} color={"teal"} id="Electronicse" fontSize={35} fontWeight={"bold"}>Electronics</Text>
          <Box marginLeft={"40px"} textAlign={"left"} marginTop={"15px"}>
            


          </Box>

          <Box id="filter">
            <select  name="" id="" onChange={(e) => handleChange(e)}>
             <option value="reset" >sort-by-price</option>
              <option value="high">Low to high </option>
              <option value="low">High to low</option>
            </select>
          </Box>

          <Box id="add" marginLeft={"0px"} textAlign={"left"} marginTop={"50px"}>
            <img src="https://img.shop.com/Image/topbrands/nmlogos_76181.gif" alt="" />
            <Text> Up to 6.00% Cashback <br />
              Store conditions </Text>
            <Button>partner Site 🤝</Button>
          </Box>

          <Box id="add" marginLeft={"0px"} textAlign={"left"} marginTop={"20px"}>
            <img src="https://img.shop.com/Image/topbrands/nmlogos_98199.gif" alt="" />
            <Text> Up to 6.00% Cashback <br />
              Store conditions </Text>
            <Button>partner Site 🤝</Button>
          </Box>
        </Box>





        <Grid mt={"30px"} marginLeft={"240px"} paddingLeft={"15px"} width={"80%"} templateColumns='repeat(3, 1fr)' gap={6}>

          {Electronics.map((el) => {
            return <Box id='probox' key={el.id}>
              <Box textAlign={"left"}>
                <img id="hov" src={el.image1} alt="" />
                <Text noOfLines={[1]} fontSize={17} >{el.title}</Text>
                <Flex gap={2}>
                  <img width={17} src="https://img.shop.com/Image/resources/images/onecart-icon.svg" alt="" />
                  <Text fontSize={13}>Sold by {el.soldby}</Text>

                </Flex>
                <p>{el.category}</p>
                <Text fontWeight={"bold"}>{el.price}</Text>
                <Box mb="15px">
                  {Array(5)
                    .fill("")
                    .map((_, i) => {
                      let rating = Math.ceil(Math.random() * 3);

                      return <Icon
                        as={AiFillStar}
                        key={i}
                        color={i <= rating ? "gold" : "gray.300"}
                      />
                    })}
                </Box>
                <Text color={"teal"} fontSize={14}>Free shipping with $50.00 orders</Text>

                <Button backgroundColor={"blue.300"} onClick={() => handleClick(el)} marginTop={"-65px"} borderRadius={25} width={85} marginLeft={"70%"}>View</Button>


              </Box>

            </Box>
          })}

        </Grid>
      </Flex>



    </div>
  );




};

export default Electronics;