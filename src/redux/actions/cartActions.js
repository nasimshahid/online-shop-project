import * as cartConstants from '../constants/cartConstants'

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: cartConstants.ADD_TO_CART,
    payload: product
  })
}

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: cartConstants.REMOVE_FROM_CART,
    payload: productId
  })
}

export const updateCartItem = (item) => (dispatch) => {
  dispatch({
    type: cartConstants.UPDATE_CART_ITEM,
    payload: item
  })
}

export const clearCart = () => (dispatch) => {
  dispatch({ type: cartConstants.CLEAR_CART })
}

export const fetchCart = () => (dispatch) => {
  dispatch({ type: cartConstants.FETCH_CART_REQUEST })
  // API call logic will go here
}
