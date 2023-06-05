import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Error404 from './components/Error404'
import Student from './components/student/Student'
import Admin from './components/admin/Admin'
import StudentSignUp from './components/student/StudentSignUP'

const App = () => {
  return (
    <>
      <Router>

        <Header />
        
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='*' Component={Error404} />
          <Route path='/student' Component={Student}>
            {/* <Route path='signup' Component={StudentSignUp} /> */}
          </Route>
          <Route path='/admin' Component={Admin} >
            {/* <Route path='/' Component={Admin} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App