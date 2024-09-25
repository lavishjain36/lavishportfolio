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
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import AboutData from './AboutData.json';
const data = AboutData?.slice(0, 6);

const CertificateModal = ({
  certificateModal,
  setCertificateModal,
  toggleShowCertificate,
}) => {
  return (
    <MDBModal
      tag={'div'}
      animationDirection={'left'}
      closeOnEsc
      show={certificateModal}
      setShow={setCertificateModal}
      tabIndex='-1'
      className='mt-4'>
      <MDBModalDialog tag={'div'} centered scrollable size='lg'>
        <MDBModalContent tag={'div'} className='mt-4 mb-4'>
          <MDBModalHeader tag={'div'}>
            <MDBModalTitle tag={'h5'}>Certificate</MDBModalTitle>
            <MDBBtn
              className='btn-close'
              color='none'
              onClick={toggleShowCertificate}></MDBBtn>
          </MDBModalHeader>

          <MDBModalBody tag={'div'}>
            <MDBCarousel showControls showIndicators dark fade dealy={1500}>
              {data?.map((certificate, i) => {
                const { itemID, itemURL, itemAlt } = certificate;
                return (
                  <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={itemID}
                    src={itemURL}
                    alt={itemAlt}
                    key={i}></MDBCarouselItem>
                );
              })}
            </MDBCarousel>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShowCertificate}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default CertificateModal;
