import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './landing.css'; 
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

import IMG1 from "../../assets/images/Home-Chef-back/1.png"

const Landing = () => {

    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0);
        }
      }, []);


  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

   const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
            <div className='Card-size'>
            <img src={IMG1} alt="Imagen 1" />
            </div>
            <div className='Card-size'>
            <img src={IMG1}  alt="Imagen 2" />
            </div>
            <div className='Card-size'>
            <img src={IMG1}  alt="Imagen 3" />
            </div>
            <div className='Card-size'>
            <img src={IMG1}  alt="Imagen 4" />
            </div>
        </Slider>
        <div className="home-redes-container">
            <div className='home-redes'>
                <AiFillInstagram style={{ fontSize: '35px'}}/>
            </div>
            <div className='home-redes'>
                <BsLinkedin style={{ fontSize: '20px'}}/> 
            </div>
            <div className='home-redes'>
                <FaYoutube style={{ fontSize: '35px'}}/>
            </div>
            <div className='home-redes'>
                <BsTwitterX style={{ fontSize: '20px'}}/>
            </div>
        </div>
        <div className="arrows-container">
            <button className="prev-arrow" onClick={goToPrevious}>
                <IoIosArrowBack style={{ fontSize: '35px', color:'rgb(255, 183, 0)' }}/>
            </button>
            <button className="next-arrow" onClick={goToNext}>
                <IoIosArrowForward style={{ fontSize: '35px', color:'rgb(255, 183, 0)' }}/>
            </button>
        </div>
    </div>
  );
};

export default Landing;
