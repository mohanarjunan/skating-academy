import React, { useState } from 'react'
import env from '../env.json'
import axios from 'axios'
import Swal from 'sweetalert2'

const LoginForm = ({ setLoginStatus, setSignUp, setStdData }) => {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    axios.get(env.apiBaseUrl + `/registration/${data.email}/${data.password}`).then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: res.data.msg,
          text: "Welcome to Student Dashboard!",
          icon: 'success'
        })
        setLoginStatus(true)
        setStdData(data)
        return
      } else {
        Swal.fire({
          title: res.data.msg,
          text: "Please try with correct Credentialls!",
          icon: "error"
        })
      }
    })    
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({...data, [name]: value})
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
              <input type="email" name="email" className="form-control bg-light border-0 px-4" placeholder="Student Email *"
                required
                style={{ height: "55px" }} 
                onChange={handleChange}
                />
            </div>
            <div className="col-12">
              <input type="password" name="password" className="form-control bg-light border-0 px-4" placeholder="Password *"
                required
                style={{ height: "55px" }} 
                onChange={handleChange}
                />
            </div>

            <div className="col-12">
              <button className="btn btn-warning w-100 py-3" type='submit' onClick={onSubmit}>Login</button>
              <button className="btn btn-info w-100 py-3 mt-2" onClick={signUpChange} >Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm