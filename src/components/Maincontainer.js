import React from 'react'
import Videos from './Videos'
import ButtonList from './ButtonList'

const Maincontainer = () => {
  return (
    <div  className='w-screen h-screen'>
        <ButtonList/>
        <Videos/>
    </div>
  )
}

export default Maincontainer
