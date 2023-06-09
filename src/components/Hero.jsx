import React from 'react'
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";


const Hero = () => {
  const {shouldSlide} = useSelector(state => state)
  
  return (
    <div className="my-5 h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel
        slide={shouldSlide}
        // slideInterval={5000} //if you det slideInterval slide will be 'true' by default
    >
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt="..."
        />
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="..."
        />
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="..."
        />
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
        />
        <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
        />
    </Carousel>
    </div>
  )
}

export default Hero