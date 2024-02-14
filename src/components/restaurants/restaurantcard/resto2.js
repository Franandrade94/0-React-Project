import React, { useState } from "react";
import "./restocard.css";
import Img1 from '../../../assets/images/restaurants/2.png';

const RestoCard2 = () => {
    const [hovered, setHovered] = useState(false);
    const restaurant = {
        name: 'Nombre',
        especial: 'Especialidad',
        ubication: 'Ubication',
        image: Img1,
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="restocard-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img
                src={restaurant.image}
                alt={restaurant.name}
                className={hovered ? "blurred" : ""}
            />
            {hovered && <div className="resto-name">
                <h5 style={{ color: '#ffb700' }}>{restaurant.name}</h5>
                <h5>{restaurant.especial}</h5>
                <h6 style={{ color: '#ffb700' }}>{restaurant.ubication}</h6>
            </div>}
        </div>
    );
};

export default RestoCard2;
