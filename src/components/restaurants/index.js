import "./restaurants.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestoCard1 from "./restaurantcard/resto1";
import RestoCard2 from "./restaurantcard/resto2";
import RestoCard3 from "./restaurantcard/resto3";
import Rightarrow from "../../assets/images/rightarrow.png";
import Leftarrow from "../../assets/images/leftarrow.png";




const Restaurants = () => {
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
    slidesToShow: 3,
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
    <div className="Resto-Section">
        <div className="Resto-container">
            <div className="Resto-title">
                <h2>Restaurantes</h2>
            </div>
            <div className="Resto-Slider-container">
                <Slider {...sliderSettings}>
                    <div className="RestoCards">
                        <RestoCard1/>
                    </div>
                    <div className="RestoCards">
                        <RestoCard2/>
                    </div>
                    <div className="RestoCards">
                        <RestoCard3/>
                    </div>
                    <div className="RestoCards">
                        <RestoCard2/>
                    </div>

                </Slider>

            </div>
            <button className="Resto-cards-button">Ver todos</button>
        </div>
    </div>
);
};

export default Restaurants;