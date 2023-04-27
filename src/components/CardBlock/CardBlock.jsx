import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardLoader from '../Cards/Card/CardLoader';
import Cards from '../Cards/Cards';
import { setFilms, setStartLoading } from '../../redux/slices/filmsSlice';
import { setCurrentPage, setTotalPages } from '../../redux/slices/paginationSlice';
import { api } from '../../api/API';

const CardBlock = () => {
	const { content: allFilms, isLoading } = useSelector((state) => state.films.all);
	const { currentPage } = useSelector((state) => state.pagination);
	const { searchQuery } = useSelector((state) => state.search);
	const filters = useSelector((state) => state.filters);
	const sort = useSelector((state) => state.sort);
	const dispatch = useDispatch();

	const params = [
		filters.genres.selected.value,
		filters.countries.selected.value,
		filters.type.selected.value,
		filters.ratingFrom.selected.value,
		filters.yearFrom.selected.value,
		sort.selected.value,
		searchQuery,
		currentPage,
	];

	const removeDuplicates = (array) => {
		const uniqueFilms = [...new Set(array.map((item) => JSON.stringify(item)))];
		const uniqueFilmsSerialized = uniqueFilms.map((film) => JSON.parse(film));
		return uniqueFilmsSerialized;
	};

	const loadMoreFilms = () => {
		api.getFilms(...params).then(({ items }) => {
			const newFilms = [...allFilms, ...items];
			dispatch(setFilms({ category: 'all', films: removeDuplicates(newFilms) }));
		});
	};

	const updateFilmList = () => {
		api.getFilms(...params).then(({ totalPages, items }) => {
			dispatch(setFilms({ category: 'all', films: items }));
			dispatch(setTotalPages(totalPages));
		});
	};

	useEffect(() => {
		// Подгружаем фильмы в низ списка
		dispatch(setStartLoading('all'));
		loadMoreFilms();
	}, [currentPage]);

	useEffect(() => {
		// Очищаем все фильмы и показываем новые, соответствующие фильтрам
		dispatch(setStartLoading('all'));
		dispatch(setFilms({ category: 'all', films: [] }));
		dispatch(setCurrentPage(1));
		updateFilmList();
	}, [filters, sort, searchQuery]);

	return (
		<>
			{/* Нужно сделать состояние загрузки для каждой карточки отдельно */}
			{isLoading ? [...Array(20)].map((_, index) => <CardLoader key={index} />) : <Cards />}
		</>
	);
};

export default CardBlock;
