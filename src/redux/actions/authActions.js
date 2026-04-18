import * as authConstants from '../constants/authConstants'
import { authService } from '../../services/authService'

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: authConstants.AUTH_LOGIN_REQUEST });

    const response = await authService.login({
      email,
      password,
    });
  console.log("Login response:Action", response);
    dispatch({
      type: authConstants.AUTH_LOGIN_SUCCESS,
      payload: {
        user: response.user,
        token: response.token,
      },
    });

    return response; // ✅ must return
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Login failed";

    dispatch({
      type: authConstants.AUTH_LOGIN_FAILURE,
      payload: errorMessage,
    });

    throw new Error(errorMessage);
  }
};

export const signupUser = (userData) => (dispatch) => {
  dispatch({ type: authConstants.AUTH_SIGNUP_REQUEST })
  // API call logic will go here
}

export const verifyEmail = (email, otp) => (dispatch) => {
  dispatch({ type: authConstants.AUTH_VERIFY_EMAIL_REQUEST })
  // API call logic will go here
}

export const forgotPassword = (email) => (dispatch) => {
  dispatch({ type: authConstants.AUTH_FORGOT_PASSWORD_REQUEST })
  // API call logic will go here
}

export const resetPassword = (email, otp, newPassword) => (dispatch) => {
  dispatch({ type: authConstants.AUTH_RESET_PASSWORD_REQUEST })
  // API call logic will go here
}

export const logout = () => (dispatch) => {
  dispatch({ type: authConstants.AUTH_LOGOUT })
}
