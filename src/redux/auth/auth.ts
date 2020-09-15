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

// export const login = (email, password) => async dispatch => {
//   dispatch(fetching());
//   try {
//     // TODO Crear una variable en env para la url de la api
//     const resp = await axios.post('/auth/login',
//       {
//         email,
//         password,
//       }
//     );
//     console.log(resp);
//     dispatch(success(resp.data));
//     saveUser(resp.data);
//   } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
//     const errorMessage = !!err.response ? err.response.data : err;
//     console.log(errorMessage);
//     dispatch(error(errorMessage));
//   }
// };

export const selectAuthFetching = state => state.auth.fetching;
export const selectAuthPayload = state => state.auth.payload;
export const selectAuthError = state => state.auth.error;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;

export default loginSlice.reducer;