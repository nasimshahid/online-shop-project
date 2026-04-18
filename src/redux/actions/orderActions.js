import * as orderConstants from '../constants/orderConstants'

export const fetchOrders = () => (dispatch) => {
  dispatch({ type: orderConstants.FETCH_ORDERS_REQUEST })
  // API call logic will go here
}

export const fetchOrderDetails = (orderId) => (dispatch) => {
  dispatch({ type: orderConstants.FETCH_ORDER_DETAILS_REQUEST })
  // API call logic will go here
}

export const createOrder = (orderData) => (dispatch) => {
  dispatch({ type: orderConstants.CREATE_ORDER_REQUEST })
  // API call logic will go here
}

export const updateOrderStatus = (orderId, status) => (dispatch) => {
  dispatch({ type: orderConstants.UPDATE_ORDER_STATUS_REQUEST })
  // API call logic will go here
}
