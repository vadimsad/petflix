import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/API';

export const fetchAllFilms = createAsyncThunk('allFilms/fetchAllFilmsStatus', async (data) => {
	const { config, operationType } = data;
	const response = await api.getFilms(config);
	return { ...response, operationType };
});

const initialState = {
	status: 'loading',
	content: [],
	currentPage: 1,
	totalPages: null,
};

export const allFilmsSlice = createSlice({
	name: 'allFilms',
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllFilms.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchAllFilms.fulfilled, (state, action) => {
			// Приходится везде тащить это за собой из-за кривого бека :(
			const removeDuplicates = (array) => {
				const uniqueFilms = [...new Set(array.map((item) => JSON.stringify(item)))];
				const uniqueFilmsSerialized = uniqueFilms.map((film) => JSON.parse(film));
				return uniqueFilmsSerialized;
			};

			const { items, totalPages, operationType } = action.payload;
			if (operationType === 'add') {
				const newFilms = [...state.content, ...items];
				state.content = removeDuplicates(newFilms);
				state.totalPages = totalPages;
			} else if (operationType === 'replace') {
				state.content = items;
				state.totalPages = totalPages;
			}
			state.status = 'success';
		});
		builder.addCase(fetchAllFilms.rejected, (state) => {
			state.content = [];
			state.status = 'error';
		});
	},
});

export const selectAllFilmsData = (state) => state.allFilms;

export const { setCurrentPage } = allFilmsSlice.actions;

export default allFilmsSlice.reducer;
