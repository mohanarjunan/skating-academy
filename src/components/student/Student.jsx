import React, { useState } from 'react'
import DashBoard from './Dashboard'
import Login from './Login'

const Student = () => {

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

export default Student