import React from 'react'
import DashMenu from './DashMenu'
import { Outlet } from 'react-router-dom'
import '../scss/DashBoard.scss'

const DashBoard = ({ setLoginStatus }) => {
  return (
    <>
      <div className="dash-container">
        <div className="dash-container--left">
          <DashMenu setLoginStatus={setLoginStatus} />
        </div>
        <div className="dash-container-right">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DashBoard