import React from 'react'

const Comments = ({comment}) => {
  return (
    <div className="bg-gray-200 p-2 my-2 rounded-xl">
      {comment}
    </div>
  )
}



const Commentcontainer = () => {
  return (
    <div>
      <h1 className="font-bold mb-2">Comments</h1>
      <div>comment 1</div>
      <div>comment 1</div>
      <div>comment 1</div>
      <div>comment 1</div>
    </div>
  )
}

export default Commentcontainer
