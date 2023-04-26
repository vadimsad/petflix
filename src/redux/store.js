import { configureStore } from '@reduxjs/toolkit';

import films from './slices/filmsSlice';
import filters from './slices/filterSlice';
import sort from './slices/sortSlice';
import search from './slices/searchSlice';
import pagination from './slices/paginationSlice';

export const store = configureStore({
	reducer: { films, filters, sort, search, pagination },
});
