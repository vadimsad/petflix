import React, { useEffect, useState } from 'react';

import { api } from '../api/API';
import Button from '../components/Button/Button';
import CardBlock from '../components/CardBlock/CardBlock';
import Filters from '../components/Filters/Filters';

const Catalog = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filters, setFilters] = useState({});
	const [films, setFilms] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		api
			.getFilms(filters.genres, filters.countries, currentPage)
			.then(({ totalPages, items }) => {
				if (currentPage === 1) {
					setFilms(items);
				} else {
					setFilms((previous) => [...previous, ...items]);
				}
				setIsLoading(false);
				setTotalPages(totalPages);
			});
	}, [filters, currentPage]);

	const handleClick = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	return (
		<>
			<Filters filters={filters} setFilters={setFilters} />
			<div className='grid sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] sm:gap-6 gap-4 p-5'>
				<CardBlock isLoading={isLoading} films={films} />
			</div>
			{currentPage < totalPages && (
				<Button onclick={handleClick}>Показать еще</Button>
			)}
		</>
	);
};

export default Catalog;
