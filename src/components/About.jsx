import React from 'react'
import logo from '../assets/img/logo.jpg'

const About = () => {
  return (
    <>
      <div className="container about-container" id='about'>
        <div className="about-img">
          <div className="about-img-img">
            <img src={logo} />
          </div>
        </div>
        <div className="about-content">
          <div className="mb-4">
            <h3 className="text-primary text-uppercase bold">About Us</h3>
            <h1 className="text-uppercase mb-0 bold">Welcome to Zara Roller<br/>Skating Academy</h1>
          </div>
          <h4 className="mb-4">"There are NO LIMITS to what you can Achieve. Only Niro Roller Skating Academy makes you DREAM BIG AIM HIGH and never leave you GIVE UP."</h4>
          <p className=" text-body mb-4">Welcome to The Roller Skating Academy, a safe space for you to learn all about Roller skating in Sivakasi! Our lessons are made to fit people of all levels - from the absolute beginner to a professional, presenting challenges for both of them. Whether you would like to become a confident skater or want to challenge yourself with new tricks, there is a class for you at The Roller Skating Academy.</p>
        </div>
      </div>
    </>
  )
}

export default About