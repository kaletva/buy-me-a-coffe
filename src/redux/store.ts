import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import chooseType from './slices/chooseTypeSlice'
import productSlice from './slices/productSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { 
    chooseType, productSlice, cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch 