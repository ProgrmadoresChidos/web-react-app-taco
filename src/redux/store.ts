import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './auth/loginSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
  }
});