import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    fetching: false,
    payload: null,
    error: null,
  },
  reducers: {
    fetching: state => {
      state.fetching = true;
      state.payload = null;
      state.error = null;
    },
    success: (state, { payload }) => {
      state.fetching = false;
      state.payload = payload;
      state.error = null;
    },
    error: (state, { payload }) => {
      state.fetching = false;
      state.payload = null;
      state.error = payload;
    }
  }
});

export const { fetching, success, error } = loginSlice.actions;

export const login = (email, password) => async dispatch => {
  dispatch(fetching());
  try {
    // TODO Crear una variable en env para la url de la api
    const resp = await axios.post('/auth/login',
      {
        email,
        password,
      }
    );
    console.log(resp);
    dispatch(success(resp.data));
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    const errorMessage = !!err.response ? err.response.data : err;
    console.log(errorMessage);
    dispatch(error(errorMessage));
  }
};

export const selectLoginFetching = state => state.login.fetching;
export const selectLoginPayload = state => state.login.payload;
export const selectLoginError = state => state.login.error;

export default loginSlice.reducer;