import { configureStore } from '@reduxjs/toolkit'
import chooseType from './slices/chooseTypeSlice'

export const store = configureStore({
  reducer: { 
    chooseType
  }
})
