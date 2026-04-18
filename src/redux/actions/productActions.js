import * as productConstants from '../constants/productConstants'

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: productConstants.FETCH_PRODUCTS_REQUEST })
  // API call logic will go here
}

export const fetchProductDetails = (productId) => (dispatch) => {
  dispatch({ type: productConstants.FETCH_PRODUCT_DETAILS_REQUEST })
  // API call logic will go here
}

export const createProduct = (productData) => (dispatch) => {
  dispatch({ type: productConstants.CREATE_PRODUCT_REQUEST })
  // API call logic will go here
}

export const updateProduct = (productId, productData) => (dispatch) => {
  dispatch({ type: productConstants.UPDATE_PRODUCT_REQUEST })
  // API call logic will go here
}

export const deleteProduct = (productId) => (dispatch) => {
  dispatch({ type: productConstants.DELETE_PRODUCT_REQUEST })
  // API call logic will go here
}
