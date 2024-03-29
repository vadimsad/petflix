import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api/API';
import useCapitalize from '../../hooks/useCapitalize/useCapitalize';
import { RootState } from '../store';
import { FilmType, FilterOption, FilterTypes } from '../types';

type FetchFilterInfoType = {
	type: FilterTypes;
	searchValue: string;
};

type Genre = {
	id: number;
	genre: string;
};

type Country = {
	id: number;
	country: string;
};

export type FilterState = {
	activeFiltersCount: number;
	types: {
		genres: {
			selected: FilterOption<string | number> | null;
			placeholder: string;
			options: FilterOption<string | number>[];
		};
		countries: {
			selected: FilterOption<string | number> | null;
			placeholder: string;
			options: FilterOption<string | number>[];
		};
		type: {
			selected: FilterOption<FilmType> | null;
			placeholder: string;
			options: FilterOption<FilmType>[];
		};
		ratingFrom: {
			selected: FilterOption<string | number> | null;
			placeholder: string;
			options: FilterOption<string | number>[];
		};
		yearFrom: {
			selected: FilterOption<string | number> | null;
			placeholder: string;
			options: FilterOption<string | number>[];
		};
	};
};

type FetchFilterReturnType = {
	filters: {
		genres: Genre[];
		countries: Country[];
	};
};

export const fetchFilters = createAsyncThunk<FetchFilterReturnType, FetchFilterInfoType>(
	'filters/fetchFilterOptionsStatus',
	async (filterInfo) => {
		const filters = await api.getFilters();
		return { filters };
	},
);

const initialState: FilterState = {
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
					value: FilmType.ALL,
					label: 'Все',
				},
				{
					value: FilmType.FILM,
					label: 'Фильмы',
				},
				{
					value: FilmType.TV_SHOW,
					label: 'Телешоу',
				},
				{
					value: FilmType.TV_SERIES,
					label: 'Сериалы',
				},
				{
					value: FilmType.MINI_SERIES,
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
		setFilter(
			state,
			action: PayloadAction<{ type: FilterTypes; option: FilterOption<string | number> }>,
		) {
			const { type, option } = action.payload;
			state.types[type].selected = option;
			state.activeFiltersCount++;
		},
		resetFilters(state) {
			Object.keys(state.types).forEach((key) => {
				state.types[key as keyof FilterState['types']].selected = null;
			});
			state.activeFiltersCount = 0;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFilters.fulfilled, (state, action) => {
			const { filters } = action.payload;
			const { type, searchValue } = action.meta.arg;

			const selectOptions = filters[type].map((option) => {
				let optionName: string;
				if ('genre' in option) {
					optionName = option.genre;
				} else if ('country' in option) {
					optionName = option.country;
				} else {
					optionName = '';
				}
				// const optionItem = Object.keys(option)[1];
				// const optionName = option[optionItem];
				const optionNameCapitalized = useCapitalize(optionName);
				return {
					value: option.id,
					label: optionNameCapitalized,
				};
			});

			if (searchValue) {
				const filteredOptions = selectOptions.filter((option) => {
					return (option.label || '').toLowerCase().includes(searchValue.toLowerCase());
				});
				state.types[type].options = filteredOptions;
			} else {
				state.types[type].options = selectOptions;
			}
		});
		builder.addCase(fetchFilters.rejected, (state, action) => {
			console.log('Ошибка получения опций фильтра ', action);
		});
	},
});

export const selectFilters = (state: RootState) => state.filters;
export const selectFiltersByType = (type: keyof FilterState['types']) => (state: RootState) =>
	state.filters.types[type];

export const { setFilter, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
