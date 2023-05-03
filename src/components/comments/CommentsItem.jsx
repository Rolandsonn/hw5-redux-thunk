const CommentsItem = ({ name, body, email }) => {
  return (
    <li className="comments__item">
      <h3 className="comments__name">{name}</h3>
      <p className="comments__body">{body}</p>
      <p className="comments__email">{email}</p>
    </li>
  );
};

export default CommentsItem;
