import React from 'react';
import './platos.css';
import Img1 from '../../assets/images/Food/1.png';
import Img2 from '../../assets/images/Food/1.png';
import Img3 from '../../assets/images/Food/3.png';
import Chefimg1 from '../../assets/images/chefs/4.png';
import Chefimg2 from '../../assets/images/chefs/1.png';
import Chefimg3 from '../../assets/images/chefs/3.png';
import Star from './Star';

const Platos = () => {
    const platos = [
        {
            nombre: 'Nombre Plato 1',
            image: Img1,
            rating: '5',
            chef: {
                chefname: "Santiago Martinez",
                chefimage: Chefimg2,
            }
        },
        {
            nombre: 'Nombre Plato 2',
            image: Img2,
            rating: '5',
            chef: {
                chefname: "Valeria Garcia",
                chefimage: Chefimg1,
            }
        },
        {
            nombre: 'Nombre Plato 3',
            image: Img3,
            rating: '4',
            chef: {
                chefname: "Alejandro Herrera",
                chefimage: Chefimg3,
            }
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<Star key={i} filled={i <= parseInt(rating)} />);
        }
        return stars;
    };

    return (
        <div className="plato-container">
            {platos.map((plato, index) => (
                <div className='Image-plato-container' key={index}>
                    <div className="image-wrapper">
                        <img src={plato.image} alt={plato.nombre} />
                        <div className="overlay">
                            <h3 className="plato-nombre">{plato.nombre}</h3>
                            <div className="chef-info">
                                <img className='plato-chef-image' src={plato.chef.chefimage} alt={plato.chef.chefname} />
                                <p>{plato.chef.chefname}</p>
                            </div>
                            <p style={{ color:"rgb(255, 183, 0)", fontSize:'40px'}}>{renderStars(plato.rating)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Platos;
