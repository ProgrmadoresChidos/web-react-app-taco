import axios from 'axios';
import { fetching, success, error } from '../../redux/auth/auth';
import { saveUser } from '../../storage/auth/auth';

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
    saveUser(resp.data);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    const errorMessage = !!err.response ? err.response.data : err;
    console.log(errorMessage);
    dispatch(error(errorMessage));
  }
};

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