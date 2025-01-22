import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../assets/img/carousel/1.jpg'
import img2 from '../assets/img/carousel/2.jpg'
import img3 from '../assets/img/carousel/3.jpg'
import { Link } from 'react-router-dom'

const MyCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className='h-50 overflow-hidden'>
          <img src={img1} className='my-carousel-img' alt="" />
          <Carousel.Caption>
            <div className='mb-md-5 mb-3'>
              <h5 className="text-white text-uppercase">Niro Roller Skating Academy</h5>
              <h1 className="text-white text-uppercase mb-md-4 bold">"Blink and you'll miss my awesome tricks."</h1>
              <Link to={'/student'} className='btn btn-primary py-md-3 px-md-5 me-3'>JOIN US</Link>
              <a href="#footer" className='btn btn-light py-md-3 px-md-5'>CONTACT US</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className='my-carousel-img' alt="" />
          <Carousel.Caption>
            <div className='mb-md-5 mb-3'>
              <h5 className="text-white text-uppercase">Niro Roller Skating Academy</h5>
              <h1 className="text-white text-uppercase mb-md-4 bold">"Living that roller skating life."</h1>
              <Link to={'/student'} className='btn btn-primary py-md-3 px-md-5 me-3'>JOIN US</Link>
              <a href="#footer" className='btn btn-light py-md-3 px-md-5'>CONTACT US</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} className='my-carousel-img' alt="" />
          <Carousel.Caption>
            <div className='mb-md-5 mb-3'>
              <h5 className="text-white text-uppercase">Niro Roller Skating Academy</h5>
              <h1 className=" text-white text-uppercase mb-md-4 bold">"This is how I roll."</h1>
              <Link to={'/student'} className='btn btn-primary py-sm-3 px-sm-5 me-3'>JOIN US</Link>
              <a href="#footer" className='btn btn-light py-md-3 px-md-5'>CONTACT US</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default MyCarousel