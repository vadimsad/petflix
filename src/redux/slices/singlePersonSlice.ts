import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DataObject } from '../types';
import { api } from '../../api/API';

export const fetchPersonData = createAsyncThunk<DataObject, number>(
	'fetchPersonDataStatus',
	async (id: number) => {
		const response = await api.getPersonById(id);
		return response;
	},
);

const initialState: DataObject = {};

export const singlePersonSlice = createSlice({
	name: 'singlePersonSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});
