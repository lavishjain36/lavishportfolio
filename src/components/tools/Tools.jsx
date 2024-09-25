import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import { ToolsData } from '../../assets/project_images/index';

const Tools = () => {
  return (
    <MDBContainer fluid className='gx-0 p-3 mt-5'>
      <AttentionSeeker effect='swing'>
        <MDBTypography variant='h4' className='text-center mb-5'>
          Tools
        </MDBTypography>
      </AttentionSeeker>

      <MDBRow className='text-center justify-content-center gap-4 gx-0 m-auto pb-5'>
        {ToolsData.map((tools, i) => {
          const { toolsID, toolsName, toolsLogo, toolClass } = tools;
          return (
            <MDBCol
              lg={2}
              md={2}
              sm={4}
              key={i}
              className='col-5 ps-2 pe-2 p-2 rounded-3 shadow-4 gradient-custom'
              role={'button'}>
              <div className='vstack align-items-center gap-2'>
                <Slide direction='up' delay={300} triggerOnce>
                  <MDBTypography variant='h6' color='dark'>
                    {toolsName}
                  </MDBTypography>
                </Slide>

                <Slide direction='down' delay={300} triggerOnce key={toolsID}>
                  <div className='col'>
                    <img
                      src={toolsLogo}
                      alt={`${toolsName}_${toolsID}`}
                      loading='lazy'
                      fetchpriority='low'
                      className={toolClass}
                    />
                  </div>
                </Slide>
              </div>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
};

export default Tools;
