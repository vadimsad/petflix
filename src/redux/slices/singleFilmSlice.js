import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/API';

export const fetchFilm = createAsyncThunk('singleFilm/fetchFilmStatus', async (id) => {
	const [filmData, filmImage] = await Promise.all([
		api.getFilmById(id),
		api.getFilmImages(id, 'STILL', 1),
	]);
	return { filmData, filmImage };
});

const initialState = {
	status: 'loading',
	content: {},
};

export const singleFilmSlice = createSlice({
	name: 'singleFilm',
	initialState,
	reducers: {
		setFilm(state, action) {
			state.content = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFilm.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchFilm.fulfilled, (state, action) => {
			const { filmData, filmImage } = action.payload;
			let imageUrl = 'https://stream-trader.ru/templates/Postbox/dleimages/no_image.jpg';

			if (filmImage.items.length !== 0) {
				imageUrl = filmImage.items[0].imageUrl;
			}

			state.content = { ...filmData, imageUrl };
			state.status = 'success';
		});
		builder.addCase(fetchFilm.rejected, (state, action) => {
			state.status = 'error';
			console.log(action);
		});
	},
});

export const selectFilm = (state) => state.singleFilm;

export const { setFilm } = singleFilmSlice.actions;

export default singleFilmSlice.reducer;
