import React from 'react'
import Header from './components/Header'
import MyCarousel from './components/MyCarousel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Router>

        <Header />
        
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App