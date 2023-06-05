import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tranings = () => {
  return (
    <>
      <Container fluid className='training-outer py-5' id='training'>
        <div className="mb-5 text-center training-inner">
          <h5 className="text-warning text-uppercase">Practical</h5>
          <h1 className="display-4 text-white bold text-uppercase mb-0">Trainings</h1>
        </div>
        <div className="container-fluid programe position-relative px-5 mt-5">

          <div className="row g-5 gb-5">
            <div className="col-lg-3 col-md-6">
              <div className="bg-light rounded text-center p-5">
                <h3 className="text-uppercase my-4">Speed Skating</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light rounded text-center p-5">
                <h3 className="text-uppercase my-4">Roller Hockey</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light rounded text-center p-5">
                <h3 className="text-uppercase my-4">Inline Hockey</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light rounded text-center p-5">
                <h3 className="text-uppercase my-4">Inline Free Style</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light rounded text-center p-5">
                <h3 className="text-uppercase my-4">Roller Free Style</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light rounded text-center p-5">
                <h3 className="text-uppercase my-4">Skate Board</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light rounded text-center p-5">
                <h3 className="text-uppercase my-4">Roller Scooter</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light rounded text-center p-5">
                <h3 className="text-uppercase my-4">Artistic</h3>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 text-center">
              <h1 className="text-uppercase text-light mb-4">Summer Camp Registration is Going...</h1>
              <Link className="btn btn-warning py-3 px-5">Become a Student</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Tranings