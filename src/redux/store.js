import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import authReducer from './reducers/authReducer'
// import productReducer from './reducers/productReducer'
// import cartReducer from './reducers/cartReducer'
// import orderReducer from './reducers/orderReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  // products: productReducer,
  // cart: cartReducer,
  // orders: orderReducer
})

// const middleware = [thunk]

// const store = createStore(
//   rootReducer,
//   applyMiddleware(...middleware)
// )
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
