import * as type from './type';

const stateInit = {
  posts: [],
  errorMassage: null,
  currentPost: {},
};

function postsReducer(state = stateInit, action) {
  switch (action.type) {
    case type.GET_ARTICLE:
      return {
        ...state,
        posts: [...action.payload],
      };
    case type.GET_CURRENT_POST_WITH_COMMETS:
      return {
        ...state,
        currentPost: action.payload,
      };
    case type.ADD_NEW_COMMENT_FOR_POST:
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          comments: [...state.currentPost.comments, action.payload],
        },
      };
    case type.ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
}

export default postsReducer;
