import { configureStore } from '@reduxjs/toolkit'

import productReducer from './productSlice'
import storySlice from './storySlice'

export default configureStore({
    reducer:{
        product:productReducer,
        story:storySlice
    }
    
})