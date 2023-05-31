import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api/API';
import {
	DataObject,
	IFetchData,
	FetchStatus,
	IFetchContentType,
	ImageItemType,
	ImageType,
} from '../types';
import { RootState } from '../store';

type FetchFilmReturnType = {
	filmData: DataObject;
	filmImage: IFetchData<ImageItemType[]>;
};

export const fetchFilm = createAsyncThunk<FetchFilmReturnType, number>(
	'singleFilm/fetchFilmStatus',
	async (id) => {
		const [filmData, filmImage] = await Promise.all([
			api.getFilmById(id),
			api.getFilmImages(id, ImageType.STILL, 1),
		]);
		return { filmData, filmImage };
	},
);

type FetchSimilarType = Omit<IFetchData<DataObject[]>, 'totalPages'>;

export const fetchSliderFilmsSimilar = createAsyncThunk<FetchSimilarType, number>(
	'singleFilm/fetchSliderFilmsSimilarStatus',
	async (id) => {
		const response = await api.getSimilar(id);
		return response;
	},
);

type FetchReviewType = IFetchData<DataObject[]>;

export const fetchFilmReviews = createAsyncThunk<FetchReviewType, number>(
	'singleFilm/fetchFilmReviewsStatus',
	async (id) => {
		const response = await api.getReviews(id);
		return response;
	},
);

type FetchAwardsType = Omit<IFetchData<DataObject[]>, 'totalPages'>;

export const fetchFilmAwards = createAsyncThunk<FetchAwardsType, number>(
	'singleFilm/fetchFilmAwardsStatus',
	async (id) => {
		const response = await api.getAwards(id);
		return response;
	},
);

type SingleFilmStateType = {
	film: IFetchContentType<DataObject>;
	similar: IFetchContentType<DataObject[]>;
	reviews: IFetchContentType<DataObject[]>;
	awards: IFetchContentType<DataObject[]>;
};

const initialState: SingleFilmStateType = {
	film: {
		status: FetchStatus.loading,
		content: {},
	},
	similar: {
		status: FetchStatus.loading,
		content: [],
	},
	reviews: {
		status: FetchStatus.loading,
		content: [],
	},
	awards: {
		status: FetchStatus.loading,
		content: [],
	},
};

export const singleFilmSlice = createSlice({
	name: 'singleFilm',
	initialState,
	reducers: {
		setFilm(state, action: PayloadAction<DataObject>) {
			state.film.content = action.payload;
		},
	},
	extraReducers: (builder) => {
		// fetchFilm

		builder.addCase(fetchFilm.pending, (state) => {
			state.film.status = FetchStatus.loading;
		});
		builder.addCase(fetchFilm.fulfilled, (state, action) => {
			const { filmData, filmImage } = action.payload;
			let imageUrl = 'https://stream-trader.ru/templates/Postbox/dleimages/no_image.jpg';

			if (filmImage.items.length !== 0) {
				imageUrl = filmImage.items[0].imageUrl;
			}

			state.film.content = { ...filmData, imageUrl };
			state.film.status = FetchStatus.success;
		});
		builder.addCase(fetchFilm.rejected, (state, action) => {
			state.film.status = FetchStatus.error;
		});

		// fetchSliderFilmsSimilar

		builder.addCase(fetchSliderFilmsSimilar.pending, (state) => {
			state.similar.status = FetchStatus.loading;
		});
		builder.addCase(fetchSliderFilmsSimilar.fulfilled, (state, action) => {
			state.similar.content = action.payload.items;
			state.similar.status = FetchStatus.success;
		});
		builder.addCase(fetchSliderFilmsSimilar.rejected, (state, action) => {
			state.similar.status = FetchStatus.error;
			console.log(action);
		});

		// fetchFilmReviews

		builder.addCase(fetchFilmReviews.pending, (state) => {
			state.reviews.status = FetchStatus.loading;
		});
		builder.addCase(fetchFilmReviews.fulfilled, (state, action) => {
			state.reviews.content = action.payload.items;
			state.reviews.status = FetchStatus.success;
		});
		builder.addCase(fetchFilmReviews.rejected, (state) => {
			state.reviews.status = FetchStatus.error;
		});

		// fetchFilmAwards

		builder.addCase(fetchFilmAwards.pending, (state) => {
			state.awards.status = FetchStatus.loading;
		});
		builder.addCase(fetchFilmAwards.fulfilled, (state, action) => {
			const awards = action.payload.items.filter(
				(item) => item.win === true && item.imageUrl !== null,
			);
			state.awards.content = awards;
			state.awards.status = FetchStatus.success;
		});
		builder.addCase(fetchFilmAwards.rejected, (state) => {
			state.awards.status = FetchStatus.error;
		});
	},
});

export const selectFilm = (state: RootState) => state.singleFilm.film;
export const selectFilmId = (state: RootState) => state.singleFilm.film.content.kinopoiskId;

export const selectSimilarFilms = (state: RootState) => state.singleFilm.similar.content;
export const selectSimilarFilmsStatus = (state: RootState) => state.singleFilm.similar.status;

export const selectFilmReviews = (state: RootState) => state.singleFilm.reviews.content;
export const selectFilmReviewsStatus = (state: RootState) => state.singleFilm.reviews.status;

export const selectFilmAwards = (state: RootState) => state.singleFilm.awards.content;

export const { setFilm } = singleFilmSlice.actions;

export default singleFilmSlice.reducer;
