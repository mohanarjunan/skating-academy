import React, { useState } from 'react'
import StudentSignUp from './StudentSignUP'
import LoginForm from './LoginForm'

const Login = ({ setLoginStatus }) => {

  const [signUP, setSignUp] = useState(false)

  return (
    <>
      {
        (!signUP) ? (
          <LoginForm setLoginStatus={setLoginStatus} setSignUp={setSignUp} />
        ) : (
          <StudentSignUp setSignUp={setSignUp} />
        )
      }
    </>
  )
}

export default Login