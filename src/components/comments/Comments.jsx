import { useSelector } from "react-redux";
import CommentsItem from "./CommentsItem";

const Comments = () => {
  const comments = useSelector((state) => state.comments);

  const commentElem =
    comments &&
    comments.map((item) => <CommentsItem key={item.id} {...item} />);

  return <ul className="comments__list">{commentElem}</ul>;
};

export default Comments;
