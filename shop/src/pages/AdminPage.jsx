import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, Heading, IconButton, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Clothes from '../components/AdminPage/Clothes';
import Useres from '../components/AdminPage/Useres';
 




 

const AdminPage = () => {
 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
   
    
const[ userlist,setUserlist ]    =useState(true)
const[ Clothlist,setCloth ]    =useState(false)
const[ jewllerylist,setJewllery ]    =useState(false)
const[ Electrolist,setElectrolist ]    =useState(false)



const handleUser=()=>{
  setUserlist(true)
}
const handleCloth=()=>{
  setUserlist(false)
  setCloth(true)
}

   
     return (
       <>
 
          <Stack display="flex" flexDirection={{base:"column",  sm:"row"}} mt="100px">
               <Stack spacing='24px'   backgroundColor="#f0f1f7" px="5px" >
                 <Box display="flex" flexDirection={{base:"row",  sm:"column" }}>
                 <Button  colorScheme='teal' mt='10' px='20' onClick={handleUser}> User</Button>
                 
                   <FormLabel  ></FormLabel>
                   
                   <Button  colorScheme='teal' mt='10' px='16' mb='10' onClick={handleCloth}> Cloth</Button>
                   <Button  colorScheme='teal' mt='10' px='16' mb='10'  > jewllery</Button>
                   <Button  colorScheme='teal' mt='10' px='16' mb='10' > Electronics</Button>

                 </Box>
   
                 
               </Stack>
                <Stack backgroundColor="white" w="100%">
                    <Heading> Admin Panel</Heading>
                  {  userlist &&<Useres/>}
                  {Clothlist&&<Clothes/>}

                      
                        
                                  </Stack>
                                   </Stack>
                               </>
                              
     )
};

export default AdminPage;