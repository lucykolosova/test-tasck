import * as type from './type';

export function getArticles(payload) {
  return {
    type: type.GET_ARTICLE,
    payload,
  };
}

export function getCurrentPostWithComment(payload) {
  return {
    type: type.GET_CURRENT_POST_WITH_COMMETS,
    payload,
  };
}

export function addNewCommentForCurrentPost(payload) {
  return {
    type: type.ADD_NEW_COMMENT_FOR_POST,
    payload,
  };
}

export function addNewPostInList(payload) {
  return {
    type: type.ADD_NEW_POST,
    payload,
  };
}