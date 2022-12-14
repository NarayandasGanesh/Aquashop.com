import React, { useState } from 'react';
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, Heading, IconButton, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { REMOVE_Cloth_item } from '../../store/Cloth/Cloth.action';

const Pdoduct = (user) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [price,setPrice]=useState(0)
    const [Creds,setCreds]=useState({})
    const dispatch=useDispatch()

 
    const HandleSubmit=(e)=>{
        e.preventDefault() 
        console.log(user.id,{price:price})

    }

    const handleDelete=(id)=>{
       
      dispatch(REMOVE_Cloth_item(id))

  }
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...Creds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Creds)
    // dispatch(ADD_Cloth_item(Creds));
  };
    
    return (<> 
      <Tr gap="0">
        <Td  p="0"> {user.title}</Td>
        <Td p="0">{user.price}</Td>
        
        <Td p="0" isNumeric>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} border="1px solid black " mr="2"><EditIcon /></Button> 
        <Button onClick={()=>handleDelete(user.id)}  border="1px solid black ">  <DeleteIcon /></Button>  
        </Td>
      </Tr>
 
      
         
   </> );
};

export default Pdoduct;