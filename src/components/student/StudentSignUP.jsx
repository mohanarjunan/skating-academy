import React, { useState } from 'react'
import Swal from 'sweetalert2'
import env from '../env.json'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StudentSignUP = ({ setSignUp }) => {

    const [data, setData] = useState({
        studentName: "",
        phone: "",
        email: "",
        password: "",
        gender: "",
        dob: ""
    })

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        if (data.phone.length != 10) {
            Swal.fire({
                title: "Registration Alert!",
                text: "Phone Number must have 10 digits!",
                icon: "warning"
            })
            return;
        }  
        axios.post(env.apiBaseUrl + `/registration`, data).then((res) => {
            if (res.data.status) {
              Swal.fire({
                  title: res.data.msg,
                  text: "New User Created Successfully, Now you can login as Student!",
                  icon: "success"
              })
              setSignUp(false)
              navigate('/student')
              return
          } else {
              Swal.fire({
                  title: res.data.msg,
                  text: "User Not Created, Try Again Later!",
                  icon: "error"
              })
          }
          })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({...data, [name]: value})
    }

    return (
        <>
            <div className="container-fluid p-5 login-form-bg" style={{ height: "90vh" }}>
                <div className="mb-5 text-center">
                    <h5 className="text-warning text-uppercase">Student Sign up form</h5>
                    <h1 className="display-3 text-uppercase mb-0 bold text-info">Get In Touch</h1>
                </div>
                <div className="row g-0">
                    <div className="col-lg-10 mx-auto rounded-3 overflow-hidden">
                        <div className="bg-dark p-5">
                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <input type="text" name="studentName" className="form-control bg-light border-0 px-4"
                                            placeholder="Your Name *" required
                                            style={{ height: "50px" }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input type="number" name="phone" className="form-control bg-light border-0 px-4" placeholder="Phone Number *"
                                            required
                                            style={{ height: "50px" }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input type="email" name="email" className="form-control bg-light border-0 px-4"
                                            placeholder="Your Email Id *"
                                            required
                                            style={{ height: "50px" }} 
                                            onChange={handleChange}
                                            />
                                    </div>

                                    <div className="col-6">
                                        <input type="password" name="password"
                                            className="form-control bg-light border-0 px-4" placeholder="Password *"
                                            required
                                            style={{ height: "50px" }}
                                            onChange={handleChange}
                                            />
                                    </div>
                                    <div className="col-6">
                                        <select name="gender" id="gender" className="form-select bg-light border-0 px-4"
                                            required
                                            style={{ height: "50px" }}
                                            onChange={handleChange}
                                            >
                                            <option value="">Gender *</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <input type="date" name="dob" id="dob" className="form-control bg-light border-0 px-4"
                                            placeholder="Your Age *" required
                                            style={{ height: "50px" }} 
                                            onChange={handleChange}
                                            />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-info w-100 py-3" type="submit">Sign up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentSignUP