import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PaginationStateType = {
	currentPage: number;
	totalPages?: number;
};

const initialState: PaginationStateType = {
	currentPage: 1,
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setTotalPages(state, action: PayloadAction<number>) {
			state.totalPages = action.payload;
		},
	},
});

export const { setCurrentPage, setTotalPages } = paginationSlice.actions;

export default paginationSlice.reducer;
