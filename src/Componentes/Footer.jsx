import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';


export default function Footer() {
  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <Button variant="outline-light"  onClick={() => openInNewTab('https://fb.com/avelarjr77')}>
            <MDBIcon fab icon='facebook' />
          </Button>

          <Button variant="outline-light" onClick={() => openInNewTab('https://twitter.com/avelarjr77')}>
            <MDBIcon fab icon='twitter' />
          </Button>

          <Button variant="outline-light" onClick={() => openInNewTab('https://wa.me/+50376106550')}>
            <MDBIcon fab icon='whatsapp' />
          </Button>

          <Button variant="outline-light" onClick={() => openInNewTab('https://instagram.com/avelarjr77')}>
            <MDBIcon fab icon='instagram' />
          </Button>

          <Button variant="outline-light" onClick={() => openInNewTab('https://github.com/avelarjr77')}>
            <MDBIcon fab icon='github' />
          </Button>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <h6> AvelarJr. Copyright © 2022<br></br> &nbsp;</h6>
      </div>
    </MDBFooter>
  );
}