import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type SearchStateType = {
	searchText: string;
	searchQuery: string;
};

const initialState: SearchStateType = {
	searchText: '',
	searchQuery: '',
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchText(state, action: PayloadAction<string>) {
			state.searchText = action.payload;
		},
		setSearchQuery(state) {
			state.searchQuery = state.searchText;
		},
	},
});

export const selectSearch = (state: RootState) => state.search;

export const { setSearchText, setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
