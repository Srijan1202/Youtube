import React from 'react'
import Videos from './Videos'
import ButtonList from './ButtonList'

const Maincontainer = () => {
  return (
    <div className='flex'>
        <ButtonList/>
        <Videos/>
    </div>
  )
}

export default Maincontainer
