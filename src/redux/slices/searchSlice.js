import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchText: 0,
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		updateSearchText: (state, action) => {
			state.searchText = action.payload;
		},
	},
});

export const { updateSearchText } = searchSlice.actions;

export default searchSlice.reducer;
