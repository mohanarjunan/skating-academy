import React from 'react'
import { Alert } from 'react-bootstrap'

const DefaultDash = () => {
  return (
    <>
      <div className="default-dash" >
        <Alert variant='success' className='default-dash--alert'>
          Admission is Now Opened!
        </Alert>
        <Alert variant='primary' className='default-dash--alert'>
          Students Registration is Successfully Running!
        </Alert>
        <Alert variant='warning' className='default-dash--alert'>
          Upcoming Events!
        </Alert>
      </div>
    </>
  )
}

export default DefaultDash