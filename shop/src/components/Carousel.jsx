import React from "react";
import { Box, IconButton, useBreakpointValue,Button,Icon } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import {  BiRightArrowAlt } from "react-icons/bi";
import {  AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
import { AiFillStar } from 'react-icons/ai'
// And react-slick as our Carousel Lib
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { AiFillDollarCircle } from "react-icons/ai";
import { setItem } from "../utility/localStorage";
import { useNavigate } from "react-router";
import {
  Text,
  Card,
  CardBody,
  Link,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";


// Settings for the slider
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
};




export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);
  const navigate=useNavigate();
  const handleClick=(item)=>{
    setItem("singleproduct",item)
  navigate("/jewelery/singleproduct")
}

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const [data, setData] = useState([]);
  // const navigate=useNavigate();

  //   const handleClick=(item)=>{
  //       setItem("singleproduct",item)
  //     navigate("/clothes/singleproduct")
  //  }
  useEffect(() => {
    axios
      .get("https://next-backend-orpin.vercel.app/jewelery")
      .then((response) => {
        console.log("res", response.data);
        setData(response.data);
      });
  }, []);

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"80%"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
    
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >  
   <Button   backgroundColor={"blue.300"}><AiFillCaretLeft color="black" /></Button>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
     <Button   backgroundColor={"blue.300"}><AiFillCaretRight color="black" /></Button>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((el, index) => (
          <Card cursor="pointer" onClick={()=>handleClick(el)} height="460px"  maxW="sm">
            <CardBody>
              <Image
                id="hov"
                ml="20px"
                width="250px"
                height="200px"
                src={el.image1}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack spacing="4">
                <Text noOfLines={[1]} fontWeight="bold" size="xs">
                  {el.title}
                </Text>
                <Text fontWeight="bold" fontSize="lg">
                  ${el.price}
                </Text>
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

                <Text ml="30px" textAlign="center" fontSize="lg">
                  <Flex ml="80px">
                    sold-by - <Text fontWeight="bold">{el.soldby}</Text>
                  </Flex>
                </Text>
                <Box>
             
                  <Flex marginLeft="80px" textAlign="bottom">
                    <Text mr="5px">$1.00/2</Text>
                    <AiFillDollarCircle
                      mr="5px"
                      mt="2px"
                      width="30px"
                      height="30px"
                      color="teal"
                    />
                    <Text ml="5px">Cashback</Text>
                  </Flex>
                </Box>
                <Text color="teal" mb="30px">Free shipping with $99 orders</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

// display: -webkit-box;
// -webkit-line-clamp: 2;
// -webkit-box-orient: vertical;
// overflow: hidden;
// text-overflow: ellipsis;
// text-align: left;
// margin: 0px;
