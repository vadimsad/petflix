import React from 'react';

import Card from './Card/Card';

const Cards = ({ films }) => {
	return (
		<>
			{films.map(
				({
					kinopoiskId,
					posterUrl,
					nameRu,
					nameEn,
					nameOriginal,
					ratingKinopoisk,
					year,
					genres,
				}) => (
					<Card
						key={kinopoiskId}
						imagesrc={posterUrl}
						name={nameRu || nameEn || nameOriginal}
						rating={ratingKinopoisk}
						year={year}
						genres={genres}
						alt={'Постер ' + nameRu || nameEn || nameOriginal}
					/>
				)
			)}
		</>
	);
};

export default Cards;
