import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostsComponent = props => (
  <div className="container">
    <NavLink to="/createpost" className="createPostButton">
      Create new post
    </NavLink>
    <ul className="postsList">
      {props.posts.map(post => (
        <li className="posts" key={post.id}>
          <div className="wrap">
            <div>
              <h2>
                <NavLink to={`/posts/${post.id}/`}>{post.title}</NavLink>
              </h2>
              <p>{post.body}</p>
              <p>
                <span>{post.creator}</span>
                <span>{post.date}</span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

PostsComponent.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      date: PropTypes.string,
      creator: PropTypes.string,
    }),
  ).isRequired,
};

export default PostsComponent;
