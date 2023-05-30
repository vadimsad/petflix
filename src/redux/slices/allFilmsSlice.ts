import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api/API';
import { FetchStatus, FilmParams, IFetchConfig, IFetchContentType } from '../types';
import useDeduplicate from '../../hooks/useDeduplicate/useDeduplicate';
import { RootState } from '../store';
import { CardInfo } from '../../components/types';

type FetchDataType = {
	config: IFetchConfig<FilmParams>;
	operationType: 'add' | 'replace';
};

type FetchReturnType = {
	items: Object[];
	totalPages: number;
	operationType: 'add' | 'replace';
};

export const fetchAllFilms = createAsyncThunk<FetchReturnType, FetchDataType>(
	'allFilms/fetchAllFilmsStatus',
	async (data) => {
		const { config, operationType } = data;
		const response = await api.getFilms(config);
		return { ...response, operationType };
	},
);

interface IAllFilmsStateType extends IFetchContentType<CardInfo[]> {
	currentPage: number;
	totalPages?: number;
}

const initialState: IAllFilmsStateType = {
	status: FetchStatus.loading,
	content: [],
	currentPage: 1,
};

export const allFilmsSlice = createSlice({
	name: 'allFilms',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllFilms.pending, (state) => {
			state.status = FetchStatus.loading;
		});
		builder.addCase(fetchAllFilms.fulfilled, (state, action) => {
			const { items, totalPages, operationType } = action.payload;

			if (operationType === 'add') {
				const newFilms = [...state.content, ...items];
				state.content = useDeduplicate(newFilms) as CardInfo[];
				state.totalPages = totalPages;
			} else if (operationType === 'replace') {
				state.content = items as CardInfo[];
				state.totalPages = totalPages;
			}
			state.status = FetchStatus.success;
		});
		builder.addCase(fetchAllFilms.rejected, (state) => {
			state.content = [];
			state.status = FetchStatus.error;
		});
	},
});

export const selectAllFilmsData = (state: RootState) => state.allFilms;

export const { setCurrentPage } = allFilmsSlice.actions;

export default allFilmsSlice.reducer;
