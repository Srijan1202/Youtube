import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
    const isMenu  = useSelector((store)=>store.app.isMenuOpen);

    if (!isMenu ) return null

  return (

    <div className='w-48 h-screen p-5 shadow-lg'>
        <h1 className='font-bold'>Subscription</h1>
        <ul className='pb-5'>
            <li>carry Minati</li>
            <li>career247</li>
            <li>Shark Tank India</li>
            <li>Code With Harry</li>
        </ul>
        <h1 className='font-bold pt-5 border-t-2 border-gray-400'>Gaming</h1>
        <ul className='pb-5'>
            <li>Minecraft</li>
            <li>GTA-5</li>
            <li>Call Of Duty</li>
            <li>Clash Royal</li>
        </ul>
        <h1 className='font-bold pt-5 border-t-2 border-gray-400'>Sport</h1>
        <ul className='pb-5'>
            <li>Cricket</li>
            <li>football</li>
            <li>Volleyball</li>
            <li>Rugby</li>
        </ul>
    </div>
  )
}

export default Sidebar
