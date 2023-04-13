import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name:'products',
    initialState:{
        cart: []
    },
    reducers:{
        add:(state,action) => {
            state.cart = [...state.cart, action.payload]
        },
        deleteProduct:(state,action) => {
            const newList = [...state.cart]
            newList.splice(action.payload,1)
            state.cart = newList
        },
        updateProduct:(state,action) => {
            const newItem = action.payload
            const indexItemOld = state.cart.findIndex(e => e.slug === action.payload.slug)
            const newList = [...state.cart]
            newList[indexItemOld] = newItem
            state.cart = newList
        }
        

    }
    
})

export const { add, deleteProduct, updateProduct } = productSlice.actions
export default productSlice.reducer