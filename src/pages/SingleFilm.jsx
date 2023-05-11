import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilm, selectFilm } from '../redux/slices/singleFilmSlice';

import FilmHeader from '../components/SingleFilm/FilmHeader/FilmHeader';
import Description from '../components/SingleFilm/Description/Description';
import Similar from '../components/SingleFilm/Similar/Similar';
import Reviews from '../components/SingleFilm/Reviews/Reviews';

const SingleFilm = () => {
	const { id } = useParams();
	const { status, content: film } = useSelector(selectFilm);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilm(id));
	}, [id]);

	if (status !== 'success') {
		return <div>Loading...</div>;
	}

	const genresShown = film.genres.slice(0, 3);

	return (
		<>
			<FilmHeader
				logoUrl={film.logourl}
				name={film.nameRu || film.nameEn || film.nameOriginal}
				rating={film.ratingKinopoisk}
				year={film.year}
				length={film.filmLength}
				shortDescription={film.shortDescription}
				countries={film.countries}
				imageUrl={film.imageUrl}
				genres={genresShown}
			/>
			<Description>{film.description || 'Описание отсутствует :('}</Description>
			<Similar />
			<Reviews />
			{/* 
                Карточка
                Описание
                Похожие
                Отзывы
                Награды
            */}
		</>
	);
};

export default SingleFilm;
