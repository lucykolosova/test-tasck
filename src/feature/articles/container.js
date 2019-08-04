import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPostsList } from './creator';
import PostsComponent from './component';
import mapStateToProps from './selectors';

export class PostsContainer extends Component {
  componentDidMount() {
    this.props.getPostsList();
  }

  render() {
    return <PostsComponent {...this.props} openPostPreview={this.openPostPreview} />;
  }
}

PostsContainer.propTypes = {
  getPostsList: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getPostsList,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(PostsContainer);
