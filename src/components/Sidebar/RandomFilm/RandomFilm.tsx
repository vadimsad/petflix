import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSliderFilmsByType } from '../../../redux/slices/sliderFilmsSlice';
import { FetchStatus, Genre, SearchProperty } from '../../../redux/types';
import QuickItem from '../../Search/QuickResult/QuickItem/QuickItem';
import { Link } from 'react-router-dom';
import QuickItemLoader from '../../Search/QuickResult/QuickItem/QuickItemLoader';

const RandomFilm: React.FC = () => {
	const { status, content: popularFilms } = useSelector(selectSliderFilmsByType('popular')) || {};

	const randomIndex = Math.floor(Math.random() * popularFilms?.length!);
	const randomFilm = popularFilms![randomIndex];

	return (
		<div className='dark:bg-notsolight bg-notsodark p-2 rounded-xl'>
			<h2 className='text-lg'>Случайный фильм:</h2>
			<div className={`${status === FetchStatus.success ? 'rounded-xl' : ''} overflow-hidden`}>
				{status === FetchStatus.success ? (
					<Link to={`catalog/${randomFilm.filmId}`}>
						<QuickItem
							id={randomFilm.filmId as number}
							name={(randomFilm.nameRu || randomFilm.nameEn || randomFilm.nameOriginal) as string}
							imageUrl={randomFilm.posterUrl as string}
							genres={(randomFilm.genres as Genre[]).slice(0, 2)}
							rating={randomFilm.rating as number}
							invertColors={true}
							itemType={SearchProperty.films}
						/>
					</Link>
				) : status === FetchStatus.loading ? (
					<QuickItemLoader />
				) : (
					<h2>Произошла ошибка получения данных фильма :(</h2>
				)}
			</div>
		</div>
	);
};

export default React.memo(RandomFilm);
