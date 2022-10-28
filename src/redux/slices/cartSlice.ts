import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type Cart = {
  name: string,
  param: string,
  count: number,
  totalPrice: number,
  price: number,
  id: string
}
type CartState = {
  cartData: Cart[]
}

const initialState: CartState = {
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
    incrementProductCount: (state, action: PayloadAction<string>) => {
      const product = state.cartData.find(d => d.id === action.payload)
      product && (product.count += 1)
      product && (product.totalPrice += product.price)
    },
    decrementProductCount: (state, action: PayloadAction<string>) => {
      const product = state.cartData.find(d => d.id === action.payload)

      product && (product.count -= 1)
      product && (product.totalPrice -= product.price)
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.cartData.splice(action.payload, 1)
    }
  }
});

export const { addProductToCart, deleteProduct, incrementProductCount, decrementProductCount } = cartSlice.actions

export default cartSlice.reducer