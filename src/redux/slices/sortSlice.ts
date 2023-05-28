import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FilterOption } from '../types';

type SortStateType = {
	selected: FilterOption;
	options: FilterOption[];
};

const initialState: SortStateType = {
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
		setSort(state, action: PayloadAction<FilterOption>) {
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

export const selectSort = (state: RootState) => state.sort;

export const { setSort, resetSort } = sortSlice.actions;

export default sortSlice.reducer;
