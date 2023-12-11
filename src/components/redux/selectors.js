/*8import { createSelector } from '@reduxjs/toolkit';*/

export const selectFavorites = state => state.favorites;

export const selectMakes = state => state.makes;

export const selectAdverts = state => state.adverts;

/*export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.filter.toLowerCase())
    );
  }
);*/
