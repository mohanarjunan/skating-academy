import React from 'react'
import '../scss/DashBoard.scss'
import DashMenu from './DashMenu'
import { Outlet } from 'react-router-dom'


const Dashboard = ({ setLoginStatus }) => {
  return (
    <div className="dash-container">
      <div className="dash-container--left">
        <DashMenu setLoginStatus={setLoginStatus} />
      </div>
      <div className="dash-container-right">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard