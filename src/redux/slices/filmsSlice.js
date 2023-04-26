import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	all: {
		isLoading: true,
		content: [],
	},
	popular: {
		isLoading: true,
		content: [],
	},
	mainFilm: {
		image: '',
		isLoading: true,
		content: {},
	},
};

export const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		setFilms(state, action) {
			const { category, films } = action.payload;
			state[category].content = films;
			state[category].isLoading = false;
		},
		setMainFilm(state, action) {
			state.mainFilm.content = action.payload;
			state.mainFilm.isLoading = false;
		},
		setMainFilmImage(state, action) {
			state.mainFilm.image = action.payload;
			state.mainFilm.isLoading = false;
		},
		setStartLoading(state, action) {
			const category = action.payload;
			state[category].isLoading = true;
		},
	},
});

export const { setFilms, setMainFilm, setMainFilmImage, setStartLoading } =
	filmsSlice.actions;

export default filmsSlice.reducer;
