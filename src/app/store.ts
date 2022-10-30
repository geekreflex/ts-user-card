import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modalSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
