import React from 'react';
import { MDBBtn, MDBIcon, MDBRipple, MDBContainer, } from "mdb-react-ui-kit";
export default function Head1() {
  return (
    <>
    <MDBContainer id="head">
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-3">
        <div className="headertitle">
          <h1 className="fontaustere">Hello,👋 I'm Poovarasan R.</h1>
          <h2 className="fontaustere">Full Stack Developer</h2>
          <p className="fontaustere">I am a fullstack developer from Tamilnadu, India. </p>
          <MDBBtn color="success" href="https://drive.google.com/file/d/1Pe-haVu0XJLWSM29k77PRLu8wcKotdrx/view?usp=sharing" target="_blank">
            <MDBIcon className="me-2" fas icon="download" />
            Download CV
          </MDBBtn>
        </div>
        <MDBRipple rippleTag='a'>
        <img
          alt="example"
          className="img-fluid headerimg"
          src="./img/Web Developer header.svg"
        />
        </MDBRipple>
      </div>
      </MDBContainer>
    </>
  );
}
