import React from 'react'
import img2 from '../assets/img/carousel/2.jpg'

const Mission = () => {
  return (
    <>
      <div className="container-fluid p-0" id='mission'>
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100" src={img2} />
            </div>
          </div>
          <div className="col-lg-6 bg-white p-5">
            <div className="mb-5 mt-5">
              <h5 className="text-danger text-uppercase">Mission of</h5>
              <h1 className="display-3 text-uppercase text-dark bold mb-0">ZARA ROLLER <br /> SKATING ACADEMY</h1>
            </div>
            <div>
              <div className="testimonial-item">
                <p className="fs-4 fw-normal text-dark mb-4"><i className="fa fa-quote-left text-danger me-3"></i>The RSC supports all skaters of all ages and abilities in realizing their skating goals, by providing quality coaching, facilities, programming and leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mission