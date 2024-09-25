import {
  MDBBtn,
  MDBCard,
  MDBRipple,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge,
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import { ProjectData } from './ProjectData';
import ProjectModal from './ProjectModal';

const data = ProjectData?.slice(0, 3);

const cardStyle = {
  width: '20rem',
  height: '28rem',
};

const cardImgMask = {
  backgroundColor: 'rgba(251, 251, 251, 0.15)',
};

const cardImgHeight = {
  height: '100%',
};

const Projects = () => {
  const [projectModal, setProjectModal] = useState(false);

  const toggleShowProject = () => setProjectModal(!projectModal);

  return (
    <section id='projects' className='bg-dark bg-gradient bg-opacity-25 pt-5'>
      <MDBContainer fluid className='m-0 p-3 vstack gap-4 gx-0'>
        <AttentionSeeker effect='headShake'>
          <MDBTypography variant='h3' className='text-center mb-5'>
            Projects
          </MDBTypography>
        </AttentionSeeker>

        <MDBContainer fluid className='gx-0 m-0 p-3'>
          <MDBRow className='gx-0 justify-content-center gap-lg-0 gap-md-4 gap-3 pb-5'>
            {data?.map((project, i) => {
              const {
                projectID,
                projectName,
                projectDesc,
                techUsed,
                repoLink,
                liveLink,
                imageID,
                imageURL,
              } = project;

              return (
                <MDBCol lg={4} md={5} sm={4} className='col-12' key={i + 1}>
                  <Slide direction='down' duration={1250} triggerOnce>
                    {/* CARD */}
                    <MDBCard
                      className='m-auto'
                      style={cardStyle}
                      key={projectID}>
                      {/* CARD IMAGE */}
                      <MDBRipple
                        rippleColor='light'
                        rippleTag={'div'}
                        rippleCentered
                        rippleDuration={3000}
                        rippleRadius={200}
                        className='bg-image hover-overlay hover-zoom shadow-3-strong'
                        style={cardImgHeight}>
                        <MDBCardImage
                          src={imageURL}
                          fluid
                          alt={`project_image_${imageID}`}
                          style={cardImgHeight}
                          loading='lazy'
                        />
                        <a href='#!'>
                          <div className='mask' style={cardImgMask}></div>
                        </a>
                      </MDBRipple>
                      {/* CARD BODY */}
                      <MDBCardBody className='text-center vstack gap-4'>
                        <MDBCardTitle tag={'h5'} className='mb-0'>
                          {projectName}
                        </MDBCardTitle>

                        <MDBCardText tag={'p'} className='mb-0'>
                          {projectDesc}
                        </MDBCardText>

                        {/* BADGE */}
                        <MDBContainer className='hstack justify-content-center flex-wrap gap-2 gx-0'>
                          {techUsed.map((tech, n) => {
                            return (
                              <MDBBadge
                                color='info'
                                light
                                tag={'span'}
                                role='button'
                                key={n}>
                                {tech}
                              </MDBBadge>
                            );
                          })}
                        </MDBContainer>
                        {/* BUTTONS */}
                        <MDBContainer className='hstack justify-content-center gap-4 gx-0'>
                          <MDBBtn
                            tag={'a'}
                            rippleColor='light'
                            rippleCentered
                            rippleDuration={350}
                            rippleRadius={75}
                            href={repoLink}
                            className='btn btn-primary mb-0'
                            target={'_blank'}
                            rel={'noreferrer'}>
                            <MDBIcon
                              fab
                              iconType='brands'
                              icon='github'
                              size='lg'
                              className='me-1'></MDBIcon>
                            Github
                          </MDBBtn>

                          <MDBBtn
                            tag={'a'}
                            rippleColor='light'
                            rippleCentered
                            rippleDuration={350}
                            rippleRadius={75}
                            href={liveLink}
                            className='btn btn-primary'
                            target={'_blank'}
                            rel={'noreferrer'}>
                            <MDBIcon
                              fas
                              iconType='solid'
                              icon='link'
                              size='lg'
                              className='me-1'></MDBIcon>
                            Live
                          </MDBBtn>
                        </MDBContainer>
                      </MDBCardBody>
                    </MDBCard>
                  </Slide>
                </MDBCol>
              );
            })}
            {/* LOOP END */}
          </MDBRow>
          <MDBContainer className='hstack justify-content-center gap-3 gx-0 p-5'>
            <AttentionSeeker effect='swing'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'
                onClick={toggleShowProject}>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='layer-group'
                    animate='fade'
                  />
                </MDBTypography>
                See more
              </MDBBtn>
            </AttentionSeeker>

            <ProjectModal
              projectModal={projectModal}
              setProjectModal={setProjectModal}
              toggleShowProject={toggleShowProject}
            />
          </MDBContainer>
        </MDBContainer>
      </MDBContainer>
    </section>
  );
};

export default Projects;
