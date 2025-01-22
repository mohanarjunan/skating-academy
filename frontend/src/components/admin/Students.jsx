import axios from 'axios'
import React, { useEffect, useState } from 'react'
import env from '../env.json'
import { Table } from 'react-bootstrap'

const Students = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getAllStudents()
  }, [])

  const getAllStudents = () => {
    axios.get(env.apiBaseUrl + `/registrations`).then((res) => {
      if (res.data.status) {
        setData(res.data.contents)
      }
    })
  }

  return (
    <>
      <div className="students-outer">
      <Table striped bordered hover size='md'>
        <thead>
          <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {
            (data.length > 0) ? (
              data.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.studentName}</td>
                  <td>{row.email}</td>
                  <td>{row.password}</td>
                  <td>{row.phone}</td>
                  <td>{row.gender}</td>
                  <td>{row.dob}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} style={{textAlign: "center"}}>No Record Found!</td>
              </tr>
            )
          }
        </tbody>
      </Table>
      </div>
    </>
  )
}

export default Students