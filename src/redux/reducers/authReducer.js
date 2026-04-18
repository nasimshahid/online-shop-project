import * as authConstants from '../constants/authConstants'

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  isAuthenticated: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case authConstants.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null
      }
    case authConstants.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      }
    case authConstants.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        error: null
      }
    default:
      return state
  }
}
