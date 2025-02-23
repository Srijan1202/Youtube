import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Chat from './Chat'
import { addMessage } from '../utils/chatSlice'
import { useSelector } from 'react-redux'
import { generate } from '../utils/helper.js'
import { makeid } from '../utils/helper.js'

const Livechat = () => {
  const dispatch = useDispatch();

  const [livemessages,setLivemessages] = React.useState([])


    useEffect(()=>
    {
        const i = setInterval(()=>{
            
            dispatch(addMessage({name:generate(),message:makeid(20),}))
        },150)

        return ()=>clearInterval(i)
    },[])

    const messages = useSelector(state=>state.chat.messages)
    

  return (
    <div>
    <div className=' text-black bg-gray-200 h-[600px] overflow-y-scroll rounded-lg flex flex-col-reverse'>
      {messages.map((mes,i)=>{return <Chat key={i} name={mes.name} message={mes.message}/>})}
    </div>
    <form className='flex bg-slate-500' onSubmit={(e) => {
      e.preventDefault();
      dispatch(addMessage({name:'Srijan',message:livemessages}))
    }}>
    <input className='w-full bg-gray-200 p-2' type="text" placeholder='Type your message here' 
    value={livemessages}
    onChange={(e)=>setLivemessages(e
    .target.value)}
    />
    <button className=' w-20 bg-gray-200'>Submit</button>
    </form>
    </div>
  )
}

export default Livechat
