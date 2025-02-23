import { createSlice } from "@reduxjs/toolkit";

const serchresSlice = createSlice({
  name: "serchres",
  initialState: {
    searchResults: {}, // ✅ Ensuring a structured initial state
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = { ...state.searchResults, ...action.payload }; // ✅ Correctly updating state
    },
  },
});

export const { setSearchResults } = serchresSlice.actions;

export default serchresSlice.reducer;
