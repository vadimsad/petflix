import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { api } from '../api/API';
import Button from '../components/Button/Button';
import CardBlock from '../components/CardBlock/CardBlock';
import Filters from '../components/Filters/Filters';
import Sort from '../components/Sort/Sort';
import { resetFilters } from '../redux/slices/filterSlice';
import { setCurrentPage, setTotalPages } from '../redux/slices/paginationSlice';
import { setFilms, setStartLoading } from '../redux/slices/filmsSlice';

const Catalog = () => {
	const allFilms = useSelector((state) => state.films.all.content);
	const filters = useSelector((state) => state.filters);
	const sort = useSelector((state) => state.sort);
	const { currentPage, totalPages } = useSelector((state) => state.pagination);
	const { searchQuery } = useSelector((state) => state.search);
	const dispatch = useDispatch();

	const isFilterActive = Object.keys(filters).find(
		(filterKey) => Object.keys(filters[filterKey].selected).length !== 0
	);

	useEffect(() => {
		dispatch(setStartLoading('all'));

		api
			.getFilms(
				filters.genres.selected.value,
				filters.countries.selected.value,
				filters.type.selected.value,
				filters.ratingFrom.selected.value,
				filters.yearFrom.selected.value,
				sort.selected.value,
				searchQuery,
				currentPage
			)
			.then(({ totalPages, items }) => {
				const newFilms = [...allFilms, ...items];

				dispatch(
					setFilms({ category: 'all', films: removeDuplicates(newFilms) })
				);
				dispatch(setTotalPages(totalPages));
			});
	}, [currentPage]);

	useEffect(() => {
		dispatch(setFilms({ category: 'all', films: [] }));
		dispatch(setCurrentPage(1));
		dispatch(setStartLoading('all'));

		api
			.getFilms(
				filters.genres.selected.value,
				filters.countries.selected.value,
				filters.type.selected.value,
				filters.ratingFrom.selected.value,
				filters.yearFrom.selected.value,
				sort.selected.value,
				searchQuery,
				currentPage
			)
			.then(({ totalPages, items }) => {
				dispatch(setFilms({ category: 'all', films: items }));
				dispatch(setTotalPages(totalPages));
			});
	}, [filters, sort, searchQuery]);

	const removeDuplicates = (array) => {
		const uniqueFilms = [...new Set(array.map((item) => JSON.stringify(item)))];
		const uniqueFilmsSerialized = uniqueFilms.map((film) => JSON.parse(film));
		return uniqueFilmsSerialized;
	};

	const loadMoreFilms = () => {
		dispatch(setCurrentPage(currentPage + 1));
	};

	const onResetFilters = () => {
		dispatch(resetFilters());
	};

	return (
		<>
			<h1 className='sm:p-5 sm:pb-3 pb-3 pt-5 xl:text-4xl sm:text-3xl text-2xl font-serif text-dark dark:text-light transition-colors'>
				Каталог фильмов и сериалов
			</h1>
			<p className='sm:p-5 sm:pt-0 pb-5 sm:text-base text-sm text-notsodark dark:text-lightTransparent transition-colors'>
				Добро пожаловать в наш каталог фильмов - идеальное место для любителей
				кино! Мы предлагаем широкий выбор фильмов разных жанров и форматов,
				чтобы вы могли наслаждаться просмотром любимых кинокартин в любое время
				и в любом месте. У нас вы найдете фильмы самых разных жанров - от драм
				до боевиков, от ужасов до комедий, а также короткометражные фильмы и
				сериалы.
			</p>
			<div className='sm:mx-5 mx-0 mb-5 p-5 flex flex-col xl:gap-5 gap-4 bg-notsolight dark:bg-notsodark rounded-xl'>
				<Filters />
				<div className='flex justify-between xsm:flex-row flex-col-reverse text-left'>
					<Sort />
					{isFilterActive && (
						<button type='button' onClick={onResetFilters}>
							<span className='text-red-600'>&#x2715; </span>
							<span className='underline decoration-dotted'>
								Сбросить фильтры
							</span>
						</button>
					)}
				</div>
			</div>
			<div className='grid sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(130px,_1fr))] sm:gap-6 gap-4 sm:p-5 sm:pt-0'>
				<CardBlock />
			</div>
			{currentPage < totalPages && (
				<Button onclick={loadMoreFilms}>Показать еще</Button>
			)}
		</>
	);
};

export default Catalog;
