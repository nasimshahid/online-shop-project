import * as cartConstants from '../constants/cartConstants'

const initialState = {
  loading: false,
  cartItems: [],
  error: null
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    case cartConstants.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      }
    case cartConstants.UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      }
    case cartConstants.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    case cartConstants.FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
        error: null
      }
    default:
      return state
  }
}
