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
  MDBAccordion,
  MDBAccordionItem,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
  MDBBadge,
  MDBIcon,
} from 'mdb-react-ui-kit';
import AboutData from './AboutData.json';
const data = AboutData?.slice(5, 8);

const EducationModal = ({
  educationModal,
  setEducationModal,
  toggleShowEducation,
}) => {
  return (
    <MDBModal
      tag={'div'}
      staticBackdrop
      closeOnEsc
      animationDirection={'right'}
      show={educationModal}
      setShow={setEducationModal}
      tabIndex='-1'>
      <MDBModalDialog tag={'div'} centered scrollable className='mt-5'>
        <MDBModalContent tag={'div'}>
          <MDBModalHeader tag={'div'}>
            <MDBModalTitle tag={'h5'}>
              <MDBIcon
                fas
                icon={'user-graduate'}
                size='sm'
                className='opacity-80 me-2'
              />
              Education
            </MDBModalTitle>
            <MDBBtn
              className='btn-close'
              color='none'
              onClick={toggleShowEducation}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody tag={'div'}>
            {data?.map((educationItems, i) => {
              const { accordionID, accordionTitle, accordionIcon, listItems } =
                educationItems;
              return (
                <MDBAccordion tag={'div'} key={i + 1}>
                  <MDBAccordionItem
                    tag={'div'}
                    collapseId={accordionID}
                    headerTitle={
                      <>
                        <MDBIcon
                          fas
                          icon={accordionIcon}
                          size='sm'
                          className='opacity-70'
                        />
                        &nbsp;
                        {accordionTitle}
                      </>
                    }>
                    <MDBListGroup light>
                      {listItems?.map((item, j) => {
                        return (
                          <MDBListGroupItem key={j + 1}>
                            <MDBTypography variant='h6' color='primary'>
                              <MDBBadge tag={'span'} color='info'>
                                {item.organizationBadge}
                              </MDBBadge>
                            </MDBTypography>
                            <MDBTypography className='mb-0'>
                              {item.organization}
                            </MDBTypography>

                            <MDBTypography variant='h6' color='primary'>
                              <MDBBadge tag={'span'} color='info'>
                                {item.instutionBadge}
                              </MDBBadge>
                            </MDBTypography>
                            <MDBTypography className='mb-0'>
                              {item.instution}
                            </MDBTypography>

                            <MDBTypography variant='h6' color='primary'>
                              <MDBBadge tag={'span'} color='info'>
                                {item.majorBadge}
                              </MDBBadge>
                            </MDBTypography>

                            <MDBTypography className='mb-0'>
                              {item.major}
                            </MDBTypography>
                            <MDBTypography variant='h6' color='primary'>
                              <MDBBadge tag={'span'} color='info'>
                                {item.durationBadge}
                              </MDBBadge>
                            </MDBTypography>
                            <MDBTypography className='mb-0'>
                              {item.duration}
                            </MDBTypography>
                          </MDBListGroupItem>
                        );
                      })}
                    </MDBListGroup>
                  </MDBAccordionItem>
                </MDBAccordion>
              );
            })}
          </MDBModalBody>

          <MDBModalFooter tag={'div'}>
            <MDBBtn color='secondary' onClick={toggleShowEducation}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default EducationModal;
