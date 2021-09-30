import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { BaseService } from '../services/base.service';

const fetchBooks = (apiService: BaseService) => {
  return createAsyncThunk('books/fetchBooks', async () => {
    const response = await apiService.getJSON();
    return response.data;
  });
};

const initialState = {
  books: [],
  count: 0,
};

const { reducer, actions } = createSlice({
  name: 'books',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
});
const { increment } = actions;
const selectRoot = (state: any) => state.book;
export const booksSelectors = {
  books: createSelector(selectRoot, (state) => state.books),
};

export { increment, fetchBooks };

export default reducer;
