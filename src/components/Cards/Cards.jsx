import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllFilms } from '../../redux/slices/filmsSlice';

import Card from './Card/Card';

const Cards = () => {
	const { content: allFilms } = useSelector(selectAllFilms);

	return (
		<>
			{allFilms.map(
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
						rating={ratingKinopoisk || '-'}
						year={year}
						genres={genres}
						alt={'Постер ' + nameRu || nameEn || nameOriginal}
					/>
				),
			)}
		</>
	);
};

export default Cards;
