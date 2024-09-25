import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  // eslint-disable-next-line
  const [activeLink, setActiveLink] = useState(false);

  return (
    <header className='position-sticky top-0 header'>
      {/* <!-- Navbar --> */}
      <MDBNavbar expand='lg' dark bgColor='dark'>
        {/* <!-- Container wrapper --> */}
        <MDBContainer fluid className='gap-2'>
          {/* <!-- Navbar brand --> */}
          <MDBNavbarBrand href='#!' tag={'a'} className='text-info fw-bold'>
            Lavish
          </MDBNavbarBrand>
          {/* <!-- Navbar brand --> */}

          {/* <!-- Toggle button --> */}
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}>
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          {/* <!-- Toggle button --> */}

          {/* <!-- Collapsible wrapper --> */}
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav
              right
              fullWidth={false}
              className='mb-2 mb-lg-0 align-items-center gap-2'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#hero'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink tag={'a'} href='#about'>
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink tag={'a'} href='#skills'>
                  Skills
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink tag={'a'} href='#projects'>
                  Works/Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
            
              <MDBNavbarItem>
                <MDBNavbarLink tag={'a'} href='#contact-me'>
                  Contact me
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='text-center align-self-center'>
                <MDBNavbarLink
                  tag={'a'}
                  href='https://drive.google.com/file/d/10zIrcYZ1qUlIGwu7x23jmoru8MoDGvXL/view?usp=sharing'
                  className='btn btn-primary btn-sm text-capitalize text-light mb-0 p-2'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fa fa-light fa-file fa-fade me-1'></i>
                  Resume
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          {/* <!-- Collapsible wrapper --> */}
        </MDBContainer>
        {/* <!-- Container wrapper --> */}
      </MDBNavbar>
      {/* <!-- Navbar --> */}
    </header>
  );
};

export default Navbar;
