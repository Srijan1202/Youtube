import React from 'react'
import Image from '../utils/pngwing.com.png'

const Chat = ({name, message}) => {
  return (
    <div className='flex items-center bg-gray-100 rounded-xl hover:bg-gray-300 hover:cursor-pointer py-1 px-5 my-1 mx-1  shadow-lg'>
        <img className='h-5 ' src={Image} alt="commentprofile" />
      <h1 className='font-bold p-2'>{name}</h1>
        <p>{message}</p>
    </div>
  )
}

export default Chat
