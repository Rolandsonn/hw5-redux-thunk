import axios from "axios";
const initialState = {
  posts: [],
  comments: [],
  showComments: true,
};

const ADD_POSTS = "ADD_POSTS";
const ADD_COMMENTS = "ADD_COMMENTS";

export const postsReducer = (state = initialState, action) => {
  if (action.type === ADD_POSTS) {
    return { posts: action.payload };
  } else if (action.type === ADD_COMMENTS) {
    return { ...state, comments: action.payload };
  }
  return state;
};

const addPosts = (payload) => ({ type: ADD_POSTS, payload });
export const addComments = (payload) => ({ type: ADD_COMMENTS, payload });

//thunk
export const fetchPosts = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      dispatch(addPosts(res.data));
    });
  };
};

export const fetchComments = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => dispatch(addComments(res.data)));
  };
};
