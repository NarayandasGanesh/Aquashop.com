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

// signout
export const RemoveUserDataAfter = () => async (dispatch) => {
  try {
    const result = dispatch({
      type: types.LOGIN_SET_USER_DATA,
      payload: {},
    });
  } catch (error) {
    console.log("error", error);
  }
};
export const Get_USER_item = () => async (dispatch) => {
  dispatch({ type: types.GET_USER_LOADING });
  try {
    let respnce = await axios.get(`https://next-backend-orpin.vercel.app/user`);
    dispatch({ type: types.GET_USER_SUCCESS, payload: respnce.data });
  } catch (error) {
    dispatch({ type: types.GET_USER_ERROR });
  }
};
export const REMOVE_USER_item = (id) => async (dispatch) => {
  dispatch({ type: types.REMOVE_USERAdmin_LOADING });
  try {
    let res = await axios.delete(
      `https://next-backend-orpin.vercel.app/user/${id}`
    );

    dispatch({ type: types.REMOVE_USERAdmin_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.REMOVE_USERAdmin_ERROR });
  }
};
