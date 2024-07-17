import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSidebarVisible: true,
}

export const HeaderSlice = createSlice({
    name: "sidebarToggle",
    initialState,
    reducers: {
        sidebarToggle: (state) => {
            state.isSidebarVisible = !state.isSidebarVisible
        }
    }
});

export const { sidebarToggle } = HeaderSlice.actions
export default HeaderSlice.reducer
