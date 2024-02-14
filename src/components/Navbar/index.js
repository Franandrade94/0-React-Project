import Container from 'react-bootstrap/Container';
import './navbar.css'
import React, { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GoSearch } from "react-icons/go";

function _NavBar() {


  const [menuOpen, setMenuOpen] = useState(false);

  const [ clicked, setClicked ] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");

  //---------- NAVBAR SECTION INDICATOR ----------

  useEffect(() => {
    
    const handleScroll = () => {
      
      const homeSection = document.getElementById("Home");
      const chefSection = document.getElementById("ChefPage");
      const restaurantSection = document.getElementById("RestaurantPage");

      const scrollY = window.scrollY;

      if (
        scrollY >= homeSection.offsetTop &&
        scrollY < chefSection.offsetTop
      ){
        setCurrentSection("Home");
      } else if (
        scrollY >= chefSection.offsetTop &&
        scrollY < restaurantSection.offsetTop 
      ){
        setCurrentSection("ChefPage");
      } else if (
        scrollY >= restaurantSection.offsetTop
      ){
        setCurrentSection("RestaurantPage");
      }
        
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);


  //---------- CLOSE MENU ON CLICK OUTSIDE ----------

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        document.documentElement.clientWidth <= 991
      ) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  //---------- SCROLL TO ----------

  const handleClick = () => {
    setClicked(!clicked)
  }

  const scrollToHome = () => {
    scroll.scrollTo(document.getElementById("Home").offsetTop);
  };

  const scrollToChefs = () => {
    scroll.scrollTo(document.getElementById("ChefPage").offsetTop);
  }

  const scrollToRestaurants = () => {
    scroll.scrollTo(document.getElementById("RestaurantPage").offsetTop);
  }

  

  const handleClickHome = () => {
    scrollToHome();
    setMenuOpen(false);
  }

  const handleClickChefs = () => {
    scrollToChefs();
    setMenuOpen(false);
  };

  const handleClickRestaurants = () => {
    scrollToRestaurants();
    setMenuOpen(false);
  }

  


  return (
    <Navbar bg="light" expand="lg" className='navbar-custom' ref={navbarRef}>
      <Container>
        <Navbar.Toggle onClick={() => setMenuOpen(!menuOpen)} aria-controls="basic-navbar-nav" className='Toggle'/>
        <Navbar.Collapse className='navbar-collapse' in={menuOpen} id="basic-navbar-nav" expanded={menuOpen}>
          <Nav className="me-auto" style={{ fontSize:'75%'  }}>

          <Nav.Link 
              href="#home" 
              onClick={handleClickHome}
              style={{ 
                color: '#ffb700', 
              }} 
              className='Solution-Drop'
              aria-controls="basic-navbar-nav"
              >
                <p className={ currentSection === "Home" ? "current" : "" }>Home</p>
            </Nav.Link> 
           
            <Nav.Link 
              href="#home" 
              onClick={handleClickChefs}
              style={{ 
                color: '#ffb700', 
              }} 
              className="product-link"
              aria-controls="basic-navbar-nav"
              >
                <p className={ currentSection === "ChefPage" ? "current" : "" }>Chef</p>
            </Nav.Link>
            
            <Nav.Link 
              href="#home" 
              onClick={handleClickRestaurants}
              style={{ 
                color: '#ffb700', 
              }} 
              className='Solution-Drop'
              aria-controls="basic-navbar-nav"
              >
                <p className={ currentSection === "RestaurantPage" ? "current" : "" }>Restaurantes</p>
            </Nav.Link>
                
            <select id="busqueda" className='select-busqueda'>
              <option value="opcion1">busqueda</option>
            </select>
          
          </Nav>

          <div className='Logo-Nav'>
            <h1>LOGO</h1>
          </div>

          <div className='button-nav'>
            <GoSearch style={{ marginRight: '5%', color: '#ffb700', fontSize: '30px', marginTop: '1%' }}/>
            <button className='contact-button'>Iniciar sesion</button>
            <button className='contact-button'>Crear cuenta</button>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default _NavBar;