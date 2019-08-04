import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CreatePost = props => {
  const body = React.createRef();
  const title = React.createRef();

  return (
    <>
      <form className="form">
        <h2>Create your new post!</h2>
        <label>
          <span className="label">Title:</span>
          <input type="text" ref={title} />
        </label>
        <label>
          <span className="label">Body:</span>
          <input type="text" ref={body} />
        </label>
        <Link
          to="/"
          onClick={() =>
            props.addNewPost({
              title: title.current.value,
              body: body.current.value,
            })
          }
          className="button"
        >
          Create new post
        </Link>
      </form>
    </>
  );
};

CreatePost.propTypes = {
  addNewPost: PropTypes.func.isRequired,
};

export default CreatePost;
