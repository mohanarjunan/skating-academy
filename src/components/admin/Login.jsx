import axios from 'axios'
import React, { useState } from 'react'
import env from '../env.json'
import Swal from 'sweetalert2'

const Login = ({ setLoginStatus }) => {

  const [data, setData] = useState({
    adminId: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(env.apiBaseUrl + `/admin/${data.adminId}/${data.password}`).then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: res.data.msg,
          text: "Welcome to Admin Dashboard!",
          icon: 'success'
        })
        setLoginStatus(true)
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
    setData({ ...data, [name]: value })
  }

  return (
    <>
      <div className='admin-form-bg'>
        <form className='w-100 d-flex flex-column justify-content-center align-items-center' style={{ height: "90vh" }} onSubmit={handleSubmit}>
          <div className='text-uppercase fs-1 bold mb-4 text-light'>Admin Login</div>
          <div className="row g-3">
            <div className="col-12">
              <input type="text" name="adminId" className="form-control bg-light border-0 px-4" placeholder="Admin Id *"
                required
                style={{ height: "55px" }} 
                onChange={handleChange}
                />
            </div>
            <div className="col-12">
              <input type="password" name="password" className="form-control bg-light border-0 px-4" placeholder="Admin Password *"
                required
                style={{ height: "55px" }} 
                onChange={handleChange}
                />
            </div>

            <div className="col-12">
              <button className="btn btn-info w-100 py-3" type='submit'>Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login