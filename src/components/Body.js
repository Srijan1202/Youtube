import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
const Body = () => {
  return (
    <div className="flex mb-28 md:mb-0 overflow-x-hidden">
      <Sidebar />
        <Outlet/>
    </div>
  )
}

export default Body
