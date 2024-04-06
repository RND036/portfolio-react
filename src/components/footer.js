import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export const Footer =() =>{
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>

        <section className='mb-4'>
          <p>
          Proudly created with dedication and a passion for innovation. This portfolio is a living showcase of my expertise in React, Java, JavaScript, and .NET, illustrating my journey through the world of software development. Thank you for visiting.
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright Ravishka Dissanayaka
      </div>
    </MDBFooter>
  );
}