import * as productConstants from '../constants/productConstants'

const initialState = {
  loading: false,
  products: [],
  productDetails: null,
  error: null
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productConstants.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case productConstants.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null
      }
    case productConstants.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case productConstants.FETCH_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload
      }
    default:
      return state
  }
}
