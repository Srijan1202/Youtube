import { useEffect } from 'react'
import { youtube } from '../utils/constants';

const Videos = () => {

  useEffect(() => {
    getvideos();
  },[])

const getvideos = async () => {
  const response = await fetch(youtube); 
  const data = await response.json();
  console.log(data);  
}

  
  return (
    <div>
      Videos
    </div>
  )
}

export default Videos
