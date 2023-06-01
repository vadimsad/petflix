import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSliderFilmsByType } from '../../../redux/slices/sliderFilmsSlice';
import { FetchStatus, Genre } from '../../../redux/types';
import QuickItem from '../../Search/QuickResult/QuickItem/QuickItem';
import { Link } from 'react-router-dom';

type RandomFilmProps = {};

const RandomFilm: React.FC<RandomFilmProps> = () => {
	const { status, content: popularFilms } = useSelector(selectSliderFilmsByType('popular')) || {};

	if (status === FetchStatus.loading) {
		return <h2>Loading ...</h2>;
	} else if (status === FetchStatus.error) {
		return <h2>Произошла ошибка получения данных фильма :(</h2>;
	} else if (status === FetchStatus.success && popularFilms) {
		const randomIndex = Math.floor(Math.random() * popularFilms?.length);
		const randomFilm = popularFilms[randomIndex];
		return (
			<>
				<h2 className='text-lg'>Случайный фильм:</h2>
				<div className='rounded-xl overflow-hidden'>
					<Link to={`catalog/${randomFilm.filmId}`}>
						<QuickItem
							name={(randomFilm.nameRu || randomFilm.nameEn || randomFilm.nameOriginal) as string}
							imageUrl={randomFilm.posterUrl as string}
							genres={(randomFilm.genres as Genre[]).slice(0, 2)}
							rating={randomFilm.rating as number}
							invertColors={true}
						/>
					</Link>
				</div>
			</>
		);
	}

	return <h2>Не удалось получить данные о фильме :(</h2>;
};

export default RandomFilm;
