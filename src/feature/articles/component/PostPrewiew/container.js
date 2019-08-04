import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import mapStateToProps from './selectors';
import PostPreview from './component';

import { getCurrentPost, addNewComment } from '../../creator';

export class PostPreviewContainer extends Component {
  componentDidMount() {
    this.props.getCurrentPost(this.props.match.params.id);
  }

  render() {
    return <PostPreview post={this.props.currentPost} addNewComment={this.props.addNewComment} />;
  }
}

PostPreviewContainer.propTypes = {
  currentPost: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    creator: PropTypes.string,
  }).isRequired,
  addNewComment: PropTypes.func.isRequired,
  getCurrentPost: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mapDispatchToProps = {
  getCurrentPost,
  addNewComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPreviewContainer);
