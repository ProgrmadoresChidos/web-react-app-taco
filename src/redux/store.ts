import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './auth/auth';
import signupReducer from './signup/signupSlice';

export default configureStore({
  reducer: {
    auth: loginReducer,
    signup: signupReducer
  }
});