import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const DashMenu = ({ setLoginStatus }) => {

  const navigate = useNavigate()

  const logout = (e) => {
    setLoginStatus(false)
    navigate('/admin')
  }

  const [active, setActive] = useState({
    default: "active-link",
    applications: "",
    students: ""
  })

  return (
    <>
      <div className="dash-menu">
        <Link to={'/admin'} className={`dash-menu--link ${active.default}`}
          onClick={() => {
            setActive({
              default: "active-link",
              applications: "",
              students: ""
            })
          }}
         >DashBoard</Link>
        <Link to={'/admin/applications'} className={`dash-menu--link ${active.applications}`}
        onClick={() => {
          setActive({
            default: "",
            applications: "active-link",
            students: ""
          })
        }}
        >Application</Link>
        <Link to={'/admin/students'} className={`dash-menu--link ${active.students}`}
        onClick={() => {
          setActive({
            default: "",
            applications: "",
            students: "active-link"
          })
        }}
        >Students</Link>
        <div className='dash-menu--logout'>
          <Button variant='danger' onClick={logout}>Logout</Button>
        </div>
      </div>
    </>
  )
}

export default DashMenu