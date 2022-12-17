import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import { useState, useEffect} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { AiFillDollarCircle } from "react-icons/ai";

import {
  Text,

  Card,
  CardBody,
  Link,
  Image,

Stack,
Flex
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

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const [data,setData]=useState([]);
  // const navigate=useNavigate();

//   const handleClick=(item)=>{
//       setItem("singleproduct",item)
//     navigate("/clothes/singleproduct")
//  }
 useEffect(() => {
    axios.get("https://next-backend-orpin.vercel.app/jewelery").then((response) => {
     console.log("res",response.data)
     setData(response.data)
    });
  }, []);

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'80%'}
    
      overflow={'hidden'}>
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
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((el, index) => (
      
<Card height="400px"  border="1px solid black"  maxW='sm'>
  <CardBody>
    <Image ml="20px" width="250px"
    height="200px"
      src={el.image1}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='4'>
      <Text  size='xs'>{el.title}</Text>
      <Text color='blue.600' fontSize='sm'>
          ${el.price}  
      </Text>

      <Text color='blue.600' fontSize='xs'>
        sold-by - {el.soldby}
      </Text> 
      <Flex textAlign="left"><Text>$1.00/2</Text> <AiFillDollarCircle ml="2px" mt="2px" width="20px" color='teal'/> <Text>Cashback</Text> </Flex>
      
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