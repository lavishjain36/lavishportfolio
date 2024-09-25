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
} from 'mdb-react-ui-kit';
import PostmanBadge from './PostmanBadge';
// import PostmanIframeBadge from './PostmanIframeBadge';
const AchivementModal = ({
  achivementModal,
  setAchivementModal,
  toggleShowAchivement,
}) => {
  return (
    <MDBModal
      tag={'div'}
      staticBackdrop
      show={achivementModal}
      setShow={setAchivementModal}
      tabIndex='-1'>
      <MDBModalDialog tag={'div'} centered>
        <MDBModalContent tag={'div'}>
          <MDBModalHeader tag={'div'}>
            <MDBModalTitle tag={'h5'}>
              <MDBIcon fas icon='award' className='me-2'></MDBIcon>
              Achivements
            </MDBModalTitle>
            <MDBBtn
              className='btn-close'
              color='none'
              onClick={toggleShowAchivement}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody tag={'div'} className='hstack justify-content-center'>
            {/* <PostmanIframeBadge /> */}
            <PostmanBadge />
          </MDBModalBody>

          <MDBModalFooter tag={'div'}>
            <MDBBtn color='secondary' onClick={toggleShowAchivement}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default AchivementModal;
