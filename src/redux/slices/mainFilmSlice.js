import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/API';

export const fetchMainFilm = createAsyncThunk(
	'mainFilm/fetchMainFilmStatus',
	async ({ id, imageType, page }) => {
		const filmData = await api.getFilmById(id);
		const filmImage = await api
			.getFilmImages(id, imageType, page)
			.then((res) => (res.items.length === 0 ? null : res.items[0].imageUrl));
		return { filmData, filmImage };
	},
);

const initialState = {
	imageUrl: 'https://stream-trader.ru/templates/Postbox/dleimages/no_image.jpg',
	status: 'loading',
	content: {},
};

export const mainFilmSlice = createSlice({
	name: 'mainFilm',
	initialState,
	reducers: {
		setMainFilm(state, action) {
			state.content = action.payload;
		},
		setMainFilmImage(state, action) {
			state.imageUrl = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchMainFilm.pending, (state, action) => {
			state.status = 'loading';
		});
		builder.addCase(fetchMainFilm.fulfilled, (state, action) => {
			const { filmData, filmImage } = action.payload;

			if (filmImage) state.imageUrl = filmImage;
			state.content = filmData;
			state.status = 'success';
		});
		builder.addCase(fetchMainFilm.rejected, (state, action) => {
			state.content = {};
			state.status = 'error';
		});
	},
});

export const selectMainFilm = (state) => state.mainFilm;

export const { setMainFilm, setMainFilmImage } = mainFilmSlice.actions;

export default mainFilmSlice.reducer;
