import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { getUser } from '../../storage/auth/auth';

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    fetching: false,
    payload: getUser(),
    isLoggedIn: !!getUser(),
    error: null,
  },
  reducers: {
    fetching: state => {
      state.fetching = true;
      state.payload = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    success: (state, { payload }) => {
      state.fetching = false;
      state.payload = payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    logout: state => {
      state.fetching = false;
      state.payload = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    error: (state, { payload }) => {
      state.fetching = false;
      state.payload = null;
      state.isLoggedIn = false;
      state.error = payload;
    }
  }
});

export const { fetching, success, logout, error } = loginSlice.actions;

export const selectAuthFetching = state => state.auth.fetching;
export const selectAuthPayload = state => state.auth.payload;
export const selectAuthError = state => state.auth.error;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;

export default loginSlice.reducer;