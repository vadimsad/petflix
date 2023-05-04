import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/API';

export const fetchFilms = createAsyncThunk(
	'users/fetchFilmsStatus',
	async (data, thunkAPI) => {
		const { config, type } = data;
		const response = await api.getFilms(config);
		return { ...response, type };
	},
	{
		getPendingMeta: (action, { getState }) => {
			const type = action.meta.arg.type;
			return { type };
		},
		getRejectedMeta: (action, { getState }) => {
			const type = action.meta.arg.type;
			return { type };
		},
	},
);

const initialState = {
	all: {
		status: 'loading', // loading | success | error
		content: [],
	},
	popular: {
		status: 'loading',
		content: [],
	},
	mainFilm: {
		image: '',
		status: 'loading',
		content: {},
	},
	quickSearchResults: {
		status: 'loading',
		content: [],
	},
};

export const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		setFilms(state, action) {
			const { category, films } = action.payload;
			state[category].content = films;
		},
		setMainFilm(state, action) {
			state.mainFilm.content = action.payload;
			state.mainFilm.status = 'success';
		},
		setMainFilmImage(state, action) {
			state.mainFilm.image = action.payload;
			state.mainFilm.status = 'success';
		},
		setStartLoading(state, action) {
			const category = action.payload;
			state[category].status = 'loading';
		},
		setStopLoading(state, action) {
			const category = action.payload;
			state[category].status = 'success';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFilms.pending, (state, action) => {
			const { type } = action.meta.arg;
			state[type].status = 'loading';
		});
		builder.addCase(fetchFilms.fulfilled, (state, action) => {
			const { items, type } = action.payload;
			state[type].content = items;
			state[type].status = 'success';
		});
		builder.addCase(fetchFilms.rejected, (state, action) => {
			const { type } = action.meta.arg;
			state[type].content = [];
			state[type].status = 'error';
		});
	},
});

export const { setFilms, setMainFilm, setMainFilmImage, setStartLoading, setStopLoading } =
	filmsSlice.actions;

export default filmsSlice.reducer;
