import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllFilmsData } from '../../redux/slices/allFilmsSlice';

import Card from './Card/Card';

const Cards = () => {
	const { content: allFilms } = useSelector(selectAllFilmsData);

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
					<Link to={`${kinopoiskId}`} key={kinopoiskId}>
						<Card
							imagesrc={posterUrl}
							name={nameRu || nameEn || nameOriginal}
							rating={ratingKinopoisk}
							year={year}
							genres={genres}
							alt={'Постер ' + nameRu || nameEn || nameOriginal}
						/>
					</Link>
				),
			)}
		</>
	);
};

export default Cards;
