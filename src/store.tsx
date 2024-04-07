import { configureStore } from '@reduxjs/toolkit';
import PostsReducer from './Posts/reducers/postReducer';


export const store = configureStore({ reducer: PostsReducer });
// The store now has redux-thunk added and the Redux DevTools 