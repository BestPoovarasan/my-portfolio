import React from 'react';
import {MDBRipple, MDBTypography, MDBContainer,} from 'mdb-react-ui-kit';

export default function About() {
  return (
<MDBContainer id="about">
<div className="d-flex flex-wrap flex-column justify-content-evenly align-items-center gap-3 mt-3">
<h1 className='text-center mt-5 p-4 st'>About</h1>
<img
      src='./img/about.png'
      className='img-fluid'
      alt=''
      style={{ maxWidth: '150px' }}
    />
     <figure className='text-center'>
      
        <p>I am an Electrical & Electronic Engineer & full Stack Developer</p>
        <p>I good website developer & A lot of projects</p>
        <p>created And Publishing on my GitHub & Netlify profiles..</p>
      
    </figure>
    </div>
    </MDBContainer>
  );
}