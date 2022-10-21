import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import chooseType from './slices/chooseTypeSlice'
import productSlice from './slices/productSlice'

export const store = configureStore({
  reducer: { 
    chooseType, productSlice, cartSlice
  }
})
