import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import env from '../env.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Applications = () => {

  const [rowData, setRowData] = useState({})

  const [data, setData] = useState([])

  useEffect(() => {
    getAllApplications()
  }, [])

  const getAllApplications = (e) => {
    axios.get(env.apiBaseUrl + `/applications`).then((res) => {
      setData(res.data.contents)
    })
  }

  const navigate = useNavigate()

  const acceptApplication = (id) => {
    setRowData({...rowData, status: "Approved"})
    axios.put(env.apiBaseUrl + `/application/approve/${id}`, rowData).then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: "Approved!",
          icon: "success",
          text: "Application Approved Successfully!"
        })
      }
    })
    getAllApplications()
  }

  const denyApplication = (id) => {
    axios.put(env.apiBaseUrl + `/application/deny/${id}`, rowData).then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: "Denied!",
          icon: "success",
          text: "Application Denied Successfully!"
        })
      }
    })
    getAllApplications()
  }

  return (
    <>
      <div className="application-outer">
        <Table striped bordered hover size='md' className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Student Name</th>
              <th>Parent Name</th>
              <th>Aadhar</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Place</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              (data.length > 0) ? (
                data.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.studentName}</td>
                    <td>{row.parentName}</td>
                    <td>{row.aadhar}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>{row.place}</td>
                    <td>{row.gender}</td>
                    <td>{row.dob}</td>
                    <td style={{
                      color: (row.status=='Applied') ? "blue" : (row.status=='Approved') ? "green" : "red"
                    }}>{row.status}</td>
                    <td>
                    <Button variant='primary' disabled={(row.status == 'Approved') ? true : false}
                        title='Accept'
                        className='text-white px-3 py-1'
                        onClick={() => {
                          setRowData(row)
                          acceptApplication(row._id)
                        }}
                      >
                        <i className="fa-solid fa-check"></i>
                      </Button> &nbsp;
                      <Button variant='danger' disabled={(row.status == 'Denied') ? true : false}
                        title='Denied'
                        className='text-white px-3 py-1'
                        onClick={() => {
                          setRowData({...row, status: "Denied"})
                          denyApplication(row._id)
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center" }}>No Record Found!</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Applications