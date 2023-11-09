import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },


    reducers: {
        fetchingInProgress(state) {
            state.isLoading = true;
        },
        fetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        fetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
    contactsSlice.actions;