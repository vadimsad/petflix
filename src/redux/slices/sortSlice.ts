import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FilmOrder, FilterOption } from '../types';

type SortStateType = {
	selected: FilterOption<FilmOrder>;
	options: FilterOption<FilmOrder>[];
};

const initialState: SortStateType = {
	selected: {
		value: FilmOrder.RATING,
		label: 'рейтингу',
	},
	options: [
		{
			value: FilmOrder.RATING,
			label: 'рейтингу',
		},
		{
			value: FilmOrder.NUM_VOTE,
			label: 'отзывам',
		},
		{
			value: FilmOrder.YEAR,
			label: 'годам',
		},
	],
};

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSort(state, action: PayloadAction<FilterOption<FilmOrder>>) {
			state.selected = action.payload;
		},
		resetSort(state) {
			state.selected = {
				value: FilmOrder.RATING,
				label: 'рейтингу',
			};
		},
	},
});

export const selectSort = (state: RootState) => state.sort;

export const { setSort, resetSort } = sortSlice.actions;

export default sortSlice.reducer;
