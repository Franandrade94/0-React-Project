import React, { useState } from "react";
import "./chefscard.css";
import Img1 from '../../../assets/images/chefs/1.png';

const ChefCard1 = () => {
    const [hovered, setHovered] = useState(false);
    const chef = {
        name: 'Santiago Martínez',
        image: Img1,
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="chefcard-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img
                src={chef.image}
                alt={chef.name}
                className={hovered ? "blurred" : ""}
            />
            {hovered && <div className="chef-name">{chef.name}</div>}
        </div>
    );
};

export default ChefCard1;
