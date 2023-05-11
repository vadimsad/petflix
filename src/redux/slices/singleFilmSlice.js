import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/API';

export const fetchFilm = createAsyncThunk('singleFilm/fetchFilmStatus', async (id) => {
	const [filmData, filmImage] = await Promise.all([
		api.getFilmById(id),
		api.getFilmImages(id, 'STILL', 1),
	]);
	return { filmData, filmImage };
});

export const fetchSliderFilmsSimilar = createAsyncThunk(
	'singleFilm/fetchSliderFilmsSimilarStatus',
	async (id) => {
		const response = await api.getSimilar(id);
		return response;
	},
);

export const fetchFilmReviews = createAsyncThunk(
	'singleFilm/fetchFilmReviewsStatus',
	async (id) => {
		const response = await api.getReviews(id);
		return response;
	},
);

const initialState = {
	film: {
		status: 'loading',
		content: {},
	},
	similar: {
		status: 'loading',
		content: [],
	},
	reviews: {
		status: 'loading',
		content: [],
	},
};

export const singleFilmSlice = createSlice({
	name: 'singleFilm',
	initialState,
	reducers: {
		setFilm(state, action) {
			state.film.content = action.payload;
		},
	},
	extraReducers: (builder) => {
		// fetchFilm

		builder.addCase(fetchFilm.pending, (state) => {
			state.film.status = 'loading';
		});
		builder.addCase(fetchFilm.fulfilled, (state, action) => {
			const { filmData, filmImage } = action.payload;
			let imageUrl = 'https://stream-trader.ru/templates/Postbox/dleimages/no_image.jpg';

			if (filmImage.items.length !== 0) {
				imageUrl = filmImage.items[0].imageUrl;
			}

			state.film.content = { ...filmData, imageUrl };
			state.film.status = 'success';
		});
		builder.addCase(fetchFilm.rejected, (state, action) => {
			state.film.status = 'error';
			console.log(action);
		});

		// fetchSliderFilmsSimilar

		builder.addCase(fetchSliderFilmsSimilar.pending, (state) => {
			state.similar.status = 'loading';
		});
		builder.addCase(fetchSliderFilmsSimilar.fulfilled, (state, action) => {
			state.similar.content = action.payload.items;
			state.similar.status = 'success';
		});
		builder.addCase(fetchSliderFilmsSimilar.rejected, (state, action) => {
			state.similar.status = 'error';
			console.log(action);
		});

		// fetchFilmReviews

		builder.addCase(fetchFilmReviews.pending, (state) => {
			state.reviews.status = 'loading';
		});
		builder.addCase(fetchFilmReviews.fulfilled, (state, action) => {
			state.reviews.content = action.payload.items;
			console.log(action.payload.items);
			state.reviews.status = 'success';
		});
		builder.addCase(fetchFilmReviews.rejected, (state) => {
			state.reviews.status = 'error';
		});
	},
});

export const selectFilm = (state) => state.singleFilm.film;
export const selectFilmId = (state) => state.singleFilm.film.content.kinopoiskId;

export const selectSimilarFilms = (state) => state.singleFilm.similar.content;
export const selectSimilarFilmsStatus = (state) => state.singleFilm.similar.status;

export const selectFilmReviews = (state) => state.singleFilm.reviews.content;
export const selectFilmReviewsStatus = (state) => state.singleFilm.reviews.status;

export const { setFilm } = singleFilmSlice.actions;

export default singleFilmSlice.reducer;
