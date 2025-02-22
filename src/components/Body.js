import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
const Body = () => {
  return (
    <>
    <div className="flex mb-28 md:mb-0 overflow-x-hidden">
      {/* <Sidebar /> */}
    <div className="flex mb-28 md:mb-0">
      <Sidebar />
        
      <Maincontainer />
    </div>

        {/* <Outlet/> */}
    </div>
    </>
  )
}

export default Body
