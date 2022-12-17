import axios from "axios";
import * as types from "./auth.actionTypes";

// signup
export const AddUser =
  (userData = {}) =>
  async (dispatch) => {
    dispatch({ type: types.ADD_USER_LOADING });
    try {
      let res = await axios.post(
        "https://next-backend-orpin.vercel.app/user",
        userData
      );
      dispatch({ type: types.ADD_USER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: types.ADD_USER_ERROR });
    }
  };

// sigin
export const SetUserDataAfterLogin =
  (userData = {}) =>
  async (dispatch) => {
    try {
      const result = dispatch({
        type: types.LOGIN_SET_USER_DATA,
        payload: userData,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
