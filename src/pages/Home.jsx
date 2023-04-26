import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { api } from '../api/API';
import {
	setFilms,
	setMainFilm,
	setMainFilmImage,
	setStartLoading,
} from '../redux/slices/filmsSlice';
import FilmSlider from '../components/FilmSlider/FilmSlider';
import MainCardBlock from '../components/MainCardBlock/MainCardBlock';
import useFilmImages from '../hooks/useFilmImages/useFilmImages';

const Home = () => {
	const { popular, mainFilm } = useSelector((state) => state.films);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setStartLoading('popular'));

		api.getPopular(1).then((res) => {
			dispatch(setFilms({ category: 'popular', films: res.films }));
		});
	}, []);

	useEffect(() => {
		if (popular.isLoading) return;

		dispatch(setStartLoading('mainFilm'));
		api
			.getFilmById(popular.content[0].filmId)
			.then((res) => {
				dispatch(setMainFilm(res));
			})
			.catch(console.log);
	}, [popular]);

	useEffect(() => {
		if (mainFilm.isLoading) return;
		useFilmImages(mainFilm.content.kinopoiskId, 'STILL', 1).then((res) => {
			dispatch(setMainFilmImage(res));
		});
	}, [mainFilm]);

	return (
		<>
			<h1 className='sm:p-5 pb-5 pt-5 xl:text-4xl sm:text-3xl text-2xl font-serif text-dark dark:text-light transition-colors'>
				Популярно сейчас:
			</h1>
			<div className='sm:p-5 sm:pt-0 p-0'>
				<MainCardBlock />
				<div className='flex gap-[15px]'>
					<FilmSlider />
				</div>
			</div>
		</>
	);
};

export default Home;
