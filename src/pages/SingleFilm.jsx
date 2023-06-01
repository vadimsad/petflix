import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilm, selectFilm } from '../redux/slices/singleFilmSlice';

import FilmHeader from '../components/SingleFilm/FilmHeader/FilmHeader';
import Description from '../components/SingleFilm/Description/Description';
import DescriptionWrapper from '../components/SingleFilm/DescriptionWrapper/DescriptionWrapper';
import Similar from '../components/SingleFilm/Similar/Similar';
import Reviews from '../components/SingleFilm/Reviews/Reviews';
import Awards from '../components/SingleFilm/Awards/Awards';
import Facts from '../components/SingleFilm/Facts/Facts';

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
				id={film.kinopoiskId}
				logoUrl={film.logourl}
				name={film.nameRu || film.nameEn || film.nameOriginal}
				rating={film.ratingKinopoisk}
				year={film.year}
				length={film.filmLength}
				shortDescription={film.shortDescription}
				countries={film.countries}
				imageUrl={film.imageUrl}
				posterUrl={film.posterUrl}
				genres={genresShown}
			/>
			<DescriptionWrapper>
				<Description>{film.description || 'Описание отсутствует :('}</Description>
				<Facts />
				<Awards />
			</DescriptionWrapper>
			<Similar />
			<Reviews />
		</>
	);
};

export default SingleFilm;
