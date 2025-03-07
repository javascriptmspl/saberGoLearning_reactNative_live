import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface initialState {
  ratingCount: number;
  category: string;
}

const initialState: initialState = {
  ratingCount: 5,
  category: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<any>) => {
      state.ratingCount = action.payload;
    },
    setCategory: (state, action: PayloadAction<any>) => {
      state.category = action.payload;
    },
    resetFilter: (state, action: PayloadAction<any>) => {
      state.category = '';
      state.ratingCount = 5;
    },
  },
});

export const {setRating, setCategory, resetFilter} = filterSlice.actions;
// ===> SELECTORS

export default filterSlice.reducer;
