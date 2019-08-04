import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import CreatePost from './component';

import { addNewPost } from '../../creator';

export const CreatePostContainer = props => <CreatePost addNewPost={props.addNewPost} />;

const mapDispatchToProps = {
  addNewPost,
};

CreatePostContainer.propTypes = {
  addNewPost: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(CreatePostContainer);
