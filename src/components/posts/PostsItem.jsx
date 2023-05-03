import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../store/postsReducer";
import { addComments } from "../../store/postsReducer";

const PostsItem = ({ title, id }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const onSubmit = () => {
    dispatch(fetchComments(id));
  };

  const clearComments = () => {
    dispatch(addComments());
  };

  return (
    <li className="post__item">
      {!comments ? (
        <button className="post__btn" onClick={onSubmit}>
          Show Comments
        </button>
      ) : (
        <button className="post__btn" onClick={clearComments}>
          Hide Comments
        </button>
      )}

      <h2>{title}</h2>
    </li>
  );
};

export default PostsItem;
