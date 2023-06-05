import React from 'react'

const StudentSignUP = ({ setSignUp }) => {

  const onSubmit = (e) => {
    e.preventDefault()
    setSignUp(false)
  }

  return (
    <>
      <div className="container-fluid p-5 login-form-bg" style={{height: "90vh"}}>
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
                                <input type="text" name="name" id="name" className="form-control bg-light border-0 px-4"
                                    placeholder="Your Name *" required
                                    style={{height: "50px"}}/>
                            </div>
                            <div className="col-6">
                                <input type="text" name="parent_name" id="parent_name"
                                    className="form-control bg-light border-0 px-4" placeholder="Parent's Name *"
                                    required
                                    style={{height: "50px"}}/>
                            </div>
                            <div className="col-6">
                                <input type="email" name="email" id="email" className="form-control bg-light border-0 px-4"
                                    placeholder="Your Email Id *"
                                    style={{height: "50px"}}/>
                            </div>

                            <div className="col-6">
                                <input type="number" name="phone_no" id="phone_no"
                                    className="form-control bg-light border-0 px-4" placeholder="Phone Number *"
                                    required
                                    style={{height: "50px"}}/>
                            </div>
                            <div className="col-6">
                                <select name="gender" id="gender" className="form-select bg-light border-0 px-4"
                                     required
                                     style={{height: "50px"}}>
                                    <option value="0">Gender *</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <input type="date" name="dob" id="dob" className="form-control bg-light border-0 px-4"
                                    placeholder="Your Age *" required 
                                    style={{height: "50px"}}/>
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