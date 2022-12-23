import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  VStack,
  Stack,
  Grid,
} from "@chakra-ui/react";

import { AiFillDollarCircle } from "react-icons/ai";
import Carousel from "../components/Carousel";
import CarouselCosmetics from "../components/CarouselCosmetics";
import CarouselHealth from "../components/CarouselHealth";
import CarouselElectronics from "../components/CarouselElectronics";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        margin: "auto",
        width: "50px",
        height: "50px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
        margin: "auto",
        width: "50px",
        height: "50px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

const Homepage = () => {
  const navigateTo = useNavigate();
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios
      .get("https://next-backend-orpin.vercel.app/jewelery")
      .then((response) => {
       
        setData(response.data);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div style={{ textAlign: "center" }}>
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

      <Stack
        display={"flex"}
        justifyContent={{base:"center", md:"space-evenly"}}
        direction={{base:"column"  ,md:"row"}}
        align="center"

        marginTop="50px"
        backgroundColor="#f0f1f7"
       
      >
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
             
                <CardBody 
                cursor="pointer"  
                _hover={{color:"black"}}
                onClick={()=>GoTo("/cosmetic")}
                  height="170px"
                  width="150px"
                  backgroundColor="#545871"
                >
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
                </CardBody>
            
              
                <CardBody   cursor="pointer"  onClick={()=>GoTo("/health")} height="170px" width="150px" background="#545871">
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
                    Health
                  </Text>
                </CardBody>
           
                <CardBody   cursor="pointer"  onClick={()=>GoTo("/clothes")} height="170px" width="150px" background="#545871">
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
          
                <CardBody   cursor="pointer"  onClick={()=>GoTo("/electronics")} height="170px" width="150px" background="#545871">
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
          
                <CardBody   cursor="pointer"  onClick={()=>GoTo("/health")} backgroundColor="#545871">
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
            <Text fontWeight="500" marginTop="10px">
              Featured OneCart Stores
            </Text>

            <Card gap="5px" width="300px" marginTop="15px">
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
                  ></Text>
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
                  ></Text>
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
                  ></Text>
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
                  ></Text>
                </CardBody>
              </Link>
            </Card>
          </Card>
        </Box>
        <Box onClick={()=>GoTo("/signin")}>
          <Card
            marginLeft="10px"
            backgroundColor="#f0f1f7"
            width="280px"
            height="367px"
          >
            <Text fontWeight="500" marginTop="10px">
              Sign in for the best experience
            </Text>
            <Link>
              <Button
                width="200px"
                color="white"
                _hover={{ color: "black" }}
                backgroundColor="#545871"
                marginTop="15px"
              >
                Sign In
              </Button>
            </Link>
            <Link>
              <Image
                marginTop="20px"
                src="https://img.shop.com/Image/homepage/stocking-stuffers-media-300x250-img1669837197571.jpg"
              />
            </Link>
          </Card>
        </Box>
      </Stack>

      <Stack backgroundColor="#f0f1f7" marginLeft="40px" marginTop="50px"
      display={"flex"}
      flexDirection={{base:"column",md:"row"}}
      justifyContent="center"
      align={"center"}
      >
        <Link>
          <Box>
            <Image
              width="400px"
              height="420px"
              src="https://img.shop.com/Image/homepage/shop-usa-eng-96513-free-shipping-day-banners-600x600-img1670959530225.jpg"
            />
          </Box>
        </Link>
        <VStack>
          <Text fontSize="4xl">Popular Brands</Text>
          <Link>
            <Grid templateColumns={{base:'repeat(2, 1fr)',md:'repeat(5, 1fr)'}} gap="20px">
              <Image
                width="160px"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                backgroundColor="#f0f1f7"
                src="https://img.shop.com/Image/homepage/nike_140x110-img.gif"
              />
              <Image
                width="160px"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                backgroundColor="#f0f1f7"
                src="https://img.shop.com/Image/homepage/michaelkors_140x110-img.gif"
              />
              <Image
                width="160px"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                backgroundColor="#f0f1f7"
                src="https://img.shop.com/Image/homepage/coach_brand7.jpg"
              />
              <Image
                width="160px"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                backgroundColor="#f0f1f7"
                src="https://img.shop.com/Image/homepage/adidaslogo_140_1100.jpg"
              />
              <Image
                width="160px"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                backgroundColor="#f0f1f7"
                src="https://img.shop.com/Image/homepage/cuisinart.gif"
              />
            </Grid>
          </Link>
          <Link>
            <HStack>
              <VStack>
                <Image src="https://img.shop.com/Image/homepage/us-eng-jcpenney-50p-hp-nov221669752610403.jpeg" />
                <HStack>
                  <Text fontWeight={700}>2.00% </Text>
                  <AiFillDollarCircle color="teal" />
                  <Text fontWeight={700}> Cashback</Text>
                </HStack>
              </VStack>
              <VStack>
                <Image src="https://img.shop.com/Image/homepage/us-eng-macys-20poffgifts-hp-dec221670435068951.jpeg" />
                <HStack>
                  <Text fontWeight={700}>2.00% </Text>
                  <AiFillDollarCircle color="teal" />
                  <Text fontWeight={700}> Cashback</Text>
                </HStack>
              </VStack>
              <VStack>
                <Image src="https://img.shop.com/Image/homepage/us-eng-nike-hp-dec221670866755445.jpeg" />
                <HStack>
                  <Text fontWeight={700}>2.00% </Text>
                  <AiFillDollarCircle color="teal" />
                  <Text fontWeight={700}> Cashback</Text>
                </HStack>
              </VStack>
            </HStack>
          </Link>
        </VStack>
      </Stack>

      <Box marginTop="50px">
        <Box>
          <Image
            width="200px"
            margin="auto"
            src="https://img.shop.com/Image/resources/homepage/shop-homepage-icon.svg"
          />
        </Box>
      </Box>

      <HStack background="#f0f1f7" mt="50px" justifyContent="space-evenly">
        <Box background="#F0F1F7" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
          <VStack>
            <Box>
              {" "}
              <Image src="https://img.shop.com/Image/homepage/us-eng-bbb-memorialday-media-may211670870263691.jpg" />
            </Box>
            <Text fontWeight={700}>25% off any Order</Text>
          </VStack>
        </Box>
        <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
          <VStack>
            <Box>
              <Image src="https://img.shop.com/Image/homepage/us-eng-oerstock-hp-media-dec221670968240105.png" />
            </Box>
            <HStack>
              <Text fontWeight={700}>2.00% </Text>
              <AiFillDollarCircle color="teal" />
              <Text fontWeight={700}> Cashback</Text>
            </HStack>
          </VStack>
        </Box>
        <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
          <VStack>
            <Box>
              <Image src="https://img.shop.com/Image/homepage/shop-en-us-Marshalls-FreeShip-300x2501668727246227-img.jpg" />
            </Box>
            <Text fontWeight={700}>25% off any Order</Text>
          </VStack>
        </Box>
      </HStack>
      <HStack mt="50px" justifyContent="space-evenly">
        <Box>
          <Image src="https://img.shop.com/Image/homepage/giftsforher-media1664553609405.jpg" />
        </Box>
        <Box>
          <Image src="https://img.shop.com/Image/homepage/giftsforhim-media1664553622036.jpg" />
        </Box>
        <Box>
          <Image src="https://img.shop.com/Image/homepage/giftsforteens-media1664553627912.jpg" />
        </Box>
      </HStack>

      <VStack backgroundColor="f0f1f7" mt="70px">
        <Box >
          <Text
            mb="50px"
            fontFamily="oswald, serif"
            fontSize="38px"
            fontWeight="normal"
            color="#2e2c38"
          >
            Gift Ideas
          </Text>
        </Box>
        <Grid
        templateColumns={{base:'repeat(2, 1fr)',md:'repeat(6, 1fr)'}}
         justifyContent="space-evenly"
        
        >
          <VStack>
            <Box   cursor="pointer"  onClick={()=>GoTo("/electronics")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="33px"
                marginTop="22px"
                height="135px"
                width="125px"
                src="https://img.shop.com/Image/240000/243400/243406/products/1947692115.jpg?plain&size=400x400"
              />
            </Box>
            <Text 
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
              ELECTRONIC GIFTS
            </Text>
          </VStack>
          <VStack>
            <Box   cursor="pointer"  onClick={()=>GoTo("/cosmetic")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="50px"
                marginTop="30px"
                height="125px"
                width="105px"
                src="https://img.shop.com/Image/240000/243300/243380/products/1869987733.jpg?plain&size=300x300"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
              GIFTS UNDER $25
            </Text>
          </VStack>
          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/health")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="36px"
                marginTop="25px"
                height="135px"
                width="115px"
                src="https://img.shop.com/Image/260000/266700/266794/products/1920614672.jpg?plain&size=300x300"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
              GIFTS UNDER $50
            </Text>
          </VStack>

          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/cosmetic")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="40px"
                marginTop="30px"
                height="125px"
                width="110px"
                src="https://img.shop.com/Image/240000/243300/243380/products/1942133519.jpg?plain&size=1600x1600"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
              GIFTS UNDER $100
            </Text>
          </VStack>
          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/clothes")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="37px"
                marginTop="35px"
                height="125px"
                width="115px"
                src="https://img.shop.com/Image/240000/248600/248698/products/1766653370.jpg?plain&size=300x300"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
              STOCKING STUFFERS
            </Text>
          </VStack>
          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/health")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="43px"
                marginTop="30px"
                height="125px"
                width="115px"
                src="https://img.shop.com/Image/280000/287000/287062/products/1942108864.jpg?plain&size=300x300"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
              GIFTS FOR THE FAMILY
            </Text>
          </VStack>
        </Grid>
      </VStack>

      <HStack mt="90px" justifyContent="space-evenly">
        <Box>
          <Image src="https://img.shop.com/Image/homepage/shop-usa-100086-gift-wrapping-media1669930199153.jpg" />
        </Box>
        <Box>
          <Image src="https://img.shop.com/Image/homepage/shop-usa-105054-Holiday-egift-banners-social-media-assets-media1665596337501.jpg" />
        </Box>
        <Box>
          <Image src="https://img.shop.com/Image/homepage/shop-usa-105045-Holiday-Curbside-Pickup-Banners-Social-Media-min1666128402917.jpg" />
        </Box>
        <Box>
          <Image src="https://img.shop.com/Image/homepage/shop_usa_100094_eng_2022_holiday_buy_online_pickup_in_store_banner_-min1667575563985.jpg" />
        </Box>
      </HStack>

      <Box backgroundColor="#f0f1f7" mt="70px">
        <Box
         width={"100%"}
         display={"flex"}
         justifyContent="center"
        >
          <Text
            marginRight="800px"
            mb="50px"
            fontFamily="oswald, serif"
            fontSize="33px"
            fontWeight="normal"
            color="#2e2c38"
            display="flex"
            margin={"auto"}
          >
            NEW Layered Holiday Collection
          </Text>
        </Box>
        <Stack
        display={"flex"}
        flexDirection={{base:"column",md:"row"}}
        align="center"
        >
          <Box>
            <Image
              mb="200px"
              width="400px"
              height="400px"
              src="https://img.shop.com/Image/homepage/layered-usa-can-106765-holiday-collection-22-edit-banner-BGSQ1671028134306.jpg"
            />
          </Box>
          <Carousel />
        </Stack>
      </Box>

      <Box backgroundColor="#f0f1f7" mt="70px" mb="100px">
        <HStack justifyContent="space-evenly">
          <Box width="300px" height="250px">
            <VStack>
              <Image mb="15px"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                src="https://img.shop.com/Image/homepage/us-eng-shopbop-ny-medi-fillin-hp-jan211671032078319.jpg"
              />
              <Text>
           
                <Flex  mt="5px">
                  <Text mr="5px">2% </Text> <AiFillDollarCircle color="teal" />
                  <Text ml="5px">Cashback</Text>
                </Flex>
              </Text>
              <Text fontSize="14px" >
                Shop up to 70% OFF 1000s of new styles and must-have gifts!
              </Text>
            </VStack>
          </Box>
          <Box width="300px" height="250px">
            <VStack>
              <Image mb="15px"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                src="https://img.shop.com/Image/homepage/us-mk-media-dec221670445967935.jpg"
              />
              <Flex  mt="5px">
              <Text mr="5px">2% </Text> <AiFillDollarCircle color="teal" />
                  <Text ml="5px">Cashback</Text>
              </Flex>
                 <Text fontSize="14px" >
                The Holiday Event: Enjoy 25% Off Your Full Price Purchase! Plus,
                Up To 60%
              </Text>
            </VStack>
          </Box>
          <Box width="300px" height="250px">
            <VStack>
              <Image mb="15px"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                src="https://img.shop.com/Image/homepage/us-eng-3rdlove-media-hp-dec221669846216726.jpg"
              />
              <Flex  mt="5px">
              <Text mr="5px">2% </Text> <AiFillDollarCircle color="teal" />
                  <Text ml="5px">Cashback</Text>
              </Flex>
            </VStack>
          </Box>
          <Box
            width="300px"
            height="250px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          >
            <VStack>
              <Image mb="20px" src="https://img.shop.com/Image/homepage/athelta-media-hp5556-14898061669846349406.jpg" />
              <Flex  >
              <Text mr="5px">2% </Text> <AiFillDollarCircle color="teal" />
                  <Text ml="5px">Cashback</Text>
              </Flex>
            </VStack>
          </Box>
        </HStack>
      </Box>


      <br />
      <br />
      <Box  backgroundColor="#f0f1f7" mt="50px">
        <Box marginTop='50px'
         width={"100%"}
         display={"flex"}
         justifyContent="center"
        
        >
          <Text
            marginRight="800px"
            mb="50px"
            fontFamily="oswald, serif"
            fontSize="40px"
            fontWeight="bold"
            color="#2e2c38"
            display="flex"
            margin={"auto"}
          >
           Luxury Beauty Gifts from Motives
          </Text>
        </Box>
        <HStack>
          <Box>
            <Image
              mb="200px"
              width="400px"
              height="400px"
              src="https://img.shop.com/Image/homepage/motives-usa-can-eng-105076-2022-holiday-banner-600x600-img-min1666019864593.jpg"
            />
          </Box>
       
         <CarouselCosmetics mt="50px" />
        </HStack>
      </Box>





            
      <Box   backgroundColor="#f0f1f7" mt="70px"
       
      >
     
        <Box 
        width={"100%"}
        display={"flex"}
        justifyContent="center"
      
      
        >

          <Text
            marginRight="800px"
            mb="50px"
            fontFamily="oswald, serif"
            fontSize="40px"
            fontWeight="bold"
            color="#2e2c38"
            display="flex"
            margin={"auto"}
          >
      Lumière de Vie
          </Text>
        </Box>
        <HStack>
        
          <CarouselHealth />
       
          <Box>
            <Image
              mb="200px"
              width="400px"
              height="400px"
              src="https://img.shop.com/Image/homepage/motives-usa-can-eng-105076-2022-holiday-banner-600x600-img-min1666019864593.jpg"
            />
          </Box>
       
      
        </HStack>
      </Box>








      
      <VStack   mt="70px">
        <Box  >
          <Text
            mb="50px"
            fontFamily="oswald, serif"
            fontSize="38px"
            fontWeight="normal"
            color="#2e2c38"
          >
          Holiday Specials
          </Text>
        </Box>

        <Grid 
        templateColumns={{base:'repeat(2, 1fr)',md:'repeat(6, 1fr)'}}
        justifyContent="space-evenly">
          <VStack
           templateColumns={{base:'repeat(2, 1fr)',md:'repeat(5, 1fr)'}}
           justifyContent="space-evenly"
          >
            <Box  cursor="pointer"  onClick={()=>GoTo("/cosmetic")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="33px"
                marginTop="22px"
                height="135px"
                width="125px"
                src="https://img.shop.com/Image/240000/248600/248698/products/925887691.jpg?plain&size=750x750"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
            BEAUTY
            </Text>
          </VStack>
          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/jewelery")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="50px"
                marginTop="30px"
                height="125px"
                width="105px"
                src="https://img.shop.com/Image/280000/282000/282022/products/1875095140.jpg?plain&size=750x750"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
           JEWELRY
            </Text>
          </VStack>
          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/health")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="36px"
                marginTop="25px"
                height="135px"
                width="115px"
                src="https://img.shop.com/Image/210000/214100/214196/products/701199621.jpg?plain&size=750x750"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
         HEALTH & NUTRITION
            </Text>
          </VStack>

          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="40px"
                marginTop="30px"
                height="125px"
                width="110px"
                src="https://img.shop.com/Image/240000/243300/243390/products/1954251885.jpg?plain&size=1600x1600"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
            CLEANING


            </Text>
          </VStack>
          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/cosmetic")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="37px"
                marginTop="35px"
                height="125px"
                width="115px"
                src="https://img.shop.com/Image/240000/243300/243380/products/1788447992.jpg?plain&size=750x750"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
           BEAUTY GIFT SETS

            </Text>
          </VStack>
          <VStack>
            <Box  cursor="pointer"  onClick={()=>GoTo("/cosmetic")}
              borderRadius="50%"
              border="10px solid #1a202c82"
              justifyItems="center"
              height="200px"
              width="210px"
            >
              <Image
                marginLeft="43px"
                marginTop="30px"
                height="125px"
                width="115px"
                src="https://img.shop.com/Image/240000/248600/248698/products/1849034699.jpg?plain&size=750x750"
              />
            </Box>
            <Text
              fontSize="1rem"
              color="#202340"
              fontWeight="700"
              textShadow="0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff"
            >
              SEE ALL
            </Text>
          </VStack>
        </Grid>
      </VStack>




      <Box  backgroundColor="#f0f1f7" mt="70px">
        <HStack  justifyContent="space-evenly">
        <Box>
          <Image boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" src="https://img.shop.com/Image/homepage/ix-us-eng-105233-digestive-health-packets-holiday-banner-med1667506965936.jpg" />
        </Box>
        <Box>
          <Image boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" src="https://img.shop.com/Image/homepage/royal-spa-usa-engsmall1666034758440.jpg" />
        </Box>
        <Box>
          <Image boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" src="https://img.shop.com/Image/homepage/isotonix-usa-105568-opc3-beauty-blend-banner-media1671109554812.jpeg" />
        </Box>
        </HStack>
      </Box>


      <Box bgColor="#f0f1f7" mt="70px">
        <VStack>
          <Text       mb="50px"
            fontFamily="oswald, serif"
            fontSize="38px"
            fontWeight="normal"
            color="#2e2c38">
          ELECTRONICS PRODUCTS 
          </Text>
          <CarouselElectronics />
        </VStack>
      </Box>

<Box  backgroundColor="#f0f1f7" mt="70px" mb="100px" >
  <vStack>
    <Text  mb="50px"
            fontFamily="oswald, serif"
            fontSize="38px"
            fontWeight="normal"
            color="#2e2c38"> OUR BRANDS</Text>

            <Grid 
             templateColumns={{base:'repeat(2, 1fr)',md:'repeat(5, 1fr)'}}
<<<<<<< HEAD
    gap="20px"
          
           >
=======
             gap="10px"
            justifyContent="space-evenly">
>>>>>>> ca6ba1f522e0f34664f1b52f328d04c0496ab7a0
                <Box  cursor="pointer" onClick={()=>GoTo("/health")}  _hover={{color:"blue.300"}}>
              <VStack>
                <Text fontSize="1rem" lineHeight="1.65rem" fontWeight="700">
                  HEALTH AND NUTRITIONS
                </Text>
                <Image width="350px" height="250px" src="https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg" />
              </VStack>
                </Box>

               <Box  cursor="pointer" onClick={()=>GoTo("/cosmetics")}  _hover={{color:"blue.300"}}>
              <VStack>
               <Text fontSize="1rem" lineHeight="1.65rem" fontWeight="700">
                BEAUTY
                </Text>
                <Image width="350px" height="250px"  src="https://img.shop.com/Image/homepage/lipstick1572880828301.jpg" />
              </VStack>
               </Box>

             <Box  cursor="pointer" onClick={()=>GoTo("/jewelery")}  _hover={{color:"blue.300"}}>
              <VStack>
             <Text fontSize="1rem" lineHeight="1.65rem" fontWeight="700">
              JEWELRY
                </Text>
                <Image width="350px" height="250px"  src="https://img.shop.com/Image/280000/282000/282022/products/1954593896.jpg?plain&size=1600x1600" />
              </VStack>
             </Box>

            <Box cursor="pointer" onClick={()=>GoTo("/clothes")} _hover={{color:"blue.300"}}>
              <VStack fontSize="1rem" lineHeight="1.65rem" fontWeight="700">
            <Text fontSize="1rem" lineHeight="1.65rem" fontWeight="700">
            CLOTHINGS
                </Text>
                <Image width="350px" height="250px"  src="https://img.shop.com/Image/290000/291600/291696/products/1943601116__800x800__.jpg" />
              </VStack >
            </Box>

              <Box cursor="pointer"  onClick={()=>GoTo("/electronics")} _hover={{color:"blue.300"}}>
              <VStack>
              <Text fontSize="1rem" lineHeight="1.65rem" fontWeight="700">
          ELECTRONICS
                </Text>
                <Image width="350px" height="250px"  src="https://img.shop.com/Image/280000/281900/281909/products/1935336852__800x800__.jpg" />
              </VStack>
              </Box>
            </Grid>

  </vStack>
</Box>
{/* 
font-size: 1rem;
    text-align: center;
    line-height: 1.625rem;
    font-weight: 700;
    text-transform: uppercase; */}


    </div>
  );
};

export default Homepage;
