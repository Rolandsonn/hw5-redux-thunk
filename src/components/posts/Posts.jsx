import { useSelector } from "react-redux";
import PostsItem from "./PostsItem";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const postElem =
    posts && posts.map((item) => <PostsItem key={item.id} {...item} />);

  return <ol>{postElem}</ol>;
};

export default Posts;
