import React from 'react'
import MyCarousel from './MyCarousel'
import About from './About'
import Tranings from './Tranings'
import Mission from './Mission'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <MyCarousel/>

      <About/>

      <Tranings />

      <Mission />

      <Footer />
    </>
  )
}

export default Home