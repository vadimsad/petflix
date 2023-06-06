import { createSlice, PayloadAction, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { Genre } from '../types';
import { RootState } from '../store';

interface FavoriteFilmData {
	id: number;
	name: string;
	rating: string | number;
	genres: Genre[];
	imageUrl: string;
}

const initialState: FavoriteFilmData[] = [];

export const favoriteFilmsSlice = createSlice({
	name: 'favoriteFilms',
	initialState,
	reducers: {
		addFavorite(state, action: PayloadAction<FavoriteFilmData>) {
			state.push(action.payload);
		},
		removeFavorite(state, action: PayloadAction<number>) {
			return state.filter((film) => film.id !== action.payload);
		},
	},
});

export const { addFavorite, removeFavorite } = favoriteFilmsSlice.actions;

export const listenerMiddlewareAddFav = createListenerMiddleware();
listenerMiddlewareAddFav.startListening({
	actionCreator: addFavorite,
	effect: (action, listenerApi) =>
		localStorage.setItem(`${action.payload.id}`, JSON.stringify(action.payload)),
});

export const listenerMiddlewareDelFav = createListenerMiddleware();
listenerMiddlewareDelFav.startListening({
	actionCreator: removeFavorite,
	effect: (action, listenerApi) => localStorage.removeItem(`${action.payload}`),
});

export const selectFavoriteFilms = (state: RootState) => state.favoriteFilms;
export const selectFavoriteById = (id: number) => (state: RootState) =>
	state.favoriteFilms.find((film) => film.id === id);

export default favoriteFilmsSlice.reducer;
