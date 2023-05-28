import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api/API';
import { DataObject, FetchStatus, FilmCollectionType, IFetchContentType } from '../types';
import { RootState } from '../store';

type FetchSliderReturnType = {
	pagesCount: number;
	films: DataObject[];
	type: string;
};

type FetchSliderPropsType = {
	type: keyof SliderFilmsStateType;
	typeForAPI: FilmCollectionType;
	page: number;
};

export const fetchSliderFilms = createAsyncThunk<FetchSliderReturnType, FetchSliderPropsType>(
	'sliderFilms/fetchSliderFilmsStatus',
	async ({ type, typeForAPI, page }) => {
		const response = await api.getTop(typeForAPI, page);
		return { ...response, type };
	},
);

type SliderFilmsStateType = {
	popular: IFetchContentType<DataObject[]>;
	best: IFetchContentType<DataObject[]>;
	await: IFetchContentType<DataObject[]>;
};

const initialState: SliderFilmsStateType = {
	popular: { status: FetchStatus.loading, content: [] },
	best: { status: FetchStatus.loading, content: [] },
	await: { status: FetchStatus.loading, content: [] },
};

export const sliderFilmsSlice = createSlice({
	name: 'sliderFilms',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchSliderFilms.pending, (state, action) => {
			const { type } = action.meta.arg;
			state[type].status = FetchStatus.loading;
		});
		builder.addCase(fetchSliderFilms.fulfilled, (state, action) => {
			const { type } = action.meta.arg;
			state[type].content = action.payload.films;
			state[type].status = FetchStatus.success;
		});
		builder.addCase(fetchSliderFilms.rejected, (state, action) => {
			const { type } = action.meta.arg;
			console.log(action);
			state[type].content = [];
			state[type].status = FetchStatus.error;
		});
	},
});

export const selectSliderFilms = (state: RootState) => state.sliderFilms;
export const selectSliderFilmsByType = (type: keyof SliderFilmsStateType) => (state: RootState) =>
	state.sliderFilms[type];

export default sliderFilmsSlice.reducer;
