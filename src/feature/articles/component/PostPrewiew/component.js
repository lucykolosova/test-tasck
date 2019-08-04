import React from 'react';
import PropTypes from 'prop-types';

const PostPreview = props => {
  const textArea = React.createRef();

  return (
    <div className="containerPostPreview">
      <div className="postBody">
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
        <p>{props.post.creator}</p>
        <p>{props.post.date}</p>
      </div>

      <div>
        <h4>Comments</h4>
        <ul>
          {props.post.comments &&
            props.post.comments.map(
              comment =>
                comment.body && (
                  <li key={comment.id} className="postComment">
                    {comment.body}
                  </li>
                ),
            )}
        </ul>
        <form className="form" name="createComment">
          <h3>Add new comment</h3>
          <textarea ref={textArea} className="textArea" />
          <input
            type="button"
            className="button"
            value="Add new comment"
            onClick={() =>
              props.addNewComment({
                postId: props.post.id,
                body: textArea.current.value,
              })
            }
          />
        </form>
      </div>
    </div>
  );
};

PostPreview.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    creator: PropTypes.string,
    date: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        body: PropTypes.string,
      }),
    ),
  }).isRequired,
  addNewComment: PropTypes.func.isRequired,
};

export default PostPreview;
