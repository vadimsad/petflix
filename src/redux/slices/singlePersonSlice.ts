import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DataObject, FetchStatus, IFetchContentType } from '../types';
import { api } from '../../api/API';
import { RootState } from '../store';

export const fetchPersonData = createAsyncThunk<DataObject, number>(
	'fetchPersonDataStatus',
	async (id: number) => {
		const response = await api.getPersonById(id);
		return response;
	},
);

const initialState: IFetchContentType<DataObject> = {
	status: FetchStatus.loading,
	content: {},
};

export const singlePersonSlice = createSlice({
	name: 'singlePersonSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPersonData.pending, (state) => {
			state.status = FetchStatus.loading;
		});
		builder.addCase(fetchPersonData.fulfilled, (state, action) => {
			state.status = FetchStatus.success;
			state.content = action.payload;
		});
		builder.addCase(fetchPersonData.rejected, (state) => {
			state.status = FetchStatus.error;
		});
	},
});

export const selectPerson = (state: RootState) => state.singlePerson;

export default singlePersonSlice.reducer;
