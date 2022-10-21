import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartData: [
    ]
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const filter = state.cartData.find(d => d.id === action.payload.id)
      if (filter) {
        filter.count += 1
        filter.totalPrice += filter.price
      } else {
        state.cartData.push(action.payload)
      }
      
    },
    incrementProductCount: (state, action) => {
      const product = state.cartData.find(d => d.id === action.payload)
      product.count += 1
      product.totalPrice += product.price
    },
    decrementProductCount: (state, action) => {
      const product = state.cartData.find(d => d.id === action.payload)
      product.count -= 1
      product.totalPrice -= product.price


    },
    deleteProduct: (state, action) => {
        state.cartData.splice(action.payload, 1)
    }
  }
});

export const {addProductToCart, deleteProduct, incrementProductCount, decrementProductCount} = cartSlice.actions

export default cartSlice.reducer