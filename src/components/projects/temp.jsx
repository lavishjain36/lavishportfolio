{
  projectID === '1' ? (
    <MDBCardBody className='text-center vstack gap-3'>
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
            <MDBBadge color='info' light tag={'span'} role='button' key={n}>
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
  ) : (
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
            <MDBBadge color='info' light tag={'span'} role='button' key={n}>
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
  );
}
