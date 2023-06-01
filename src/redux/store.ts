import { configureStore } from '@reduxjs/toolkit';

import allFilms from './slices/allFilmsSlice';
import singleFilm from './slices/singleFilmSlice';
import mainFilm from './slices/mainFilmSlice';
import sliderFilms from './slices/sliderFilmsSlice';
import quickFilms from './slices/quickFilmsSlice';
import filters from './slices/filterSlice';
import sort from './slices/sortSlice';
import search from './slices/searchSlice';
import pagination from './slices/paginationSlice';

export const store = configureStore({
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
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;