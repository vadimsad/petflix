import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import qs from 'qs';

import CardLoader from '../Cards/Card/CardLoader';
import Cards from '../Cards/Cards';
import { setFilms, setStartLoading, setStopLoading } from '../../redux/slices/filmsSlice';
import { setCurrentPage, setTotalPages } from '../../redux/slices/paginationSlice';
import { api } from '../../api/API';
import { setSort } from '../../redux/slices/sortSlice';
import { setSearchQuery, setSearchText } from '../../redux/slices/searchSlice';
import { setFilter } from '../../redux/slices/filterSlice';

const CardBlock = () => {
	const { content: allFilms, isLoading } = useSelector((state) => state.films.all);
	const { currentPage } = useSelector((state) => state.pagination);
	const { searchQuery } = useSelector((state) => state.search);
	const { types: filters, activeFiltersCount } = useSelector((state) => state.filters);
	const { selected: sort, options: sortOptions } = useSelector((state) => state.sort);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const config = {
		params: {
			genres: filters.genres.selected.value,
			countries: filters.countries.selected.value,
			type: filters.type.selected.value,
			ratingFrom: filters.ratingFrom.selected.value,
			yearFrom: filters.yearFrom.selected.value,
			order: sort.value,
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
		const searchParams = window.location.search;
		if (searchParams) {
			const paramsParsed = qs.parse(searchParams.substring(1));

			const sortOption = sortOptions.find((option) => option.value === paramsParsed.sort);
			const searchQuery = paramsParsed.searchQuery;

			dispatch(setSort(sortOption));
			if (searchQuery) {
				dispatch(setSearchText(searchQuery));
				dispatch(setSearchQuery());
			}
		}
	}, []);

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

	useEffect(() => {
		const queryString = qs.stringify(
			{
				sort: sort.value,
				searchQuery: searchQuery || {},
				currentPage: currentPage === 1 ? {} : currentPage,
			},
			{ addQueryPrefix: true },
		);

		navigate(queryString);
	}, [activeFiltersCount, sort, searchQuery, currentPage]);

	return (
		<>
			{/* Нужно сделать состояние загрузки для каждой карточки отдельно */}
			{isLoading ? [...Array(20)].map((_, index) => <CardLoader key={index} />) : <Cards />}
		</>
	);
};

export default CardBlock;
