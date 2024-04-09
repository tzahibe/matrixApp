import { PostItem } from '../../Types';
import { PostsActionTypes } from '../actions/actionTypes';
import { combineReducers } from "redux";

const { SAVE_POSTS, ADD_LIKES, UPDATE_POST, REMOVE_LIKES }
  = PostsActionTypes;


const initialState = {
  posts: [] as PostItem[]
};

function PostsReducer(state = initialState, action: any) {
  switch (action.type) {
    case SAVE_POSTS: {
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
      };
    }
    case ADD_LIKES: {
      const { id } = action.payload;
      const postIndex = state.posts.findIndex(post => post.id === id);

      if (postIndex !== -1) {
        const updatedPosts: PostItem[] = [...state.posts];
        updatedPosts[postIndex] = { ...updatedPosts[postIndex], likes: updatedPosts[postIndex].likes + 1 };

        return {
          ...state,
          posts: updatedPosts,
        };
      } else {
        return state;
      }
    }
    case REMOVE_LIKES: {
      const { id } = action.payload;
      const postIndex = state.posts.findIndex(post => post.id === id);

      if (postIndex !== -1) {
        const updatedPosts: PostItem[] = [...state.posts];
        updatedPosts[postIndex] = { ...updatedPosts[postIndex], likes: updatedPosts[postIndex].likes - 1 };

        return {
          ...state,
          posts: updatedPosts,
        };
      } else {
        return state;
      }
    }

    case UPDATE_POST: {
      const { item } = action.payload;
      const postIndex = state.posts.findIndex(post => post.id === item.id);

      if (postIndex !== -1) {
        const updatedPosts: PostItem[] = [...state.posts];
        updatedPosts[postIndex] = { ...item };

        return {
          ...state,
          posts: updatedPosts
        };
      }

    }

    default:
      return state;
  }



}


const rootReducer = combineReducers({
  PostsReducer,
});

export default rootReducer;