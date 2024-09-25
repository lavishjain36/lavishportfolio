import React from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBRipple,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBBadge,
} from 'mdb-react-ui-kit';

import { Slide } from 'react-awesome-reveal';
import { ProjectData } from './ProjectData';
const data = ProjectData?.slice(3).reverse();

const cardHeight = {
  width: '20rem',
  height: '28rem',
};
const imageMask = {
  backgroundColor: 'rgba(251, 251, 251, 0.15)',
};

const imageHeight = {
  height: '11rem',
};

const ProjectModal = ({ projectModal, setProjectModal, toggleShowProject }) => {
  return (
    <MDBModal
      tag={'div'}
      leaveHiddenModal
      animationDirection='top'
      staticBackdrop
      tabIndex='-1'
      show={projectModal}
      setShow={setProjectModal}
      className='mt-5'>
      <MDBRow className='gx-0 mb-3'>
        <MDBCol className='col-lg-12 col-md-12 col-sm-12 col-12 m-auto'>
          <MDBModalDialog tag={'div'} className='modal_dialog'>
            <MDBModalContent tag={'div'} className='mb-5'>
              <MDBModalHeader tag={'div'}>
                <MDBModalTitle tag={'h5'}>
                  <MDBIcon fas icon='tasks' className='me-3'></MDBIcon>
                  All Projects
                </MDBModalTitle>
                <MDBBtn
                  className='btn-close'
                  color='none'
                  onClick={toggleShowProject}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody
                tag={'div'}
                className='row justify-content-center gx-0 m-0 p-0 pt-3 pb-3'>
                {data?.map((projectData, i) => {
                  const {
                    projectID,
                    projectName,
                    projectDesc,
                    techUsed,
                    repoLink,
                    liveLink,
                    imageURL,
                  } = projectData;
                  return (
                    <MDBCol
                      lg={4}
                      md={5}
                      sm={5}
                      className='col-10 mb-5 m-auto'
                      key={i + 1}>
                      {/* <!-- Card --> */}
                      <Slide direction='up' duration={1250} triggerOnce>
                        <MDBCard
                          className='m-auto shadow-4-strong'
                          style={cardHeight}>
                          {/* CARD IMAGE */}
                          <MDBRipple
                            rippleColor='light'
                            rippleTag={'div'}
                            rippleCentered
                            rippleDuration={3000}
                            rippleRadius={200}
                            className='bg-image hover-overlay hover-zoom shadow-2-strong'
                            style={imageHeight}>
                            <MDBCardImage
                              src={`${imageURL}`}
                              className='img-fluid'
                              alt={`image_${projectID}`}
                            />

                            <a href='#!'>
                              <div className='mask' style={imageMask}></div>
                            </a>
                          </MDBRipple>

                          {/* CARD BODY */}
                          <MDBCardBody className='text-center vstack justify-content-center gap-4'>
                            <MDBCardTitle tag={'h5'} className='mb-0'>
                              {projectName}
                            </MDBCardTitle>

                            <MDBCardText tag={'p'} className='mb-0'>
                              {projectDesc}
                            </MDBCardText>

                            {/* BADGE */}
                            <MDBContainer className='hstack justify-content-center flex-wrap gap-2 gx-0'>
                              {techUsed?.map((tech, j) => {
                                return (
                                  <MDBBadge
                                    color='info'
                                    light
                                    tag={'span'}
                                    role='button'
                                    key={j + 1}>
                                    {tech}
                                  </MDBBadge>
                                );
                              })}
                            </MDBContainer>

                            {/* BUTTONS */}
                            <MDBContainer className='hstack justify-content-center gap-4 gx-0'>
                              <MDBBtn
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
                                  size='sm'
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
              </MDBModalBody>

              <MDBModalFooter tag={'div'}>
                <MDBBtn color='secondary' onClick={toggleShowProject}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBCol>
      </MDBRow>
    </MDBModal>
  );
};

export default ProjectModal;
