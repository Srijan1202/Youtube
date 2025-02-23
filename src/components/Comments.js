import photo from "../utils/pngwing.com.png";   

const Comments = ({ comment }) => {
  return (
    <div>
      <div className="bg-gray-200 p-2 my-2 rounded-xl flex allign-center">
        <img className="h-10 pr-2" src={photo} alt="" />
        <div>
        {comment.name}
        <p>{comment.comment}</p>
        </div>
      </div>
      <div className="pl-10 border-l-2">
        {comment.reply.map((reply,i) => {
            return <Comments key={i} comment={reply} />
        })}
      </div>
    </div>
  );
};

export default Comments;
