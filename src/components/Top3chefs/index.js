import React from 'react';
import './top3chefs.css';
import Chef1 from '../../assets/images/chefs/3.png';
import Chef2 from '../../assets/images/chefs/1.png';
import Chef3 from '../../assets/images/chefs/5.png';
import Top1 from '../../assets/images/Top3Chefs/1.png';
import Top2 from '../../assets/images/Top3Chefs/2.png';
import Top3 from '../../assets/images/Top3Chefs/3.png';




const TopChefs = () => {
    const chefs = [
        {
            name: '',
            image: Chef1,
            rating: '1',
        },
        {
            name: '',
            image: Chef2,
            rating: '2',
        },
        {
            name: '',
            image: Chef3,
            rating: '3',
        },
    ];


    const topImages = {
        '1': Top1,
        '2': Top2,
        '3': Top3,
    };

    return (
        <div className="top-chefs-component">

            <h2>Top 3 Chefs estelares</h2>
            <div className='top-chefs-container'>
                {chefs.map((chef, index) => (
                    <div key={index} className={`chef-rank-${chef.rating}`}>
                        <img className={`TopChefrank-img-${chef.rating}`} src={topImages[chef.rating]} alt={`Top ${chef.rating}`} />
                        <img src={chef.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopChefs;
