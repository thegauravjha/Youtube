import { configureStore } from '@reduxjs/toolkit'
import HeaderSlice from "./HeaderSlice"

export const store = configureStore({
    reducer: {
        HeaderSlice: HeaderSlice
    },
})
