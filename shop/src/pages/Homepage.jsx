import React from "react";
import { useEffect } from "react";
import axios from "axios"
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
  IconButton, useBreakpointValue 
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display:"block", background: "black" ,borderRadius:"50%", margin:"auto" ,width:"50px" ,height:"50px",position:"absolute" ,zIndex:"1"   }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black" ,borderRadius:"50%", margin:"auto" ,width:"50px" ,height:"50px",position:"absolute" ,zIndex:"1" }}
      onClick={onClick}
    />
  );
}

const Homepage = () => {
  const [data,setData] = React.useState([])
  useEffect(() => {
    axios.get("https://next-backend-orpin.vercel.app/cloths").then((response) => {
     console.log("res",response.data)
     setData(response.data)
    });
  }, []);
   const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow :  <SampleNextArrow /> ,
    prevArrow : <SamplePrevArrow /> ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          nextArrow : <SampleNextArrow />,
          prevArrow : <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow : <SampleNextArrow />,
          prevArrow : <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow : <SampleNextArrow />,
          prevArrow : <SamplePrevArrow />,
        }
      }
    ]
  };
  return (
    <div  style={{ textAlign: "center" }}>
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

      <HStack
        justifyContent={"space-evenly"}
        direction={["row", "row", "column", "column"]}
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
              <Link>
                <CardBody
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
        <Box>
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
      </HStack>

      <HStack backgroundColor="#f0f1f7" marginLeft="40px" marginTop="50px">
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
            <HStack gap="20px">
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
            </HStack>
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
      </HStack>

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
        <Box>
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
        <HStack justifyContent="space-evenly">
          <VStack>
            <Box
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
            <Box
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
            <Box
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
            <Box
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
            <Box
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
            <Box
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
        </HStack>
      </VStack>

      <HStack mt="70px" justifyContent="space-evenly">
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

      <Box mt="70px">
        <VStack>
          <Box>
            <Text marginRight="800px"  mb="50px"
            fontFamily="oswald, serif"
            fontSize="33px"
            fontWeight="normal"
            color="#2e2c38">
            NEW Layered Holiday Collection
            </Text>
          </Box>
          <HStack>
            <Box><Image width="400px" height="400px"  src="https://img.shop.com/Image/homepage/layered-usa-can-106765-holiday-collection-22-edit-banner-BGSQ1671028134306.jpg" /></Box>
            <Box className="slider">
           
       

  </Box>
          </HStack>
        </VStack>
      </Box>
    </div>
  );
};

export default Homepage;














