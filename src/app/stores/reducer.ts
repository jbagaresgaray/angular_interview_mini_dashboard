import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import booksReducer from './bookSlice';

export const reducers: any = combineReducers({
  books: booksReducer,
});

export const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    stateReconciler: hardSet,
  },
  reducers
);
