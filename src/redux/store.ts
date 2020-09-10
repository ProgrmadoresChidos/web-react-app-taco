import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/loginSlice';
import signupReducer from './signup/signupSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer
  }
});