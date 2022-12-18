import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Get_cloth_item } from '../../store/Cloth/Cloth.action';
import { Get_Cosmetics_item } from '../../store/Cosmetics/Cosmetics.action';
import { Get_Electronics_item } from '../../store/Electronics/Electronics.action';
import { Get_Health_item } from '../../store/Health/Health.action';
import { Get_Jewelery_item } from '../../store/Jewelery/Jewelery.action';
import { store } from '../../store/store';



const Dashbord = () => {

    const {Electronics}=useSelector((store)=>store.ElectronicsManger)
    
    const {cloth}=useSelector((store)=>store.ClothManger)

    const {Jewelery}=useSelector((store)=>store.JeweleryManger)
    const {Cosmetics} =useSelector((store)=>store.CosmeticsManger)
    const {Health} =useSelector((store)=>store.HealthManger)

    const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(Get_Electronics_item())
    dispatch(Get_Jewelery_item())
    dispatch(Get_cloth_item())
    dispatch(Get_Cosmetics_item())
    dispatch(Get_Health_item())

  },[])
    
    const data = [
        {
          name: 'Electronics',
          PRODUCT_COUNT: Electronics.length,
          CL:"red"
           
        },
        {
          name: 'CLOTH',
          PRODUCT_COUNT: cloth.length,
          CL:"black"

           
        },
        {
            name: 'Jewelery',
            PRODUCT_COUNT: Jewelery.length,
            CL:"blue"
            
          },
          {
            name: 'Cosmetics',
            PRODUCT_COUNT: Cosmetics.length,
            CL:"blue"
            
          },
          {
            name: 'Health',
            PRODUCT_COUNT: Health.length,
            CL:"blue"
            
          }
         
      ];

    //   const current = new Date();
    //   const date = `${current.getDate()}/${current.getMonth()+1}`

      const UserGrowth = [
        {
          name: '16/12',
          New_user: 5,
          
          
        },
        {
            name: '17/12',
            New_user: 3,
        },
        {
            name: '18/12',
            New_user: 6,
        },
        {
            name: '19/12',
            New_user: 8,
        } ,
      ];
  
 




    return (
        <Box h={"800px"} display="flex" flexDirection={"column"} justifyContent="center" alignItems={"center"} gap="20px">
           <h1> dashbord</h1>
        
           <ResponsiveContainer width="50%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
         
          <Bar dataKey="PRODUCT_COUNT" fill="blue" />
        </BarChart>
      </ResponsiveContainer>

      
      <ResponsiveContainer width="60%" height="60%">
        <LineChart
          width={500}
          height={300}
          data={UserGrowth}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="New_user" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      
         
            
        </Box>
    );
};

export default Dashbord;