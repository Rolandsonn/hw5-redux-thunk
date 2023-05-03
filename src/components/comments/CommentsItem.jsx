const CommentsItem = ({ name, body, email }) => {
  return (
    <li className="comments__item">
      <h3>{name}</h3>
      <p>{body}</p>
      <p>{email}</p>
    </li>
  );
};

export default CommentsItem;
