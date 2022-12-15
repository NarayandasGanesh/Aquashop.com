import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, Heading, IconButton, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
 



let getdata=async(setUser)=>{

    let responce=await axios.get(`https://api.fake-rest.refine.dev/users`)
    setUser(responce.data)
}





const Useres = () => {

    const [user,setUser]=useState([]) 
    useEffect(()=>{
        getdata(setUser)
       },[])


    return (
        <Stack>
                    {
                        user.map((user)=>{
                            return (<Flex key={user.id} p="10" gap="2">

                                    <Card maxW='md' minW={{base:"40%" ,sm:"60%"}}>
                                      <CardHeader margin="auto">
                                        <Flex spacing='4'>
                                          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                            <Avatar name={user.name} src={user.name} />
                                    
                                            <Box>
                                              <Heading size='sm'>{user.firstName +" "+ user.lastName}</Heading>
                                              <Text>{"Email :"+user.email}</Text>
                                              <Text>{"birthday:"+user.birthday}</Text>
                                            </Box>
                                           </Flex>
                                          
                                         </Flex>
                                       </CardHeader>
                                       
                                       <CardFooter
                                         justify='space-between'
                                         flexWrap='wrap'
                                         sx={{'& > button': { minW: '136px', },}}>
                                             <Button flex='1' colorScheme="blue"  >
                                              Delete
                                             </Button>
                                              
                                           </CardFooter>
                                         </Card>                                    
                            </Flex>
                           
                        )})
                    }</Stack>
    );
};

export default Useres;