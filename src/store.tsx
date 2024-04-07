import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './Posts/reducers/rootReducer';

export const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools 