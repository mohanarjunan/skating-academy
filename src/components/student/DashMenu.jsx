import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const DashMenu = ({ setLoginStatus }) => {

  const navigate = useNavigate()

  const logout = (e) => {
    setLoginStatus(false)
    navigate('/student')
  }

  const [active, setActive] = useState({
    default: "active-link",
    applications: "",
    students: ""
  })

  return (
    <>
      <div className="dash-menu">
        <Link to={'/student'} className={`dash-menu--link ${active.default}`}
          onClick={() => {
            setActive({
              default: "active-link",
              applications: "",
              students: ""
            })
          }}
         >DashBoard</Link>
        <Link to={'/student/application'} className={`dash-menu--link ${active.applications}`}
        onClick={() => {
          setActive({
            default: "",
            applications: "active-link",
            students: ""
          })
        }}
        >Application</Link>
        <div className='dash-menu--logout'>
          <Button variant='danger' onClick={logout}>Logout</Button>
        </div>
      </div>
    </>
  )
}

export default DashMenu