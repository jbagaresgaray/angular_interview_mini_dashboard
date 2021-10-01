import { createFeatureSelector } from '@ngrx/store';
import { createSlice, createSelector } from '@reduxjs/toolkit';

export interface FormattedBooks {
  id: string;
  name: string;
  image: string;
  type: string;
  created_at: string;
  link: string;
}

const initialState = {
  books: [],
  formattedBooks: [],
  count: 0,
};

const { reducer, actions, name } = createSlice({
  name: 'books',
  initialState,
  reducers: {
    populateBooks: (state, { payload }) => {
      state.books = payload;
    },
    populateFormattedBooks: (state, { payload }) => {
      state.formattedBooks = payload;
    },
  },
});

const { populateBooks, populateFormattedBooks } = actions;
const selectFeature = createFeatureSelector<ReturnType<typeof reducer>>(name);

export const booksSelectors = {
  books: createSelector(selectFeature, (state) => state.books),
  formattedBooks: createSelector(selectFeature, (state) => state.formattedBooks),
};

export { populateBooks, populateFormattedBooks };

export default reducer;
