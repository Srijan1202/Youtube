import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Chat from './Chat'

const Livechat = () => {
  const dispatch = useDispatch();


    useEffect(()=>
    {
        const i = setInterval(()=>{
            console.log("running")
        },2000)

        return ()=>clearInterval(i)
    },[])
  return (
    <div className=' text-black bg-gray-200 h-[600px] overflow-y-scroll'>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
      <Chat name={"srijan"} message={"i am good"}/>
    </div>
  )
}

export default Livechat
