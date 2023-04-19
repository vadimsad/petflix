import React, { useEffect, useState } from 'react';

import { api } from '../api/API';
import Button from '../components/Button/Button';
import CardBlock from '../components/CardBlock/CardBlock';
import Filters from '../components/Filters/Filters';
import Sort from '../components/Sort/Sort';

const Catalog = () => {
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
				currentPage
			)
			.then(({ totalPages, items }) => {
				setFilms(items);
				setIsLoading(false);
				setTotalPages(totalPages);
			});
	}, [filters, sortType]);

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
			<Filters filters={filters} setFilters={setFilters} />
			<Sort
				sortType={sortType}
				setSortType={setSortType}
				options={sortOptions}
			/>
			<div className='grid sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] sm:gap-6 gap-4 sm:p-5'>
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
