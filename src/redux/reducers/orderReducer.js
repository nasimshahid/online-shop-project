import * as orderConstants from '../constants/orderConstants'

const initialState = {
  loading: false,
  orders: [],
  orderDetails: null,
  error: null
}

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case orderConstants.FETCH_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case orderConstants.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: null
      }
    case orderConstants.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case orderConstants.FETCH_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderDetails: action.payload
      }
    default:
      return state
  }
}
