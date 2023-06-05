import React, { useState } from 'react'
import DashBoard from './Dashboard'
import Login from './Login'

const Student = () => {

  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <>
      {
        (loginStatus) ? (
          <DashBoard />
        ) : (
          <Login setLoginStatus={setLoginStatus} />
        )
      }
    </>
  )
}

export default Student