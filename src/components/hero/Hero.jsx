import React from 'react';
import Typewriter from 'typewriter-effect';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import DevPhoto from '../../assets/images/devphoto.jpg';
import DevPhotoHD from '../../assets/images/devphoto.webp';

import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';

const heroBgImage = {
  backgroundImage:
    'url("https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=800")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  transition: 'all 1s ease-in-out',
};

const Hero = () => {
  return (
    <section id='hero' className=''>
      <MDBContainer
        fluid
        className='bg-image d-flex align-items-center gx-0'
        loading='lazy'
        fetchpriority='high'
        style={heroBgImage}>
        <MDBContainer fluid className='align-items-center p-4 gx-0'>
          <MDBRow className='gx-0 align-items-center'>
            {/* <!-- Left side --> */}
            <MDBCol md={8} className='p-5'>
              <MDBContainer className='gx-0'>
                <Slide direction='left' delay={250} triggerOnce>
                  <MDBTypography
                    variant='h2'
                    color='light'
                    className='fs-3 mb-0'>
                    Hi...!
                  </MDBTypography>
                </Slide>
                <Slide direction='left' delay={500} triggerOnce>
                  <MDBTypography
                    variant='h1'
                    color='light'
                    className='fs-1 mb-0'>
                    I'm&nbsp;<span className='text-info'>Lavish</span>
                    &nbsp;Jain
                  </MDBTypography>
                </Slide>

                <MDBTypography tag={'h5'} color='light' className='fs-4'>
                  <Typewriter
                    options={{
                      strings: [
                        '',
                        'Fullstack Developer Mentor',
                        'Frontend Developer',
                        'Web Developer',
                        'Corporate Trainer'
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </MDBTypography>
              </MDBContainer>
              <MDBContainer className='d-flex gap-3 gx-0 justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center'>
                <Fade direction='up' delay={250} cascade>
                  <a
                    href='https://www.linkedin.com/in/lavishjain36/'
                    className='text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'>
                    <MDBIcon fab iconType='brands' icon='linkedin' size='2x' />
                  </a>
                </Fade>

                <Fade delay={300} direction='up' cascade>
                  <a
                    href='https://github.com/lavishjain36'
                    className='text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'>
                    <MDBIcon fab iconType='brands' icon='github' size='2x' />
                  </a>
                </Fade>
              </MDBContainer>
            </MDBCol>
            {/* <!-- Right side --> */}
            <MDBCol md={4}>
              <Zoom triggerOnce>
                <MDBRow className='gx-0 justify-content-center'>
                  <img
                    className='col-lg-12 col-md-10 col-sm-6 col-6 p-2 img-fluid rounded-circle'
                    src={DevPhotoHD}
                    alt='devphoto'
                    loading='lazy'
                    style={{
                      transition: 'all .5s ease-in-out',
                    }}
                    // fetchpriority='high'
                    srcSet={`
                      ${DevPhoto} 400w,
                      ${DevPhoto} 600w,
                      ${DevPhotoHD} 800w,
                      ${DevPhotoHD} 1200w
                    `}
                  />
                </MDBRow>
              </Zoom>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </section>
  );
};

export default Hero;
