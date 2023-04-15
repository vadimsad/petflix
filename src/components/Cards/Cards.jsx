import React from 'react';

import Card from './Card/Card';

const Cards = ({ films }) => {
	return (
		<>
			{films.map((film) => (
				<Card
					key={film.kinopoiskId}
					imagesrc={film.posterUrl}
					name={film.nameRu || film.nameEn || film.nameOriginal}
					rating={film.ratingKinopoisk}
					year={film.year}
					genres={film.genres}
					alt={'Постер ' + film.nameRu || film.nameEn || film.nameOriginal}
				/>
			))}
		</>
	);
};

export default Cards;
