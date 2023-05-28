import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api/API';
import {
	IFetchData,
	FetchStatus,
	DataObject,
	FilmParams,
	IFetchConfig,
	IFetchContentType,
} from '../types';

export const fetchQuickFilms = createAsyncThunk<IFetchData<DataObject[]>, IFetchConfig<FilmParams>>(
	'quickFilms/fetchQuickFilmsStatus',
	async (config) => {
		const response = await api.getFilms(config);
		return response;
	},
);

const initialState: IFetchContentType<DataObject[]> = {
	status: FetchStatus.loading,
	content: [],
};

export const quickFilmsSlice = createSlice({
	name: 'quickFilms',
	initialState,
	reducers: {
		setQuickFilms(state, action: PayloadAction<DataObject[]>) {
			state.content = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchQuickFilms.pending, (state) => {
			state.status = FetchStatus.loading;
		});
		builder.addCase(fetchQuickFilms.fulfilled, (state, action) => {
			state.content = action.payload.items;
			state.status = FetchStatus.success;
		});
		builder.addCase(fetchQuickFilms.rejected, (state) => {
			state.content = [];
			state.status = FetchStatus.error;
		});
	},
});

export const { setQuickFilms } = quickFilmsSlice.actions;

export default quickFilmsSlice.reducer;
