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
import { AppThunkDispatch } from '../redux/store';
import { Country, Genre } from '../redux/types';

const SingleFilm: React.FC = () => {
	const { id } = useParams();
	const { status, content: film } = useSelector(selectFilm);
	const dispatch: AppThunkDispatch = useDispatch();

	useEffect(() => {
		if (id) {
			dispatch(fetchFilm(+id));
		}
	}, [id]);

	if (status !== 'success') {
		return <div>Loading...</div>;
	}

	const genresShown = (film.genres as Genre[]).slice(0, 3);
	return (
		<>
			<FilmHeader
				id={+film.kinopoiskId}
				logoUrl={film.logoUrl as string}
				name={(film.nameRu || film.nameEn || film.nameOriginal) as string}
				rating={film.ratingKinopoisk as number}
				year={film.year as number}
				length={film.filmLength as number}
				shortDescription={film.shortDescription as string}
				countries={film.countries as Country[]}
				imageUrl={film.imageUrl as string}
				posterUrl={film.posterUrl as string}
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
