import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-gray-500 text-white py-2 px-5 my-2 mx-1 rounded-xl hover:bg-gray-600 hover:cursor-pointer'>
      {name}
    </div>
  )
}

export default Button
