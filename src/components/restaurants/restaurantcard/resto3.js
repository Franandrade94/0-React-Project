import React, { useState } from "react";
import "./restocard.css";
import Img1 from '../../../assets/images/restaurants/1.png';

const RestoCard3 = () => {
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
                <p style={{ color: '#ffb700' }}>{restaurant.name}</p>
                <p>{restaurant.especial}</p>
                <p style={{ color: '#ffb700' }}>{restaurant.ubication}</p>
            </div>}
        </div>
    );
};

export default RestoCard3;
