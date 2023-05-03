import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeFiltersCount: 0,
	types: {
		genres: {
			selected: null,
			placeholder: 'Жанр',
			options: [],
		},
		countries: {
			selected: null,
			placeholder: 'Страна',
			options: [],
		},
		type: {
			selected: null,
			placeholder: 'Тип',
			options: [
				{
					value: 'ALL',
					label: 'Все',
				},
				{
					value: 'FILM',
					label: 'Фильмы',
				},
				{
					value: 'TV_SHOW',
					label: 'Телешоу',
				},
				{
					value: 'TV_SERIES',
					label: 'Сериалы',
				},
				{
					value: 'MINI_SERIES',
					label: 'Короткометражные сериалы',
				},
			],
		},
		ratingFrom: {
			selected: null,
			placeholder: 'Рейтинг',
			options: [
				{
					value: 6,
					label: 'Больше 6',
				},
				{
					value: 7,
					label: 'Больше 7',
				},
				{
					value: 8,
					label: 'Больше 8',
				},
				{
					value: 9,
					label: 'Больше 9',
				},
			],
		},
		yearFrom: {
			selected: null,
			placeholder: 'Год',
			options: [
				{
					value: 2000,
					label: 'От 2000',
				},
				{
					value: 2010,
					label: 'От 2010',
				},
				{
					value: 2015,
					label: 'От 2015',
				},
				{
					value: 2016,
					label: 'От 2016',
				},
				{
					value: 2017,
					label: 'От 2017',
				},
				{
					value: 2018,
					label: 'От 2018',
				},
				{
					value: 2019,
					label: 'От 2019',
				},
				{
					value: 2020,
					label: 'От 2020',
				},
				{
					value: 2021,
					label: 'От 2021',
				},
				{
					value: 2022,
					label: 'От 2022',
				},
				{
					value: 2023,
					label: 'От 2023',
				},
			],
		},
	},
};

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilter(state, action) {
			const { type, option } = action.payload;
			state.types[type].selected = option;
			state.activeFiltersCount++;
		},
		setFilterOptions(state, action) {
			const { type, options } = action.payload;
			state.types[type].options = options;
		},
		resetFilters(state) {
			Object.keys(state.types).forEach((key) => {
				state.types[key].selected = null;
			});
			state.activeFiltersCount = 0;
		},
	},
});

export const { setFilter, setFilterOptions, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
