import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice';
import logger from 'redux-logger';
import courseReducer from './feature/course/courseSlice';
import filterSlice from './feature/filter/filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    filter: filterSlice
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
