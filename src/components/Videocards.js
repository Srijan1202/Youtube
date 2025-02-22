import React from 'react'

const Videocards = ({info}) => {
    // console.log(info);
    if(!info) return null;
   const  {snippet,statistics} = info;
    const {title,channelTitle,thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="img" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>view{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export default Videocards
