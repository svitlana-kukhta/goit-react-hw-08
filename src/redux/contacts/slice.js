import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact} from "../contacts/operations";
import { logout } from "../auth/operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((contact) => contact.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      });
  }
})

export const selectContacts = state => state.contacts.items;
export const selectFilters = (state) => state.filters;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export default contactSlice.reducer;

