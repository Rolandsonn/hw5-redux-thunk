import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../store/postsReducer";
import { addComments } from "../../store/postsReducer";

const PostsItem = ({ title, id }) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const onSubmit = () => {
    dispatch(fetchComments(id));
    setIsCommentsVisible(true);
  };

  const clearComments = () => {
    dispatch(addComments());
    setIsCommentsVisible(false);
  };

  return (
    <li className="post__item">
      {!isCommentsVisible && id ? (
        <button className="post__btn" onClick={onSubmit}>
          Show Comments
        </button>
      ) : (
        <>
          <button className="post__btn" onClick={clearComments}>
            Hide Comments
          </button>
        </>
      )}

      <h2>{title}</h2>
    </li>
  );
};

export default PostsItem;
