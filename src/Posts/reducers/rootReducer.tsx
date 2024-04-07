import { PostsActionTypes } from '../actions/actionTypes';
const { GET_POSTS } = PostsActionTypes;

const initialState = {
  isLoading: false,
  posts: [],
};

function postsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

export default postsReducer;
