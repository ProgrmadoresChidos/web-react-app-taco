import { configureStore } from '@reduxjs/toolkit';
import testReducer from './features/testSlice';
import signupReducer from './signup/signupSlice';

export default configureStore({
  reducer: {
    test: testReducer,
    signup: signupReducer
  }
});