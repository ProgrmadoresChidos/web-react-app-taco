import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0,
    fetching: false,
    payload: null,
    error: null,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    fetching: state => {
      state.fetching = true;
      state.payload = null;
      state.error = null;
    },
    success: (state, { payload }) => {
      state.fetching = false;
      state.payload = payload.user;
      state.error = null;
    },
    error: (state, { payload }) => {
      state.fetching = false;
      state.payload = null;
      state.error = payload.error;
    }
  }
});

export const { increment, fetching, success, error } = testSlice.actions;

export const login = (email, password) => async dispatch => {
  dispatch(fetching());
  try {
    const res = await axios.post('http://localhost:8080/auth/login', {
      email,
      password
    })
    setTimeout(() => {
      dispatch(success({
        user: res.data,
      }));
    }, 3000);
  } catch (err) {
    console.log(err.response);
    setTimeout(() => {
      dispatch(error({
        error: err.response.data,
      }));
    }, 1000);
  }
};

export const selectTestValue = state => state.test.value;
export const selectTestFetching = state => state.test.fetching;
export const selectTestUser = state => state.test.payload;
export const selectTestError = state => state.test.error;

export default testSlice.reducer;