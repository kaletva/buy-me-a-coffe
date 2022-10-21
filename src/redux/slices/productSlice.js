import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProductsData = createAsyncThunk(
    'product/fetchProductsData',
    async (val, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://6324bb346f7a75f8b7987bc4.mockapi.io/products?${val.sortControlls > 0 ? `type=${val.sortControlls}` : ""}&sortBy=${val.selectedSortType.sortType}&order=${val.increase ? 'asc' : 'desc'}`)
            if (!response.ok) {
                throw new Error('server error')
            }
            const data = await response.json()
            return data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const initialState = {
    productsData: [

    ],
    loadStatus: null,
    error: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProductsData.pending]: (state) => {
            state.loadStatus = 'loading'
        },
        [fetchProductsData.fulfilled]: (state, action) => {
            state.productsData = action.payload
            state.loadStatus = 'resolved'
        },
        [fetchProductsData.rejected]: (state, action) => {
            state.loadStatus = 'rejected'
            state.error = action.payload    
        }
    }
});

export const { } = productSlice.actions

export default productSlice.reducer