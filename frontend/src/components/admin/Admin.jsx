import React, { useState } from 'react'
import DashBoard from './DashBoard'
import Login from './Login'

const Admin = () => {

  const [loginStatus, setLoginStatus] = useState(false) 

  return (
    <>
      {
        (loginStatus) ? (
          <DashBoard setLoginStatus={setLoginStatus} />
        ) : (
          <Login setLoginStatus={setLoginStatus} />
        )
      }
    </>
  )
}

export default Admin