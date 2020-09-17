import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './auth/auth';

export default configureStore({
  reducer: {
    auth: loginReducer
  }
});