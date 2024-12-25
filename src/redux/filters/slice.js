import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "", number: "" },
  reducers: {
    changeNameFilter: (state, action) => {
      state.name = action.payload;
    },
    changeNumberFilter: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { changeNameFilter, changeNumberFilter } = filtersSlice.actions;
export const selectFilters = state => state.filters;
export const selectNameFilter = state => state.filters.name;
export const selectNumberFilter = state => state.filters.number;


export default filtersSlice.reducer;





