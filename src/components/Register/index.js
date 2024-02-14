import React, { useEffect} from 'react';
import './register.css'
import Img1 from '../../assets/images/Register/1.png'

const Register = () => {

    

  return (
    <div className="register-container">
        <div className='Register-button-container'>
            <div className="button-wrapper">   
                <button className='register-button'>
                    chef
                </button>

                <button className='register-button'>
                    usuario
                </button>
            </div>
            <div>
                <p>
                    Registrate y forma parte de la revolucion de la industria culinaria
                </p>
            </div>
        </div>

        <div className='Image-register-container'>
            <img
                src={ Img1 }
                alt=''
            />
        </div>
    </div>
  );
};

export default Register;
