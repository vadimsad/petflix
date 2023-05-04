import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/API';

export const fetchQuickFilms = createAsyncThunk(
	'quickFilms/fetchQuickFilmsStatus',
	async (config) => {
		const response = await api.getFilms(config);
		return response;
	},
);

const initialState = {
	status: 'loading',
	content: [],
};

export const quickFilmsSlice = createSlice({
	name: 'quickFilms',
	initialState,
	reducers: {
		setQuickFilms(state, action) {
			state.content = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchQuickFilms.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchQuickFilms.fulfilled, (state, action) => {
			state.content = action.payload.items;
			state.status = 'success';
		});
		builder.addCase(fetchQuickFilms.rejected, (state) => {
			state.content = [];
			state.status = 'error';
		});
	},
});

export const { setQuickFilms } = quickFilmsSlice.actions;

export default quickFilmsSlice.reducer;
