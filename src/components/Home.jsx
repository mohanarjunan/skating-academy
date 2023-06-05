import React from 'react'
import Header from './Header'
import MyCarousel from './MyCarousel'
import About from './About'
import Tranings from './Tranings'
import Mission from './Mission'

const Home = () => {
  return (
    <>
      <MyCarousel/>

      <About/>

      <Tranings />

      <Mission />
    </>
  )
}

export default Home