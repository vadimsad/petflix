import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/API';

export const fetchSliderFilms = createAsyncThunk(
	'sliderFilms/fetchSliderFilmsStatus',
	async ({ type, typeForAPI, page }) => {
		const response = await api.getTop(typeForAPI, page);
		return { ...response, type };
	},
);

const initialState = {
	popular: { status: 'loading', content: [] },
	best: { status: 'loading', content: [] },
	await: { status: 'loading', content: [] },
};

export const sliderFilmsSlice = createSlice({
	name: 'sliderFilms',
	initialState,
	reducers: {
		setSliderFilms(state, action) {
			state.content = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSliderFilms.pending, (state, action) => {
			const { type } = action.meta.arg;
			state[type].status = 'loading';
		});
		builder.addCase(fetchSliderFilms.fulfilled, (state, action) => {
			const { type } = action.meta.arg;
			state[type].content = action.payload.films;
			state[type].status = 'success';
		});
		builder.addCase(fetchSliderFilms.rejected, (state, action) => {
			const { type } = action.meta.arg;
			console.log(action);
			state[type].content = [];
			state[type].status = 'error';
		});
	},
});

export const selectSliderFilms = (state) => state.sliderFilms;
export const selectSliderFilmsByType = (type) => (state) => state.sliderFilms[type];

export const { setSliderFilms } = sliderFilmsSlice.actions;

export default sliderFilmsSlice.reducer;
