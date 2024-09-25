import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import FooterData from './FooterData.json';

const dateObj = new Date();
const currentYear = dateObj.getFullYear();

const Footer = () => {
  return (
    <MDBFooter
      bgColor='light'
      className='text-center text-lg-start text-muted footer'>
      {/* <!-- Section: Social media --> */}
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        {/* <!-- Left --> */}
        <MDBContainer className='me-5 d-none d-lg-block gx-0'>
          <AttentionSeeker effect='shakeX' triggerOnce>
            <span>Get connected with me on social networks:</span>
          </AttentionSeeker>
        </MDBContainer>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <MDBContainer className='gx-0 m-0 p-0 hstack justify-content-lg-end justify-content-center gap-lg-2 gap-md-2 gap-sm-1 gap-1'>
          {FooterData?.map((footerBtn, i) => {
            const {
              footerBtnClass,
              footerBtnHref,
              footerBtnBG,
              footerBtnIcon,
            } = footerBtn;
            return (
              <AttentionSeeker effect='wobble' key={i + 1}>
                <a
                  className={`${footerBtnClass}`}
                  style={{ backgroundColor: `${footerBtnBG}` }}
                  href={`${footerBtnHref}`}
                  role='button'>
                  <MDBIcon fab icon={`${footerBtnIcon}`}></MDBIcon>
                </a>
              </AttentionSeeker>
            );
          })}
        </MDBContainer>
        {/* <!-- Right --> */}
      </section>
      {/* <!-- Section: Social media --> */}

      {/* <!-- Copyright --> */}
      <div
        className='text-center p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        {`© ${currentYear} Copyright:`}

        <a className='text-reset fw-bold' href='#hero'>
          Lavish Jain
        </a>
      </div>

      <Slide direction='up' duration={1000} className='top_btn'>
        <a href='#hero' className='btn btn-primary bg-gradient'>
          <MDBIcon
            fab
            iconType='solid'
            icon='arrow-turn-up'
            size='1x'
            animate='beat-fade'
            style={{ color: '#333' }}></MDBIcon>
        </a>
      </Slide>
    </MDBFooter>
  );
};

export default Footer;
