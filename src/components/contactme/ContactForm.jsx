import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import { Zoom, Slide } from 'react-awesome-reveal';
import ContactSVG from './ContactSVG';

const formStyle = {
  backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)',
  height: '300px',
  transition: 'all 0.5s easy-in',
};

const ContactForm = () => {
  return (
    <section
      id='contact-me'
      className='bg-dark bg-gradient bg-opacity-25 p-lg-5 p-1'>
      <MDBRow className='justify-content-center gx-0'>
        <MDBCol sm={10} md={8} lg={8} className='col-12'>
          <MDBContainer className='gx-0 m-auto'>
            <Slide direction='up' duration={1250} triggerOnce>
              <div className='p-5 bg-image rounded-2' style={formStyle}></div>
            </Slide>

            <MDBCard
              className='mb-5 p-lg-5 p-md-4 p-sm-3 p-3 mx-lg-5 mx-md-5 mx-sm-4 mx-4 shadow-5'
              style={{
                marginTop: '-100px',
                background: 'hsla(0, 0%, 100%, 0.8)',
                backdropFilter: 'blur(30px)',
              }}>
              <Zoom direction='up' duration={1050} triggerOnce>
                <MDBRow className='justify-content-center gx-0'>
                  <MDBCol className='text-center'>
                    <ContactSVG />
                  </MDBCol>
                </MDBRow>
                <MDBCardBody className='text-center p-lg-5 p-md-4 p-sm-3 p-3'>
                  <h2 className='fw-bold mb-5'>Contact Me</h2>

                  <MDBRow>
                    <MDBCol col='6'>
                      <MDBInput
                        wrapperClass='mb-4'
                        label='First name'
                        id='fname'
                        type='text'
                      />
                    </MDBCol>

                    <MDBCol col='6'>
                      <MDBInput
                        wrapperClass='mb-4'
                        label='Last name'
                        id='lname'
                        type='text'
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass='mb-4'
                    label='Email'
                    id='email'
                    type='email'
                  />
                  <MDBTextArea
                    wrapperClass='mb-4'
                    label='Message'
                    id='textAreaExample'
                    rows={4}
                  />

                  <MDBContainer className='gx-0 d-flex justify-content-center mb-4'>
                    {/* <div className='d-flex justify-content-center mb-4'> */}
                    <MDBCheckbox
                      name='check'
                      value=''
                      id='check'
                      label='Send me a copy of this message'
                    />
                    {/* </div> */}
                  </MDBContainer>

                  <MDBContainer className='gx-0 d-flex justify-content-center mb-4'>
                    <MDBBtn className='w-100 mb-4' size='md'>
                      Send message
                    </MDBBtn>
                  </MDBContainer>

                  {/* <div className='text-center'>
            <p>or sign up with:</p>

            <MDBBtn
              tag='a'
              color='none'
              className='mx-3'
              style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size='sm' />
            </MDBBtn>

            <MDBBtn
              tag='a'
              color='none'
              className='mx-3'
              style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size='sm' />
            </MDBBtn>

            <MDBBtn
              tag='a'
              color='none'
              className='mx-3'
              style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size='sm' />
            </MDBBtn>

            <MDBBtn
              tag='a'
              color='none'
              className='mx-3'
              style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size='sm' />
            </MDBBtn>
          </div> */}
                </MDBCardBody>
              </Zoom>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default ContactForm;
