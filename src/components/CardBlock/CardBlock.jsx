import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardLoader from '../Cards/Card/CardLoader';
import Cards from '../Cards/Cards';
import { setFilms, setStartLoading, setStopLoading } from '../../redux/slices/filmsSlice';
import { setCurrentPage, setTotalPages } from '../../redux/slices/paginationSlice';
import { api } from '../../api/API';

const CardBlock = () => {
	const { content: allFilms, isLoading } = useSelector((state) => state.films.all);
	const { currentPage } = useSelector((state) => state.pagination);
	const { searchQuery } = useSelector((state) => state.search);
	const { types: filters, activeFiltersCount } = useSelector((state) => state.filters);
	const sort = useSelector((state) => state.sort);
	const dispatch = useDispatch();

	const config = {
		params: {
			genres: filters.genres.selected.value,
			countries: filters.countries.selected.value,
			type: filters.type.selected.value,
			ratingFrom: filters.ratingFrom.selected.value,
			yearFrom: filters.yearFrom.selected.value,
			order: sort.selected.value,
			keyword: searchQuery,
			page: currentPage,
		},
	};

	const removeDuplicates = (array) => {
		const uniqueFilms = [...new Set(array.map((item) => JSON.stringify(item)))];
		const uniqueFilmsSerialized = uniqueFilms.map((film) => JSON.parse(film));
		return uniqueFilmsSerialized;
	};

	const loadMoreFilms = () => {
		dispatch(setStartLoading('all'));
		api.getFilms(config).then(({ items }) => {
			const newFilms = [...allFilms, ...items];
			dispatch(setFilms({ category: 'all', films: removeDuplicates(newFilms) }));
		});
		dispatch(setStopLoading('all'));
	};

	const updateFilmList = () => {
		dispatch(setStartLoading('all'));
		api.getFilms(config).then(({ totalPages, items }) => {
			dispatch(setFilms({ category: 'all', films: items }));
			dispatch(setTotalPages(totalPages));
		});
		// загрузка завершается сразу после начала, из-за чего лоадеров не видно, нужно setFilms сделать асинхронным
		dispatch(setStopLoading('all'));
	};

	useEffect(() => {
		if (currentPage === 1) return;

		// Подгружаем фильмы в низ списка
		loadMoreFilms();
	}, [currentPage]);

	useEffect(() => {
		if (currentPage !== 1) {
			dispatch(setFilms({ category: 'all', films: [] }));
			dispatch(setCurrentPage(1));
		}

		// Очищаем все фильмы и показываем новые, соответствующие фильтрам
		updateFilmList();
	}, [activeFiltersCount, sort, searchQuery]);

	return (
		<>
			{/* Нужно сделать состояние загрузки для каждой карточки отдельно */}
			{isLoading ? [...Array(20)].map((_, index) => <CardLoader key={index} />) : <Cards />}
		</>
	);
};

export default CardBlock;
