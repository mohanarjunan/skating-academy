import React, { useState } from 'react'
import DashBoard from './DashBoard'
import Login from './Login'

const Admin = () => {

  const [loginStatus, setLoginStatus] = useState(false) 

  return (
    <>
      {
        (loginStatus) ? (
          <DashBoard />
        ) : (
          <Login />
        )
      }
    </>
  )
}

export default Admin