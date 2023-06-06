import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import allFilms from './slices/allFilmsSlice';
import singleFilm from './slices/singleFilmSlice';
import mainFilm from './slices/mainFilmSlice';
import sliderFilms from './slices/sliderFilmsSlice';
import quickFilms from './slices/quickFilmsSlice';
import filters from './slices/filterSlice';
import sort from './slices/sortSlice';
import search from './slices/searchSlice';
import pagination from './slices/paginationSlice';
import favoriteFilms, {
	listenerMiddlewareAddFav,
	listenerMiddlewareDelFav,
} from './slices/favoriteFilmsSlice';

const favoriteFilmsStoraged = Object.keys(localStorage).map((key) => JSON.parse(localStorage[key]));

export const store = configureStore({
	preloadedState: {
		favoriteFilms: favoriteFilmsStoraged === null ? [] : favoriteFilmsStoraged,
	},
	reducer: {
		allFilms,
		singleFilm,
		mainFilm,
		sliderFilms,
		quickFilms,
		filters,
		sort,
		search,
		pagination,
		favoriteFilms,
	},
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		listenerMiddlewareAddFav.middleware,
		listenerMiddlewareDelFav.middleware,
	],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
