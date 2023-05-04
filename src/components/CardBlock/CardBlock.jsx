import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import qs from 'qs';

import CardLoader from '../Cards/Card/CardLoader';
import Cards from '../Cards/Cards';
import {
	fetchFilms,
	setFilms,
	setStartLoading,
	setStopLoading,
} from '../../redux/slices/filmsSlice';
import { setCurrentPage, setTotalPages } from '../../redux/slices/paginationSlice';
import { api } from '../../api/API';
import { setSort } from '../../redux/slices/sortSlice';
import { setSearchQuery, setSearchText } from '../../redux/slices/searchSlice';
import { fetchAllFilms } from '../../redux/slices/allFilmsSlice';

const CardBlock = () => {
	const { content: allFilms, status, currentPage } = useSelector((state) => state.allFilms);
	const { searchQuery } = useSelector((state) => state.search);
	const { types: filters, activeFiltersCount } = useSelector((state) => state.filters);
	const { selected: sort, options: sortOptions } = useSelector((state) => state.sort);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isQueryParamsSet = useRef(false);
	const componentDidMount = useRef(false);

	const config = {
		params: {
			genres: filters.genres.selected?.value,
			countries: filters.countries.selected?.value,
			type: filters.type.selected?.value,
			ratingFrom: filters.ratingFrom.selected?.value,
			yearFrom: filters.yearFrom.selected?.value,
			order: sort.value,
			keyword: searchQuery,
			page: currentPage,
		},
	};

	// Подгрузить следуюущую страницу с фильмами вниз
	const loadMoreFilms = () => {
		// dispatch(setStartLoading('all'));
		// api.getFilms(config).then(({ items }) => {
		// 	const newFilms = [...allFilms, ...items];
		// 	dispatch(setFilms({ category: 'all', films: removeDuplicates(newFilms) }));
		// });
		// dispatch(setStopLoading('all'));
		dispatch(fetchAllFilms({ config, operationType: 'add' }));
	};

	// Заменить текущие фильмы на новые в соответствии с фильтрами
	const updateFilmList = () => {
		// dispatch(setStartLoading('all'));
		// api.getFilms(config).then(({ totalPages, items }) => {
		// 	dispatch(setFilms({ category: 'all', films: items }));
		// 	dispatch(setTotalPages(totalPages));
		// });
		// // загрузка завершается сразу после начала, из-за чего лоадеров не видно, нужно setFilms сделать асинхронным
		// dispatch(setStopLoading('all'));
		dispatch(fetchAllFilms({ config, operationType: 'replace' }));
	};

	// Достаем параметры поиска и сортировки из URL, если они есть, кладем их в редакс
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

			isQueryParamsSet.current = true;
		}
	}, []);

	// При изменении страницы подгружаем фильмы
	useEffect(() => {
		if (currentPage === 1) return;

		loadMoreFilms();
	}, [currentPage]);

	// При изменении фильтров и сортировки получаем соответствующие фильмы
	useEffect(() => {
		if (currentPage !== 1) {
			// dispatch(setFilms({ category: 'all', films: [] }));
			dispatch(setCurrentPage(1));
		}

		if (!isQueryParamsSet.current) {
			updateFilmList();
		}

		isQueryParamsSet.current = false;
	}, [activeFiltersCount, sort, searchQuery]);

	// Добавляем параметры фильтрации в URL при их изменении (кроме первой отрисовки)
	useEffect(() => {
		if (!componentDidMount.current) {
			componentDidMount.current = true;
			return;
		}

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
			{status === 'success' ? (
				<Cards />
			) : status === 'loading' ? (
				[...Array(20)].map((_, index) => <CardLoader key={index} />)
			) : (
				'ОШИБКА'
			)}
		</>
	);
};

export default CardBlock;
