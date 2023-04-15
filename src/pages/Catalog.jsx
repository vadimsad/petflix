import React, { useEffect, useState } from 'react';

import { api } from '../api/API';
import CardBlock from '../components/CardBlock/CardBlock';

const Catalog = () => {
	const [films, setFilms] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api.getFilms().then(({ items }) => {
			setFilms(items);
			isLoading && setIsLoading(false);
		});
	}, []);

	return (
		<div className='grid sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] sm:gap-6 gap-4 p-6'>
			<CardBlock isLoading={isLoading} films={films} />
		</div>
	);
};

export default Catalog;
