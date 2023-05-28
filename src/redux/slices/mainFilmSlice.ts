import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api/API';
import { RootState } from '../store';
import { FetchStatus, DataObject, ImageType } from '../types';

type FetchMainReturnType = {
	filmData: DataObject;
	filmImage: string;
};

type FetchMainPropsType = {
	id: number;
	imageType: ImageType;
	page: number;
};

type MainFilmStateType = {
	imageUrl: string;
	status: FetchStatus;
	content: DataObject;
};

export const fetchMainFilm = createAsyncThunk<FetchMainReturnType, FetchMainPropsType>(
	'mainFilm/fetchMainFilmStatus',
	async ({ id, imageType, page }) => {
		const filmData = await api.getFilmById(id);
		const filmImage = await api
			.getFilmImages(id, imageType, page)
			.then((res) => (res.items.length === 0 ? null : res.items[0].imageUrl));
		return { filmData, filmImage };
	},
);

const initialState: MainFilmStateType = {
	imageUrl: 'https://stream-trader.ru/templates/Postbox/dleimages/no_image.jpg',
	status: FetchStatus.loading,
	content: {},
};

export const mainFilmSlice = createSlice({
	name: 'mainFilm',
	initialState,
	reducers: {
		setMainFilm(state, action: PayloadAction<DataObject>) {
			state.content = action.payload;
		},
		setMainFilmImage(state, action: PayloadAction<string>) {
			state.imageUrl = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchMainFilm.pending, (state, action) => {
			state.status = FetchStatus.loading;
		});
		builder.addCase(fetchMainFilm.fulfilled, (state, action) => {
			const { filmData, filmImage } = action.payload;

			if (filmImage) state.imageUrl = filmImage;
			state.content = filmData;
			state.status = FetchStatus.success;
		});
		builder.addCase(fetchMainFilm.rejected, (state, action) => {
			state.content = {};
			state.status = FetchStatus.error;
		});
	},
});

export const selectMainFilm = (state: RootState) => state.mainFilm;

export const { setMainFilm, setMainFilmImage } = mainFilmSlice.actions;

export default mainFilmSlice.reducer;
