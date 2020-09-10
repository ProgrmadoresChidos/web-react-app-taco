import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        fetching: false,
        payload: null,
        error: null
    },
    reducers: {
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
})

export const { fetching, success, error } = signupSlice.actions;

export const signup = ({ firstName: name, lastName, email, password }) => async dispatch => {
    dispatch(fetching());
    try {

        const res = await axios.post('/auth/signup',
            {
                name,
                lastName,
                email,
                password
            }
        )
        dispatch(success({
            user: res.data
        }))
    } catch (err) {
        const errorMessage = !!err.response ? err.response.data : err;
        dispatch(error({
            error: errorMessage,
        }))
    }
}

export const selectSignupFetching = state => state.signup.fetching;
export const selectSignupUser = state => state.signup.payload;
export const selectSignupError = state => state.signup.error;

export default signupSlice.reducer;