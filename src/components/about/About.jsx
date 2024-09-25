import React, { useState } from 'react';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import MyResume from '../../assets/images/lavish_resume.avif';
import CertificateModal from './CertificateModal';
import EducationModal from './EducationModal';

import { Zoom, Slide, Fade } from 'react-awesome-reveal';
// import AchivementModal from './AchivementModal';

const About = () => {
  const [certificateModal, setCertificateModal] = useState(false);
  const [educationModal, setEducationModal] = useState(false);
  const [achivementModal, setAchivementModal] = useState(false);

  const toggleShowCertificate = () => setCertificateModal(!certificateModal);
  const toggleShowEducation = () => setEducationModal(!educationModal);
  const toggleShowAchivement = () => setAchivementModal(!achivementModal);

  return (
    <>
      <section id='about' className='bg-dark bg-gradient bg-opacity-25'>
        <MDBContainer
          fluid
          className='vstack align-items-center gap-3 p-3 gx-0'>
          {/* <!-- Resume file --> */}
          <Zoom triggerOnce>
            <MDBRow className='gx-0 pt-5'>
              <MDBCol lg={4} className='row shadow-3-soft m-auto gx-0'>
                <img
                  className=''
                  src={MyResume}
                  alt=''
                  loading='lazy'
                  // oncontextMenu={`{return false}`}
                  fetchpriority='auto'
                />
              </MDBCol>
            </MDBRow>
          </Zoom>
          {/* <!-- Resume link drive --> */}
          <MDBContainer className='hstack justify-content-center p-5'>
            <Slide cascade direction='down'>
              <a
                href='https://drive.google.com/file/d/10zIrcYZ1qUlIGwu7x23jmoru8MoDGvXL/view'
                className='btn btn-lg btn-rounded btn-dark'
                target='_blank'
                rel='noreferrer'>
                <MDBTypography tag={'span'}>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='download'
                    animate='bounce'
                    className='mb-0 me-2'
                  />
                  Resume
                </MDBTypography>
              </a>
            </Slide>
          </MDBContainer>

          {/* <!-- About me --> */}
          <MDBRow className='gx-0'>
            <MDBCol lg={8} className='m-auto'>
              <Fade delay={1e3} cascade damping={1e-1} triggerOnce>
                <MDBTypography tag={'p'} className='p-5 fs-5 txt'>
                Working as a Corporate Mentor with total 10+ years of comprehensive experience in corporate training, I have had the privilege
to train and mentor lakhs of individuals. My expertise lies in driving technological advancements by imparting knowledge
and skills to help professionals adapt to the rapidly changing tech landscape.
Throughout my career, I've been instrumental in shaping the careers of numerous professionals, guiding them towards
excellence in their respective fields. My training modules are designed to be both insightful and practical, focusing on
hands-on experience to ensure effective learning.
In addition to corporate training, I have successfully trained trainees for boot camp courses. These courses are intensive
and designed to equip participants with the skills required to develop full-stack applications. I take pride in my ability to
simplify complex concepts, making them accessible and easy to understand for learners at all levels.

                </MDBTypography>
              </Fade>
            </MDBCol>
          </MDBRow>

          {/* <!-- Hidden items --> */}
          <MDBContainer className='hstack flex-wrap justify-content-center gap-3 gx-0 pb-5'>
            {/* <!-- Certificates --> */}
            <Slide cascade direction='left'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'
                onClick={toggleShowCertificate}>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='certificate'
                    animate='spin'
                  />
                </MDBTypography>
                Certificates
              </MDBBtn>
            </Slide>

            <CertificateModal
              certificateModal={certificateModal}
              setCertificateModal={setCertificateModal}
              toggleShowCertificate={toggleShowCertificate}
            />
            {/* <!-- Education --> */}
            <Slide cascade direction='up'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'
                onClick={toggleShowEducation}>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='graduation-cap'
                    animate='beat'
                  />
                </MDBTypography>
               Education & Job
              </MDBBtn>
            </Slide>
            <EducationModal
              educationModal={educationModal}
              setEducationModal={setEducationModal}
              toggleShowEducation={toggleShowEducation}
            />
            {/* <!-- Achivements --> */}
            <Slide cascade direction='up'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'
                onClick={toggleShowAchivement}>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon fab iconType='solid' icon='award' animate='shake' />
                </MDBTypography>
                Achievements
              </MDBBtn>
            </Slide>
            {/* <AchivementModal
              achivementModal={achivementModal}
              setAchivementModal={setAchivementModal}
              toggleShowAchivement={toggleShowAchivement}
            /> */}

            {/* <!-- Interests --> */}
            <Slide cascade direction='right'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='wand-magic-sparkles'
                    animate='beat-fade'
                  />
                </MDBTypography>
                Interests
              </MDBBtn>
            </Slide>
          </MDBContainer>
        </MDBContainer>
      </section>
    </>
  );
};

export default About;
