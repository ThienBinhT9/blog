import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
    name:'story',

    initialState:{
        storys:[]
    },

    reducers:{
        add:(state,action) => {
            state.storys = [...state.storys, action.payload]
        }
    }
    
})

export const {add} = storySlice.actions
export default storySlice.reducer