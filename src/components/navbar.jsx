import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import { BrowserRouter, HashRouter, } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
export default function Navbar() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
  return (
    <>

      <MDBNavbar sticky light className="navtop" expand="lg" >
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" color='primary' fas />
          </MDBNavbarToggler>
          <h1 className="poovarasan" >Poovarasan</h1>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className="d-flex gap-2 justify-content-md-end align-items-start">
              <Link to="head" spy={true} smooth={true} offset={-100} duration={500}><MDBBtn id="navbtn" color='primary'>
                <MDBIcon className="me-2" fas icon="home" />
                Home </MDBBtn></Link>

              <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
              <MDBBtn id="navbtn" color='primary'><MDBIcon className="me-2" fas icon="star" />Skills</MDBBtn>
              </Link>

              <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                <MDBBtn id="navbtn" color='primary'><MDBIcon className="me-2" fas icon="project-diagram" />Projects</MDBBtn>
              </Link>

              <Link to="profiles" spy={true} smooth={true} offset={-100} duration={500}>
                <MDBBtn id="navbtn" color='primary'><MDBIcon className="me-2" fas icon="user-circle" /> Profile</MDBBtn>
              </Link>

              <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}> 
              <MDBBtn id="navbtn" color='primary'><MDBIcon className="me-2" fas icon="address-book" /> Contact</MDBBtn>
              </Link>

              <Link to="about" spy={true} smooth={true} offset={-100} duration={500}> 
              <MDBBtn id="navbtn" color='primary'><MDBIcon className="me-2" fas icon="id-card" /> About</MDBBtn>
              </Link>
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </>
  );
}
