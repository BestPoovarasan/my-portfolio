import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn, MDBContainer,  MDBTextArea,
} from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <>
    <MDBContainer id="contact">
    <hr></hr>
<div className="d-flex flex-wrap justify-content-around align-items-center gap-3 m-5">
    <img
      src='./img/contact.svg'
      className='img-fluid'
      alt=''
      style={{ maxWidth: '600px' }}
    />
    <form className='p-3 contactform'>
    <h3 className='text-center contactext '>Contact us</h3>
      <MDBInput id='ftypeText' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='typeEmail' wrapperClass='mb-4' label='Email address' />
      <MDBTextArea wrapperClass='mb-4' label='Message' id='textAreaExample' rows={4} />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block>
        Send
      </MDBBtn>
    </form>
    </div>
    </MDBContainer>
    </>
  );
}