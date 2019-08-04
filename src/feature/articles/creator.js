import * as actions from './actions';

export const getPostsList = () => dispatch => {
  fetch('https://simple-blog-api.crew.red/posts')
    .then(res => res.json())
    .then(response => {
      dispatch(actions.getArticles(response));
    })
    .catch(error => error);
};

export const getCurrentPost = id => dispatch => {
  fetch(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
    .then(res => res.json())
    .then(response => {
      dispatch(actions.getCurrentPostWithComment(response));
    })
    .catch(error => error);
};

export const addNewComment = h => dispatch => {
  fetch('https://simple-blog-api.crew.red/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(h),
  })
    .then(res => res.json())
    .then(response => dispatch(actions.addNewCommentForCurrentPost(response)))
    .catch(error => error);
};

export const addNewPost = body => dispatch => {
  fetch('https://simple-blog-api.crew.red/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(response => dispatch(actions.addNewPostInList(response)))
    .catch(error => error);
};
