import {
  MDBContainer,
  MDBIcon,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import React from 'react';
import Tools from '../tools/Tools';
import { Zoom, AttentionSeeker } from 'react-awesome-reveal';
import SkillData from './SkillsData.json';
const skillData1 = SkillData.slice(0, 12);
const skillData2 = SkillData.slice(12, 20);

const Skills = () => {
  return (
    <section id='skills' className='bg-dark bg-gradient bg-opacity-25'>
      <MDBRow className='gx-0 col col-lg-9 m-auto pt-5 pb-5'>
        <AttentionSeeker effect='tada'>
          <MDBTypography variant='h3' className='text-center mb-5'>
            Skills
          </MDBTypography>
        </AttentionSeeker>

        <MDBRow className='gx-0 justify-content-center gap-3'>
          {/* <!-- Left side --> */}
          <MDBContainer className='gx-0 p-1 m-0 border border-primary border-1 rounded-3 shadow-4-soft col-lg-5'>
            <Zoom direction='left' delay={500}>
              {skillData1?.map((skillLeft, i) => {
                const {
                  skillName,
                  iconType,
                  iconName,
                  iconSize,
                  color,
                  skillNow,
                  width,
                  progressClass,
                } = skillLeft;
                return (
                  <MDBContainer fluid className='gx-0 p-0 m-0' key={i + 1}>
                    <MDBTypography variant='h5' className='me-2'>
                      {skillName}
                      <MDBTypography tag={'span'}>
                        <MDBIcon
                          fab
                          iconType={`${iconType}`}
                          icon={`${iconName}`}
                          size={`${iconSize}`}
                          style={{ color: `${color}` }}
                          className='ms-2'></MDBIcon>
                      </MDBTypography>
                    </MDBTypography>

                    <MDBProgress tag={'div'} height='20' className='rounded-3'>
                      <MDBProgressBar
                        tag={'div'}
                        animated
                        striped
                        valuemin={0}
                        valuemax={100}
                        valuenow={`${skillNow}`}
                        width={`${width}`}
                        className={`rounded-3 ${progressClass}`}
                      />
                    </MDBProgress>
                    <hr />
                  </MDBContainer>
                );
              })}
            </Zoom>
          </MDBContainer>

          {/* <!-- Right side --> */}
          <MDBContainer className='gx-0 p-1 m-0 border border-primary border-1 rounded-3 shadow-4-soft col-lg-5'>
            <Zoom direction='right' delay={500}>
              {skillData2?.map((skillRight, j) => {
                const {
                  skillName,
                  iconType,
                  iconName,
                  iconSize,
                  color,
                  skillNow,
                  width,
                  progressClass,
                } = skillRight;
                return (
                  <MDBContainer fluid className='gx-0 p-0 m-0' key={j + 1}>
                    <MDBTypography variant='h5' className='me-2'>
                      {skillName}
                      <MDBTypography tag={'span'}>
                        <MDBIcon
                          fab
                          iconType={`${iconType}`}
                          icon={`${iconName}`}
                          size={`${iconSize}`}
                          style={{ color: `${color}` }}
                          className='ms-2'></MDBIcon>
                      </MDBTypography>
                    </MDBTypography>

                    <MDBProgress tag={'div'} height='20' className='rounded-3'>
                      <MDBProgressBar
                        tag={'div'}
                        animated
                        striped
                        valuemin={0}
                        valuemax={100}
                        valuenow={`${skillNow}`}
                        width={`${width}`}
                        className={`rounded-3 ${progressClass}`}
                      />
                    </MDBProgress>
                    <hr />
                  </MDBContainer>
                );
              })}
            </Zoom>
          </MDBContainer>
        </MDBRow>
      </MDBRow>

      {/* <!-- Tools --> */}
      <Tools />
    </section>
  );
};

export default Skills;
