
import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBTypography,
  MDBContainer
} from "mdb-react-ui-kit";

export default function Skills() {
  return (
    <>
    
    <MDBContainer  id="skills">
    <h1 className='text-center mt-5 p-3 st' data-spy="scroll" data-offset="100">Skills & Tools ‍💫</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center h-100 gap-3 mt-5">
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/javascript.svg"
              className="img-fluid " width="100"
              alt="..."
            />

            <MDBCardTitle className="d-flex flex-wrap justify-content-center align-items-center mb-1">
              JavaScript 
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        {/* html */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/html5.svg"
              className="img-fluid"
              alt="html5"
            />

            <MDBCardTitle className="d-flex flex-wrap justify-content-center align-items-center m-1">
              HTML5
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        {/* css */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/css3.svg"
              className="img-fluid "
              alt="css3"
            />

            <MDBCardTitle className="d-flex flex-wrap justify-content-center align-items-center m-1">
              CSS3
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        {/* bootstrap */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/bootstrap.svg"
              className="img-fluid"
              alt="bootstrap"
            />

            <MDBCardTitle className="d-flex flex-wrap justify-content-center align-items-center m-1">
              Bootstrap
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
{/* materialui */}
<MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/materialui.svg"
              className="img-fluid"
              alt="material Ui"
            />

            <MDBCardTitle className="d-flex flex-wrap justify-content-center align-items-center m-1">
            MUI
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>

        {/* react */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/react.svg"
              className="img-fluid "
              alt="react"
            />

            <MDBCardTitle className="d-flex flex-wrap flex-grow-1 justify-content-center align-items-center m-1">
              ReactJs
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        {/* nodejs */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/nodejs.svg"
              className="img-fluid "
              alt="Node.js"
            />

            <MDBCardTitle className="d-flex flex-wrap flex-grow-1 justify-content-center align-items-center m-1">
            Node.js
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        {/* mongodb */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/mongodb.svg"
              className="img-fluid "
              alt="MongoDB"
            />

            <MDBCardTitle className="d-flex flex-wrap flex-grow-1 justify-content-center align-items-center m-1">
            MongoDB
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        {/* photoshop */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/photoshop.svg"
              className="img-fluid "
              alt="adobe photoshop"
            />

            <MDBCardTitle className="d-flex flex-wrap justify-content-center align-items-center m-1">
            Photoshop
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        {/* illustor */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/illustrator.svg"
              className="img-fluid "
              alt="adobe illustrator"
            />

            <MDBCardTitle className="d-flex flex-wrap flex-grow-1 justify-content-center align-items-center m-1">
            illustrator
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        {/* vscode */}
        <MDBCard
          className="background"
          style={{ width: "150px", height: "160px" }}
          alignment="center"
        >
          <MDBCardBody>
            <img
              src="./img/vscode.svg"
              className="img-fluid "
              alt="vscode"
            />

            <MDBCardTitle className="d-flex flex-wrap flex-grow-1 justify-content-center align-items-center m-1">
            VsCode
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </div>
      </MDBContainer>
    </>
  );
}
