import { useEffect } from 'react'
import { youtube } from '../utils/constants';
import { useState } from 'react';
import Videocards from './Videocards';

const Videos = () => {

  const [video,setVideo] = useState([]);

  useEffect(() => {
    getvideos();
  },[])

const getvideos = async () => {
  const response = await fetch(youtube); 
  const data = await response.json();
  // console.log(data.items[0]);    
  setVideo(data.items);
}
  return (
    <div className='flex flex-wrap'>
      {video.map((item)=><Videocards info={item}/>)}
      
    </div>
  )
}

export default Videos
