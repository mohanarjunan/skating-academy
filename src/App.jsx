import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Error404 from './components/Error404'
import Student from './components/student/Student'
import Admin from './components/admin/Admin'
import DefaultDash from './components/admin/DefaultDash'
import Applications from './components/admin/Applications'
import Students from './components/admin/Students'
import StudentDefaultDash from './components/student/StudentDefauldDash'
import NewApplications from './components/student/NewApplication'
import StudentSignUP from './components/student/StudentSignUP'

const App = () => {
  return (
    <>
      <Router>

        <Header />
        
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='*' Component={Error404} />

          <Route path='/student' Component={Student}>
            <Route path='' Component={StudentDefaultDash} />
            <Route path='application' Component={NewApplications} />
          </Route>

          <Route path='/register' Component={StudentSignUP} />

          <Route path='/admin' Component={Admin} >
            <Route path='' Component={DefaultDash} />
            <Route path='applications' Component={Applications} />
            <Route path='students' Component={Students} />
          </Route>
        </Routes>
        
      </Router>
    </>
  )
}

export default App