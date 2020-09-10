import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './auth/loginSlice';
import signupReducer from './signup/signupSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer
  }
});