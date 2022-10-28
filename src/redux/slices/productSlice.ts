import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type fetchValueTypes = {
    sortControlls: number,
    selectedSortType: string,
    increase: boolean
}

type productsDataTypes = {
    id: number,
    name: string,
    img: string,
    price: number,
    type: number,
    params: string[]
}

interface ProductStateI {
    productsData: productsDataTypes[],
    loadStatus: any,
    error: any
}



export const fetchProductsData = createAsyncThunk<productsDataTypes[], fetchValueTypes, { rejectValue: string }>(
    'product/fetchProductsData',
    async (val, { rejectWithValue }) => {

        const response = await fetch(`https://6324bb346f7a75f8b7987bc4.mockapi.io/products?${val.sortControlls > 0 ? `type=${val.sortControlls}` : ""}&sortBy=${val.selectedSortType}&order=${val.increase ? 'asc' : 'desc'}`)
        if (!response.ok) {
            return rejectWithValue('server error')
        }

        const data = await response.json()

        return data

    }
)



const initialState: ProductStateI = {
    productsData: [

    ],
    loadStatus: null,
    error: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsData.pending, (state) => {
            state.loadStatus = 'loading'
        })
        .addCase(fetchProductsData.fulfilled, (state, action) => {
            state.productsData = action.payload
            state.loadStatus = 'resolved'
        })
        .addCase(fetchProductsData.rejected, (state, action) => {
            state.loadStatus = 'rejected'
            state.error = action.payload
        })
        // [fetchProductsData.pending]: (state) => {
            //     state.loadStatus = 'loading'
            // },
        // [fetchProductsData.fulfilled]: (state, action) => {
        //     state.productsData = action.payload
        //     state.loadStatus = 'resolved'
        // },
        // [fetchProductsData.rejected]: (state, action) => {
        //     state.loadStatus = 'rejected'
        //     state.error = action.payload
        // }
    }
});

export const { } = productSlice.actions

export default productSlice.reducer