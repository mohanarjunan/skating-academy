import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginForm = ({ setLoginStatus, setSignUp }) => {

  const onSubmit = (e) => {
    setLoginStatus(true)
  }

  const signUpChange = (e) => {
    setSignUp(true)
  }

  return (
    <>
      <div className='login-form-bg'>
        <form className='w-100 d-flex flex-column justify-content-center align-items-center' style={{ height: "90vh" }}>
          <div className='text-uppercase fs-1 bold mb-4 text-light'>Student Login</div>
          <div className="row g-3">
            <div className="col-12">
              <input type="text" name="std_email" className="form-control bg-light border-0 px-4" placeholder="Student Email *"
                required
                style={{ height: "55px" }} />
            </div>
            <div className="col-12">
              <input type="password" name="std_pwd" className="form-control bg-light border-0 px-4" placeholder="Password *"
                required
                style={{ height: "55px" }} />
            </div>

            <div className="col-12">
              <button className="btn btn-warning w-100 py-3" onClick={onSubmit}>Login</button>
              <button className="btn btn-info w-100 py-3 mt-2" onClick={signUpChange} >Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm