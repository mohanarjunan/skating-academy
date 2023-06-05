import React from 'react'

const Login = () => {
  return (
    <>
      <div className='admin-form-bg'>
        <form className='w-100 d-flex flex-column justify-content-center align-items-center' style={{ height: "90vh" }}>
          <div className='text-uppercase fs-1 bold mb-4 text-light'>Admin Login</div>
          <div class="row g-3">
            <div class="col-12">
              <input type="text" name="std_email" class="form-control bg-light border-0 px-4" placeholder="Admin Id *"
                required
                style={{ height: "55px" }} />
            </div>
            <div class="col-12">
              <input type="password" name="std_pwd" class="form-control bg-light border-0 px-4" placeholder="Admin Password *"
                required
                style={{ height: "55px" }} />
            </div>

            <div class="col-12">
              <button class="btn btn-info w-100 py-3" >Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login