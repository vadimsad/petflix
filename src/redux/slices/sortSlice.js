import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selected: {
		value: 'RATING',
		label: 'рейтингу',
	},
	options: [
		{
			value: 'RATING',
			label: 'рейтингу',
		},
		{
			value: 'NUM_VOTE',
			label: 'отзывам',
		},
		{
			value: 'YEAR',
			label: 'годам',
		},
	],
};

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSort(state, action) {
			state.selected = action.payload;
		},
		resetSort(state) {
			state.selected = {
				value: 'RATING',
				label: 'рейтингу',
			};
		},
	},
});

export const { setSort, resetSort } = sortSlice.actions;

export default sortSlice.reducer;
