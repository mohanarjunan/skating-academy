import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const NewApplication = () => {

  const [data, setData] = useState({
    studentName: "",
    parentName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    place: "",
    aadhar: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if(data.phone.length != 10) {
      Swal.fire({
        title: "Submission Faild!",
        icon: "error",
        text: "Phone Number is Must Contained 10 digits!",
      })
      return
    }
    if(data.aadhar != 16) {
      Swal.fire({
        title: "Submission Faild!",
        icon: "error",
        text: "Aadhar Number is Must Contained 16 digits!",
      })
      return
    }
    // Registration API
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({...data, [name]: value})
  }

  return (
    <>
      <div className="new-application col-12">
        <Form className='col-12' onSubmit={onSubmit}>
          <div className='new-application--row col-12'>
            <Form.Control
              className='col-6 mx-2 py-2'
              placeholder='Student Name *'
              required
              onChange={handleChange}
              name='studentName'
            />
            <Form.Control
              className='col-6 mx-2 py-2'
              placeholder="Student Parent's Name *"
              required
              onChange={handleChange}
              name='parentName'
            />
          </div>
          <div className='new-application--row col-12'>
            <Form.Select
              className='col-6 mx-2 py-2'
              placeholder='Gender'
              required
              onChange={handleChange}
              name='gender'
            >
              <option value="" >Gender *</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
            <Form.Control
              type='date'
              className='col-6 mx-2 py-2'
              required
              onChange={handleChange}
              name='dob'
            />
          </div>
          <div className='new-application--row col-12'>
            <Form.Control
              className='col-6 mx-2 py-2'
              placeholder='Student Email *'
              required
              onChange={handleChange}
              name='email'
              type='email'
            />
            <Form.Control
              className='col-6 mx-2 py-2'
              placeholder='Phone Number *'
              type='number'
              required
              onChange={handleChange}
              name='phone'
            />
          </div>
          <div className='new-application--row col-12'>
            <Form.Select
              className='col-6 mx-2 py-2'
              required
              onChange={handleChange}
              name='place'
            >
              <option value="">Select Your Place *</option>
              <option value="srivilliputhur">Srivilliputhur</option>
              <option value="sivakasi">Sivaksi</option>
              <option value="rajapalayam">Rajapalayam</option>
              <option value="mamsapuram">Mamsapuram</option>
            </Form.Select>
            <Form.Control
              className='col-6 mx-2 py-2'
              placeholder='Student Aadhar Number *'
              required
              onChange={handleChange}
              type='number'
              name='aadhar'
            />
          </div>
          <div className='new-application--row col-12 mx-2'>
            <Button
              className='col-12 py-2 fs-5' type='submit'
            >Apply</Button>
            <Link to={'/student'}
              className='btn btn-warning col-12 py-2 fs-5 mx-3'>Reset</Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default NewApplication