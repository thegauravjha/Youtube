import { configureStore } from '@reduxjs/toolkit'
import HeaderSlice from "./HeaderSlice"
import SearchSlice from './SearchSlice'

export const store = configureStore({
    reducer: {
        HeaderSlice: HeaderSlice,
        SearchSlice: SearchSlice,
    },
})
