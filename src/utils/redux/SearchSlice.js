import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
    name: "SearchSuggestions",
    initialState: {
    },
    reducers: {
        updateCachedResults: (state, action) => {
            Object.assign(state, action.payload);
        }
    }
})

export const {updateCachedResults} = SearchSlice.actions;
export default SearchSlice.reducer;