import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchText: '',
	searchQuery: '',
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchText(state, action) {
			state.searchText = action.payload;
		},
		setSearchQuery(state) {
			state.searchQuery = state.searchText;
		},
	},
});

export const selectSearch = (state) => state.search;

export const { setSearchText, setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
