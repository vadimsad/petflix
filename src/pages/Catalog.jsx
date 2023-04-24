import React, { useContext, useEffect, useState } from 'react';

import { api } from '../api/API';
import Button from '../components/Button/Button';
import CardBlock from '../components/CardBlock/CardBlock';
import Filters from '../components/Filters/Filters';
import Sort from '../components/Sort/Sort';
import { context } from '../context/context';

const Catalog = () => {
	const { searchQuery } = useContext(context);

	const sortOptions = [
		{
			value: 'RATING',
			label: 'рейтингу',
		},
		{
			value: 'NUM_VOTE',
			label: 'отзывам',
		},
		{
			value: 'YEAR',
			label: 'годам',
		},
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [filters, setFilters] = useState({});
	const [films, setFilms] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const [sortType, setSortType] = useState(sortOptions[0]);

	useEffect(() => {
		setIsLoading(true);

		api
			.getFilms(
				filters.genres,
				filters.countries,
				filters.type,
				filters.ratingFrom,
				filters.yearFrom,
				sortType.value,
				searchQuery,
				currentPage
			)
			.then(({ totalPages, items }) => {
				const newFilms = [...films, ...items];

				setFilms(removeDuplicates(newFilms));
				setIsLoading(false);
				setTotalPages(totalPages);
			});
	}, [currentPage]);

	useEffect(() => {
		setFilms([]);
		setCurrentPage(1);
		setIsLoading(true);

		api
			.getFilms(
				filters.genres,
				filters.countries,
				filters.type,
				filters.ratingFrom,
				filters.yearFrom,
				sortType.value,
				searchQuery,
				currentPage
			)
			.then(({ totalPages, items }) => {
				setFilms(items);
				setIsLoading(false);
				setTotalPages(totalPages);
			});
	}, [filters, sortType, searchQuery]);

	const removeDuplicates = (array) => {
		const uniqueFilms = [...new Set(array.map((item) => JSON.stringify(item)))];
		const uniqueFilmsSerialized = uniqueFilms.map((film) => JSON.parse(film));
		return uniqueFilmsSerialized;
	};

	const loadMoreFilms = () => {
		setCurrentPage((prevPage) => prevPage + 1);
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
				<Filters
					filters={filters}
					setFilters={setFilters}
					isLoading={isLoading}
				/>
				<Sort
					sortType={sortType}
					setSortType={setSortType}
					options={sortOptions}
				/>
			</div>
			<div className='grid sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(130px,_1fr))] sm:gap-6 gap-4 sm:p-5 sm:pt-0'>
				<CardBlock isLoading={isLoading} films={films} />
			</div>
			{currentPage < totalPages && (
				<Button disabled={isLoading} onclick={loadMoreFilms}>
					Показать еще
				</Button>
			)}
		</>
	);
};

export default Catalog;
