import React, { useState } from 'react'
import DashBoard from './Dashboard'
import Login from './Login'

const Student = () => {

  const [loginStatus, setLoginStatus] = useState(false)
  const [stdData, setStdData] = useState({})

  return (
    <>
      {
        (loginStatus) ? (
          <DashBoard setLoginStatus={setLoginStatus} stdData={stdData} />
        ) : (
          <Login setLoginStatus={setLoginStatus} setStdData={setStdData} />
        )
      }
    </>
  )
}

export default Student