import React from 'react';

import { api } from '../api/API';
import CatalogCard from '../components/Cards/CatalogCard/CatalogCard';

const { items: films } = await api.getFilms();
console.log(films);

const Catalog = () => {
	return (
		<div className='grid grid-cols-5 grid-rows-4 gap-[10px]'>
			{films.map((film) => (
				<CatalogCard
					key={film.kinopoiskId}
					imgSrc={film.posterUrl}
					alt={film.nameRu && film.nameOriginal}
				/>
			))}
		</div>
	);
};

export default Catalog;
