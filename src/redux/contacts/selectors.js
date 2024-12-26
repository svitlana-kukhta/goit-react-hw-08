import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";
import { selectContacts } from "../contacts/slice";

export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {const { name, number } = filters;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()) &&
      contact.number.includes(number)
    );
  }
);