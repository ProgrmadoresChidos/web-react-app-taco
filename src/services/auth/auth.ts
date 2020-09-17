import axios from "axios";
import { fetching, success, logout, error } from "../../redux/auth/auth";
import { saveUser, removeUser } from "../../storage/auth/auth";

export const login = (email, password, save) => async dispatch => {
  dispatch(fetching());
  try {
    // TODO Crear una variable en env para la url de la api
    const resp = await axios.post("/auth/login", {
      email,
      password,
    });
    console.log(resp);
    dispatch(success(resp.data));
    saveUser(resp.data, save);
  } catch (err) {
    const errorMessage = !!err.response ? err.response.data : err;
    dispatch(error(errorMessage));
  }
};

export const logoutService = () => async dispatch => {
  dispatch(fetching())
  removeUser();
  setTimeout(()=>{
    dispatch(logout())
  },1000)
};

export const signup = ({
  firstName: name,
  lastName,
  email,
  password,
  save
}) => async dispatch => {
  dispatch(fetching());
  try {
    const res = await axios.post("/auth/signup", {
      name,
      lastName,
      email,
      password,
    });
    dispatch(
      success({
        user: res.data,
      })
    );
    saveUser(res.data, save);
  } catch (err) {
    const errorMessage = !!err.response ? err.response.data : err;
    dispatch(
      error({
        error: errorMessage,
      })
    );
  }
};
