import React from 'react'
import Comments from './Comments'
import commentList from '../utils/commentList'

const Commentcontainer = () => {

  return (
    <div>
      <h1 className="font-bold mb-2">Comments</h1>
      {commentList.map((comment,i) => {
        return <Comments key={i} comment={comment} />
      })}
      
    </div>
  )
}

export default Commentcontainer
