
import React from "react";
import {
  Flex,
  Text,
  Spacer,
  HStack,
  Card,
  CardBody,
  Link,
  Image,
  Button,
  Box,
  VStack
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
const Homepage = () => {
  return (
    < div style={{textAlign:"center"}}>
      <Flex 
        backgroundColor="#f0f1f7"
        height="30px"
        alignItems="center"
        // direction={["column", "column", "row", "row"]}
        // h={["12vh", "12vh", "10vh", "10vh"]}
        marginTop="120px"

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
        // fontSize={["xs", "xs", "xs", "xs"]}
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

      <HStack justifyContent={"space-evenly"} direction={["row", "row", "column", "column"]} marginTop="50px">
       <Box>
       <Card
          marginLeft="10px"
          justifyContent="space-between"
          backgroundColor="#f0f1f7"
          maxW="sm"
           height="367px"
        >
          <Text fontWeight="500">Your Favourite Department</Text>

          <Card display="grid" gridTemplateColumns="repeat(2,1fr)" gap="5px">
            <Link>
              <CardBody height="170px" width="150px" backgroundColor="#545871">
                <Image
                  height="100px"
                  width="100px"
                  backgroundColor="rgba(0,0,0,.5)"
                  src="https://img.shop.com/Image/departments/Beauty.jpg"
                  alt="beauty"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  color="white"
                  _hover={{ color: "black" }}
                >
                  Beauty
                </Text>
              </CardBody>{" "}
            </Link>
            <Link>
              {" "}
              <CardBody height="170px" width="150px" background="#545871">
                <Image
                  height="100px"
                  width="100px"
                  src="https://img.shop.com/Image/departments/Health%20&%20Nutrition.jpg"
                  alt="Health"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  color="white"
                  _hover={{ color: "black" }}
                >
                  Health{" "}
                </Text>
              </CardBody>
            </Link>
            <Link>
              {" "}
              <CardBody height="170px" width="150px" background="#545871">
                <Image
                  height="100px"
                  width="100px"
                  src="https://img.shop.com/Image/departments/Clothes.jpg"
                  alt="Clothes"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  color="white"
                  _hover={{ color: "black" }}
                >
                  Clothes
                </Text>
              </CardBody>
            </Link>
            <Link>
              {" "}
              <CardBody height="170px" width="150px" background="#545871">
                <Image
                  height="100px"
                  width="100px"
                  src="https://img.shop.com/Image/departments/Electronics.jpg"
                  alt="Electronics"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  color="white"
                  _hover={{ color: "black" }}
                >
                  Electronics
                </Text>
              </CardBody>
            </Link>
          </Card>
        </Card>
       </Box>
    <Box>
    <Card
          marginLeft="10px"
          justifyContent="space-between"
          backgroundColor="#f0f1f7"
          width="305px"
          maxW="sm"
          height="367px"
        >
          <Text fontWeight="500">
            Complimentary Shipping, Returns and Gift Packaging Available
          </Text>

          <Card>
            <Link>
              <CardBody backgroundColor="#545871">
                <Image
                  height="247px"
                  backgroundColor="rgba(0,0,0,.5)"
                  src="https://img.shop.com/Image/homepage/us-eng-toryburch-hp-winter-dec221669836193393.jpeg"
                  alt="beauty"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  color="white"
                  _hover={{ color: "black" }}
                >
                  Shop Now
                </Text>
              </CardBody>{" "}
            </Link>
          </Card>
        </Card>
    </Box>

      <Box>
      <Card
          marginLeft="10px"
          justifyContent="space-between"
          backgroundColor="#f0f1f7"
          maxW="sm"
          height="367px"

        >
          <Text fontWeight="500" marginTop="10px">Featured OneCart Stores</Text>

          <Card  gap="5px"  width="300px" marginTop="15px">
            <Link>
              <CardBody
                height="60px"
                marginBottom="20px"

                 marginLeft="50px"
                width="200px"
                backgroundColor="#545871"
              >
                <Image
                  height="30px"
                  width="350px"
                  backgroundColor="rgba(0,0,0,.5)"
                  src="https://img.shop.com/Image/topbrands/nmlogos_136706.gif"
                  alt="beauty"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  color="white"
                  _hover={{ color: "black" }}
                >
            
                </Text>
              </CardBody>
            </Link>
            <Link>
             
              <CardBody
                height="60px"
                marginBottom="20px"
              
                marginLeft="50px"
                width="200px"
             
                backgroundColor="#545871"
              >
                <Image
                  height="30px"
                  width="350px"
                  src="https://img.shop.com/Image/topbrands/nmlogos_134047.gif"
                  alt="Health"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  color="white"
                  _hover={{ color: "black" }}
                >
               
                </Text>
              </CardBody>
            </Link>
            <Link>
          
              <CardBody
                height="60px"
                marginBottom="20px"
              
                width="200px"
                marginLeft="50px"
                backgroundColor="#545871"
              >
                <Image
                  height="30px"
                  width="350px"
                  src="https://img.shop.com/Image/topbrands/nmlogos_108567.gif"
                  alt="Clothes"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  width="100px"
                  color="white"
                  _hover={{ color: "black" }}
                >
                
                </Text>
              </CardBody>
            </Link>
            <Link>
           
              <CardBody
                height="60px"
                
                
                marginLeft="50px"
                width="200px"
                backgroundColor="#545871"
              >
                <Image
                  height="30px"
                  width="350px"
                  src="https://img.shop.com/Image/topbrands/nmlogos_113138.gif"
                  alt="Electronics"
                  borderRadius="lg"
                />
                <Text
                  marginTop="10px"
                  color="white"
                  _hover={{ color: "black" }}
                >
                  
                </Text>
              </CardBody>
            </Link>
          </Card>
        </Card>
      </Box>
     <Box >
     <Card
          marginLeft="10px"
          backgroundColor="#f0f1f7"
          width="280px"
          height="367px"
        >
          <Text fontWeight="500" marginTop="10px">Sign in for the best experience</Text>
          <Link><Button width="200px" color="white"  _hover={{color:"black"}} backgroundColor="#545871" marginTop="15px"> 
            Sign In 
          </Button></Link>
         <Link><Image marginTop="20px" src="https://img.shop.com/Image/homepage/stocking-stuffers-media-300x250-img1669837197571.jpg"  /></Link>

        </Card>
     </Box>
      </HStack>


<HStack marginLeft="40px" marginTop="50px">
<Link>
<Box>
  <Image width="400px" height="420px" src="https://img.shop.com/Image/homepage/shop-usa-eng-96513-free-shipping-day-banners-600x600-img1670959530225.jpg" />
</Box></Link>
<VStack>
  <Text  fontSize="4xl">Popular Brands</Text>
  <Link>
  <HStack    gap="20px"        >
   
   <Image width="160px"  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"  backgroundColor="#f0f1f7"  src="https://img.shop.com/Image/homepage/nike_140x110-img.gif" />
    <Image width="160px" boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" backgroundColor="#f0f1f7" src="https://img.shop.com/Image/homepage/michaelkors_140x110-img.gif" />
    <Image width="160px" boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" backgroundColor="#f0f1f7" src="https://img.shop.com/Image/homepage/coach_brand7.jpg" />
    <Image width="160px" boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" backgroundColor="#f0f1f7" src="https://img.shop.com/Image/homepage/adidaslogo_140_1100.jpg" />
    <Image width="160px" boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" backgroundColor="#f0f1f7" src="https://img.shop.com/Image/homepage/cuisinart.gif" />
   
  </HStack>
  </Link>
  <Link>
  <HStack >
    <VStack >
    <Image  src="https://img.shop.com/Image/homepage/us-eng-jcpenney-50p-hp-nov221669752610403.jpeg" />
    <HStack ><Text fontWeight={700}>2.00% </Text><AiFillDollarCircle color="teal"/><Text  fontWeight={700}>   Cashback</Text></HStack>

    </VStack>
    <VStack>
    <Image src="https://img.shop.com/Image/homepage/us-eng-macys-20poffgifts-hp-dec221670435068951.jpeg" />
    <HStack><Text  fontWeight={700}>2.00% </Text><AiFillDollarCircle color="teal"/><Text  fontWeight={700}> Cashback</Text></HStack>

    </VStack>
    <VStack>
    <Image src="https://img.shop.com/Image/homepage/us-eng-nike-hp-dec221670866755445.jpeg" />
    <HStack><Text  fontWeight={700}>2.00% </Text><AiFillDollarCircle color="teal" /><Text  fontWeight={700}> Cashback</Text></HStack>
    </VStack>
  </HStack>
  </Link>
</VStack>
  
</HStack>
</div>
  )


}

export default Homepage
