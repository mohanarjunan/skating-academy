import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-secondary px-5" id="footer">
        <div className="row gx-5">
          <div className="col-lg-8 col-md-6">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-12 pt-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
                <div className="d-flex mb-2">
                  <i className="bi bi-geo-alt text-warning me-2"></i>
                  <p className="mb-0">Srivilliputhur, Tamil Nadu - 626 125</p>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-envelope-open text-warning me-2"></i>
                  <p className="mb-0">zaraskate@gmail.com</p>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-telephone text-warning me-2"></i>
                  <p className="mb-0">+91 63748 56198</p>
                </div>
                <div className="d-flex mt-4">
                  <a className="btn btn-warning btn-square rounded-circle me-2" target="_self" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-warning btn-square rounded-circle me-2" target="_self" href="#"><i className="fab fa-youtube"></i></a>
                  <a className="btn btn-warning btn-square rounded-circle" target="_self" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="col-lg-4 mx-auto col-md-12 pt-0 pt-lg-5 mb-5">
                <h4 className="text-uppercase text-light mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-secondary mb-2" href="#">
                    <i className="bi bi-arrow-right text-warning me-2"></i>Home
                  </a>
                  <a className="text-secondary mb-2" href="#about">
                    <i className="bi bi-arrow-right text-warning me-2"></i>About Us
                  </a>
                  <a className="text-secondary mb-2" href="#training">
                    <i className="bi bi-arrow-right text-warning me-2"></i>Training
                  </a>
                  <a className="text-secondary mb-2" href="#mission">
                    <i className="bi bi-arrow-right text-warning me-2"></i>Mission
                  </a>
                  <a className="text-secondary mb-2" href="#footer">
                    <i className="bi bi-arrow-right text-warning me-2"></i>Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-warning p-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31479.31425654024!2d77.60826188571856!3d9.516176846202717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06dcb7c2dc05ed%3A0x85ab3be7b79f6af2!2sSrivilliputhur%2C%20Tamil%20Nadu%20626125!5e0!3m2!1sen!2sin!4v1685977501557!5m2!1sen!2sin"
                className='w-100 h-100'
                style={{
                  border: "0px",
                  borderRadius: "10px"
                }}></iframe>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer