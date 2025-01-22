import React, { useState } from 'react'
import StudentSignUp from './StudentSignUP'
import LoginForm from './LoginForm'

const Login = ({ setLoginStatus, setStdData }) => {

  const [signUP, setSignUp] = useState(false)

  return (
    <>
      {
        (!signUP) ? (
          <LoginForm setLoginStatus={setLoginStatus} setStdData={setStdData} setSignUp={setSignUp} />
        ) : (
          <StudentSignUp setSignUp={setSignUp} />
        )
      }
    </>
  )
}

export default Login