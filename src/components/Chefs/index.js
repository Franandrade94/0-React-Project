import "./chefs.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import Chef1 from './chefsCard/chef1';
import Chef2 from './chefsCard/chef2';
import Chef3 from './chefsCard/chef3';
import Chef4 from './chefsCard/chef4';
import Chef5 from './chefsCard/chef5';
import Rightarrow from "../../assets/images/rightarrow.png";
import Leftarrow from "../../assets/images/leftarrow.png";




const Chefs = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: <img
    alt=""
    src={Leftarrow}
/>,
    nextArrow: <img
        alt=""
        src={Rightarrow}
    />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="ChefPage"  className="Chefs-Section">
        <div className="Chefs-container">
            <div className="Chefs-title">
                <h2>Chefs</h2>
            </div>
            <div className="Slider-container">
                <Slider {...sliderSettings}>
                    <div className="ChefsCards">
                        <Chef1/>
                    </div>
                    <div className="ChefsCards">
                        <Chef2/>
                    </div>
                    <div className="ChefsCards">
                        <Chef3/>
                    </div>
                    <div className="ChefsCards">
                        <Chef4/>
                    </div>
                    <div className="ChefsCards">
                        <Chef5/>
                    </div>
                </Slider>

            </div>
            <button className="Chefs-cards-button">Ver todos</button>
        </div>
    </div>
);
};

export default Chefs;