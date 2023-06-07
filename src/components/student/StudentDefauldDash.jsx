import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'
import env from '../env.json'

const StudentDefauldDash = () => {

  const [application, setApplication] = useState("Pending")

  const [stdData] = useOutletContext()

  useEffect(() => {
    getStatus(stdData.email)
  }, [])

  const getStatus = (email) => {
    axios.get(env.apiBaseUrl + `/registration/${email}`).then((res) => {
      console.log(res.data)
      axios.get(env.apiBaseUrl + `/application/${res.data.content._id}`).then((res) => {
        console.log(res.data)
        if (res.data.contents != null) {
          setApplication(res.data.contents.status)
        }
      })
    })
  }

  return (
    <div className="default-dash" >
        <Alert variant='info' className='default-dash--alert'>
          Admission is Now Opened!
        </Alert>
        <Alert variant='primary' className='default-dash--alert'>
          Students Registration is Successfully Running!
        </Alert>
        <Alert variant='secondary' className='default-dash--alert'>
          Upcoming Events!
        </Alert>
        <Alert variant={(application == 'Approved') ? "success" : (application == "Denied") ? "danger" : "warning"} className='default-dash--alert'>
          Application Status : {application + "!"}
        </Alert>
      </div>
  )
}

export default StudentDefauldDash