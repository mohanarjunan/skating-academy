import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Error404 from './components/Error404'

const App = () => {
  return (
    <>
      <Router>

        <Header />
        
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='*' Component={Error404} />
          <Route path='/student'>
            <Route path='/' />
          </Route>
          <Route path='/admin' >
            <Route path='/' />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App