import React from "react";
import { Flex, Spacer, Text, Image,Card,CardBody, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";

const Homepage = () => {
  return (
    <>
      <Flex
        backgroundColor="#f0f1f7"
        height="30px"
        alignItems="center"
        direction={["column", "column", "row", "row"]}
        h={["12vh", "12vh", "10vh", "10vh"]}
      >
        <Text
          style={{ color: "#202340", fontSize: ".75rem" }}
          marginLeft="20px"
        >
          Your Shop Consultant is <Text as="b"> SHOP.COM</Text>
        </Text>

        <Spacer />

        <Flex>
          <Text
            style={{ color: "#545871", fontSize: ".75rem" }}
            marginRight="20px"
          >
            <Text color="#545871" display="flex">
              Earn up to 50% <AiFillDollarCircle color="Teal" size="15px" />
              Cashback on eligible purchases.
              <Text as="u" fontWeight="bold">
                <Link> Learn More</Link>
              </Text>
            </Text>
          </Text>
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        marginTop="10px"
        fontSize={["xs", "xs", "xs", "xs"]}
      >
        <Text margin="auto" display="flex" alignItems="center">
          <Text color="#545871" fontSize="3xl" marginRight="7px">
            $50,009,502
          </Text>

          <Text marginRight="7px">awarded in</Text>
          <AiFillDollarCircle color="Teal" size="30px" />
          <Text color="#545871" fontWeight="400" marginLeft="7px">
            Cashback!
          </Text>
        </Text>
      </Flex>
      <Image
        height="300px"
        marginTop="30px"
        src="https://img.shop.com/Image/homepage/shop-gbr-102789-holiday-hot-toys-banners-1600x300-img-min1669996056936.jpg"
      /> 
   
      <HStack direction={["row" ,"row" , "column","column"]} marginTop="50px">
      <Card     marginLeft="10px" justifyContent="space-between"  backgroundColor="#f0f1f7"   maxW="sm">
      <Text>Your Favourite Department</Text>
       
       <Card  display="grid"   gridTemplateColumns="repeat(2,1fr)" gap="5px">

       <Link>
       <CardBody height="170px" width="150px"    backgroundColor="#545871" >

          <Image height="100px" width="100px"  backgroundColor="rgba(0,0,0,.5)"
            src="https://img.shop.com/Image/departments/Beauty.jpg"
            alt="beauty"
            borderRadius="lg"
          />
          <Text marginTop="10px" color="white" _hover={{color:"black"}}>Beauty</Text>
             </CardBody> </Link>
          <Link>   <CardBody height="170px" width="150px"   background="#545871">
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Health%20&%20Nutrition.jpg"
            alt="Health"
            borderRadius="lg"
          />
            <Text marginTop="10px" color="white" _hover={{color:"black"}}>Health </Text>
     
             </CardBody></Link>
            <Link> <CardBody height="170px" width="150px"   background="#545871" >
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Clothes.jpg"
            alt="Clothes"
            borderRadius="lg"
          />
            <Text marginTop="10px" color="white" _hover={{color:"black"}}>Clother</Text>
             </CardBody></Link>
            <Link> <CardBody height="170px" width="150px"   background="#545871" >
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Electronics.jpg"
            alt="Electronics"
            borderRadius="lg"
          />
            <Text marginTop="10px" color="white" _hover={{color:"black"}}>Electronics</Text>
         
         
        </CardBody></Link>
        
        </Card>
      </Card>
      <Card  marginLeft="10px" justifyContent="space-between"  backgroundColor="#f0f1f7" width="305px"  maxW="sm">
      <Text>Complimentary Shipping, Returns and Gift Packaging Available</Text>
       
       <Card  >

       <Link>
       <CardBody   backgroundColor="#545871" >

          <Image  height="247px"  backgroundColor="rgba(0,0,0,.5)"
            src="https://img.shop.com/Image/homepage/us-eng-toryburch-hp-winter-dec221669836193393.jpeg"
            alt="beauty"
            borderRadius="lg"
          />
          <Text marginTop="10px" color="white" _hover={{color:"black"}}>Beautty</Text>
             </CardBody> </Link>
        
          
       
        
        </Card>
      </Card>
      <Card  marginLeft="10px" justifyContent="space-between" backgroundColor="orange.100" width="305px"  maxW="sm">
      <Text>Your Favourite Department</Text>
       
       <Card  display="grid"  gridTemplateColumns="repeat(2,1fr)" gap="5px">

       <Link>
       <CardBody height="170px" width="150px"    backgroundColor="#545871" >

          <Image height="100px" width="100px"  backgroundColor="rgba(0,0,0,.5)"
            src="https://img.shop.com/Image/departments/Beauty.jpg"
            alt="beauty"
            borderRadius="lg"
          />
          <Text marginTop="10px" color="white" _hover={{color:"black"}}>Beautty</Text>
             </CardBody> </Link>
             <CardBody height="170px" width="150px"   background="#545871">
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Health%20&%20Nutrition.jpg"
            alt="Health"
            borderRadius="lg"
          />
     
             </CardBody>
             <CardBody height="170px" width="150px"   background="#545871" >
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Clothes.jpg"
            alt="Clothes"
            borderRadius="lg"
          />
             </CardBody>
             <CardBody height="170px" width="150px"   background="#545871" >
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Electronics.jpg"
            alt="Electronics"
            borderRadius="lg"
          />
         
         
        </CardBody>
        
        </Card>
      </Card>
        <Card  marginLeft="10px" justifyContent="space-between" backgroundColor="orange.100" width="305px"  maxW="sm">
      <Text>Your Favourite Department</Text>
       
       <Card  display="grid"  gridTemplateColumns="repeat(2,1fr)" gap="5px">

       <Link>
       <CardBody height="170px" width="150px"    backgroundColor="#545871" >

          <Image height="100px" width="100px"  backgroundColor="rgba(0,0,0,.5)"
            src="https://img.shop.com/Image/departments/Beauty.jpg"
            alt="beauty"
            borderRadius="lg"
          />
          <Text marginTop="10px" color="white" _hover={{color:"black"}}>Beautty</Text>
             </CardBody> </Link>
             <CardBody height="170px" width="150px"   background="#545871">
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Health%20&%20Nutrition.jpg"
            alt="Health"
            borderRadius="lg"
          />
     
             </CardBody>
             <CardBody height="170px" width="150px"   background="#545871" >
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Clothes.jpg"
            alt="Clothes"
            borderRadius="lg"
          />
             </CardBody>
             <CardBody height="170px" width="150px"   background="#545871" >
           <Image height="100px" width="100px" 
            src="https://img.shop.com/Image/departments/Electronics.jpg"
            alt="Electronics"
            borderRadius="lg"
          />
         
         
        </CardBody>
        
        </Card>
      </Card>
      </HStack>
    </>
  );
};

export default Homepage;
