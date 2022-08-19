import React from 'react';
import { MDBCard, MDBCardTitle, MDBRipple, MDBBtn, MDBCardOverlay, MDBCardImage,MDBContainer,} from 'mdb-react-ui-kit';

export default function Projects() {
  return (
<MDBContainer>
<h1 className='text-center p-4 mt-5 st' id="projects">Projects</h1>
<div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3">
<MDBCard style={{ maxWidth: '400px' }} className="probtnbg">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://store-wp.mui.com/wp-content/uploads/2021/12/preview-1.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
        
        <div className="d-flex justify-content-center align-items-center gap-3 m-2">
        <MDBBtn className='sourcecode' href='#'>Source Code</MDBBtn>
        <MDBBtn className='deploy' href='#'>Live Preview</MDBBtn>
        </div>
        </MDBRipple>
    </MDBCard>
<MDBCard style={{ maxWidth: '400px' }} className="probtnbg">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://store-wp.mui.com/wp-content/uploads/2021/11/zone-preview.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
       
        <div className="d-flex justify-content-center align-items-center gap-3 m-2">
        <MDBBtn className='sourcecode' href='#'>Source Code</MDBBtn>
        <MDBBtn className='deploy' href='#'>Live Preview</MDBBtn>
        </div>
        </MDBRipple>
    </MDBCard>
<MDBCard style={{ maxWidth: '400px' }} className="probtnbg">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://store-wp.mui.com/wp-content/uploads/2021/09/berry-open-source.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
        
        <div className="d-flex justify-content-center align-items-center gap-3 m-2">
        <MDBBtn className='sourcecode' href='#'>Source Code</MDBBtn>
        <MDBBtn className='deploy' href='#'>Live Preview</MDBBtn>
        </div>
        </MDBRipple>
    </MDBCard>
<MDBCard style={{ maxWidth: '400px' }} className="probtnbg">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://store-wp.mui.com/wp-content/uploads/2021/12/preview-1.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
        
        <div className="d-flex justify-content-center align-items-center gap-3 m-2">
        <MDBBtn className='sourcecode' href='#'>Source Code</MDBBtn>
        <MDBBtn className='deploy' href='#'>Live Preview</MDBBtn>
        </div>
        </MDBRipple>
    </MDBCard>
<MDBCard style={{ maxWidth: '400px' }} className="probtnbg">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://store-wp.mui.com/wp-content/uploads/2021/09/berry-open-source.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
        
        <div className="d-flex justify-content-center align-items-center gap-3 m-2">
        <MDBBtn className='sourcecode' href='#'>Source Code</MDBBtn>
        <MDBBtn className='deploy' href='#'>Live Preview</MDBBtn>
        </div>
        </MDBRipple>
    </MDBCard>
<MDBCard style={{ maxWidth: '400px' }} className="probtnbg">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://store-wp.mui.com/wp-content/uploads/2021/11/zone-preview.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
        
        <div className="d-flex justify-content-center align-items-center gap-3 m-2">
        <MDBBtn className='sourcecode' href='#'>Source Code</MDBBtn>
        <MDBBtn className='deploy' href='#'>Live Preview</MDBBtn>
        </div>
        </MDBRipple>
    </MDBCard>
    
    </div>
    </MDBContainer>
  );
}