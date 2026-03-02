import {configureStore} from '@reduxjs/toolkit'
import ordersReducer from './slices/ordersSlice.js'
import productsReducer from './slices/productsSlice.js'

export const store = configureStore({
  reducer: {
    orders: ordersReducer, products: productsReducer,
  },
})