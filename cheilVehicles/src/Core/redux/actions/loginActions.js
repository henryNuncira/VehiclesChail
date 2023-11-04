// Estado de los reducer de login
import { signInUserService } from "../services/mainServices";
import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../types";

// Consumir WS de login
export const loginUser = (email, pass, props) => {
  
  const loginUser = () => ({
    type: LOGIN_USER,
  });


  // SI HUBO ERROR
  const loginError = estado => ({
    type: LOGIN_ERROR,
    payload: estado,
  });

  return async dispatch => {
    let sw = true;

    if (sw) {
      dispatch(loginUser());
      try {
        // extraer la data del usuario
        const userCredentials = {
          email: email,
          password: pass,
        };
        const response = await signInUserService(userCredentials);
        console.log(response)
        if (response.data?.status === "400" )
          {dispatch(loginError("Verify your credentials, Email invalid"));
        return false}
        if ( response.data?.status === "404")
        {
          dispatch(loginError("Invalid credentials"));
          return false;
        }
        
        if (response.data.token !== null) {
          window.localStorage.setItem("token", response.data.token);
          window.localStorage.setItem("logged", true);
            await dispatch({ type: LOGIN_SUCCESS,
              payload: response.data,});
            return true;
        }
      } catch (error) { }
    }
  };
};
