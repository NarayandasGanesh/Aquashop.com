import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, Heading, IconButton, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
import { ADD_Electronics_item, Get_Electronics_item, REMOVE_Electronics_item, UPDATE_Electronics_item } from '../../store/Electronics/Electronics.action';
import { store } from '../../store/store';
import Pdoduct from './Electronics';
 




 

const Clothes = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user,setUser]=useState([]) 
    const [price,setPrice]=useState(0)


    
    const {Electronics}=useSelector((store)=>store.ElectronicsManger)
    const dispatch=useDispatch()




   const [filter,setFilter]=useState("Mens")
   const [Creds,setCreds]=useState({})
  

    useEffect(()=>{
       
        dispatch(Get_Electronics_item())
       },[Electronics]) 


      //  let men = cloth.filter((item)=>item.category==filter)


      //  useEffect(()=>{
      //    men= cloth.filter((item)=>item.category==filter)
      //    console.log(men)
      //    },[filter]) 

       const HandleFilterChang=(data)=>{
        setFilter(data) 

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
    dispatch(ADD_Electronics_item(Creds));
  };

  const handleDelete=(id)=>{
       
    dispatch(REMOVE_Electronics_item(id))

}

const handleUpdate=(id)=>{
  console.log(Creds,id)
  dispatch(UPDATE_Electronics_item(id,Creds))


}
  
   
    
    return (
        <>
        
        <Button onClick={onOpen}>Add Product</Button>
       

          <>    
             <Stack>         { Electronics.map((user)=>{
                              return (  <>
                                <Flex key={Math.random()}   >
        <Text w={"30%"}  p="0"> {user.title}</Text>
          <Input w={"30%"} name='price' onChange={hanldeChange} placeholder={user.price}></Input> 
        
        <Flex p="0" >
        <Button   colorScheme='teal' onClick={()=>handleUpdate(user.id)} border="1px solid black " mr="2"><EditIcon /></Button> 
        <Button onClick={()=>handleDelete(user.id)}  border="1px solid black ">  <DeleteIcon /></Button>  
        
        </Flex>
      </Flex>
                              
                              </> )})}   </Stack>

                               <Modal
                               isOpen={isOpen}
                               onClose={onClose}
                             >
                              <ModalOverlay />
                               <ModalContent>
                                 
                                  <ModalCloseButton />
                                  <ModalBody pb={6}>
                        
                                    <form  onSubmit={handleSubmit}>
                                         <Stack>
                                         <input type="text" name='title' style={{border:"1px solid black"}} placeholder="title..........."  onChange={hanldeChange} />
                                         </Stack>
                                         <Stack>
                                         <select name='code' onChange={hanldeChange} style={{border:"1px solid black"}}>
                                               <option>select code </option>
                                               <option value="MNK59Y"> MNK59Y</option>
                                        </select>
                                         
                                        </Stack>
                                        <Stack>
                                        <input type="text" name='image1'  style={{border:"1px solid black"}}    onChange={hanldeChange} placeholder="image1 " />
                                        <input type="text" name='image2'  style={{border:"1px solid black"}}    onChange={hanldeChange} placeholder="image2 " />
                                        <input type="text" name='image3'  style={{border:"1px solid black"}}    onChange={hanldeChange}  placeholder="image3 "/>
                                        <input type="text" name='image4'  style={{border:"1px solid black"}}    onChange={hanldeChange} placeholder= "image4" />
                                        </Stack>
                                        <Stack>
                                        <input type="text" name='price'  style={{border:"1px solid black"}}  onChange={hanldeChange} placeholder="Price  :eg..$90.00" />
                                        </Stack>
                                        <Stack>
                                        
               
                                       <select name='soldby' onChange={hanldeChange} style={{border:"1px solid black"}}>
                                             <option>select soldby </option>
                                             <option value="Cutter & Buck"> Cutter & Buck</option>
                                       </select>
                                       </Stack>
                       
                                      
                
                                        <Button  type='submit' colorScheme='blue' mr={3}>
                                           Save
                                        </Button><Button onClick={onClose}>Cancel</Button>
                                         </form>
                                  
                                      
                                                                       
                                            
                                        </ModalBody>
                                      </ModalContent>
                                    </Modal>
                                      </>               
                                                     
    </>);
};

export default Clothes;
