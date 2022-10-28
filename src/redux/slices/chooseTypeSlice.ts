import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: ['All', 'Drinks', 'Food'],
  value: 0,
  sortInfo: {sortType: 'price', increase: true}
}

export const chooseType = createSlice({
  name: 'choose',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
    setSortInfo: (state, action) => {
      state.sortInfo = action.payload
    },
    changeIncrease: (state, action) => {
      state.sortInfo.increase = action.payload
    }

  }
})
export const { incrementByAmount, setSortInfo, changeIncrease } = chooseType.actions

export default chooseType.reducer