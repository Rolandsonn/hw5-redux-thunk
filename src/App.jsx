import { useDispatch, useSelector } from "react-redux";
import Posts from "./components/posts/Posts";
import { fetchPosts } from "./store/postsReducer";
import Comments from "./components/comments/Comments";
const App = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(fetchPosts());
  };
  const comments = useSelector((state) => state.comments);

  return (
    <div className="app">
      <button onClick={onSubmit}>Показать посты</button>
      {comments && posts && <Comments />}
      {posts && <Posts />}
    </div>
  );
};

export default App;
