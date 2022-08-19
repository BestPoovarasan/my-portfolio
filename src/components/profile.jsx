import React from "react";
import {
  MDBRipple,
  MDBBtn,
  MDBCardImage,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Profile() {
  return (
    <MDBContainer id="profiles">
      <h1 className="text-center mt-5 p-4 st">Profile</h1>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center gap-3 mt-3">
        <div style={{ maxWidth: "500px" }}>
          <div className="d-flex justify-content-center align-items-center p-3 gap-3 profileicon">
          <MDBCardImage
              style={{ maxWidth: "120px", maxWidth: "120px" }} 
              src="./img/github.svg" alt="github" />
            <MDBBtn href="https://github.com/BestPoovarasan" target="_blank">Github</MDBBtn>
          </div>
        </div>
        <div style={{ maxWidth: "500px" }}>
          <div className="d-flex justify-content-around align-items-center p-3 gap-3 profileicon">
            <MDBCardImage
              style={{ maxWidth: "120px", maxWidth: "120px" }}
              src="./img/netlify.svg"
              alt="netlify"
            />
            <MDBBtn href="https://app.netlify.com/teams/bestpoovarasan/overview" target="_blank" >Netlify</MDBBtn>
          </div>
        </div>
        <div style={{ maxWidth: "500px" }}>
          <div className="d-flex justify-content-around align-items-center p-3 gap-3 profileicon">
            <MDBCardImage
              style={{ maxWidth: "120px", maxWidth: "120px" }}
              src="./img/linkedin.svg"
              alt="linkedin"
            />
            <MDBBtn href="https://www.linkedin.com/in/best-poovarasan-3732a6169/" target="_blank" >linkedin</MDBBtn>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}
