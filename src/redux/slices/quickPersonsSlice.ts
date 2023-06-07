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
import { RootState } from '../store';

export const fetchQuickPersons = createAsyncThunk<
	IFetchData<DataObject[]>,
	IFetchConfig<{ name?: string }>
>('quickFilms/fetchQuickPersonsStatus', async (config) => {
	const response = await api.getPersons(config);
	return response;
});

const initialState: IFetchContentType<DataObject[]> = {
	status: FetchStatus.loading,
	content: [],
};

export const quickPersonsSlice = createSlice({
	name: 'quickPersons',
	initialState,
	reducers: {
		setQuickPersons(state, action: PayloadAction<DataObject[]>) {
			state.content = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchQuickPersons.pending, (state) => {
			state.status = FetchStatus.loading;
		});
		builder.addCase(fetchQuickPersons.fulfilled, (state, action) => {
			state.content = action.payload.items;
			state.status = FetchStatus.success;
		});
		builder.addCase(fetchQuickPersons.rejected, (state) => {
			state.content = [];
			state.status = FetchStatus.error;
		});
	},
});

export const { setQuickPersons } = quickPersonsSlice.actions;

export const selectQuickPersons = (state: RootState) => state.quickPersons;

export default quickPersonsSlice.reducer;
