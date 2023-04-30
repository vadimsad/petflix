import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainCard from '../Cards/MainCard/MainCard';
import MainCardLoader from '../Cards/MainCard/MainCardLoader';
import { api } from '../../api/API';
import {
	setFilms,
	setMainFilm,
	setMainFilmImage,
	setStartLoading,
	setStopLoading,
} from '../../redux/slices/filmsSlice';
import useFilmImages from '../../hooks/useFilmImages/useFilmImages';

const MainCardBlock = () => {
	const { mainFilm, popular } = useSelector((state) => state.films);
	const dispatch = useDispatch();

	useEffect(() => {
		if (popular.isLoading) return;

		dispatch(setStartLoading('mainFilm'));
		api
			.getFilmById(popular.content[0].filmId)
			.then((res) => {
				dispatch(setMainFilm(res));
			})
			.catch(console.log);
		dispatch(setStopLoading('mainFilm'));
	}, [popular]);

	useEffect(() => {
		if (mainFilm.isLoading) return;

		useFilmImages(mainFilm.content.kinopoiskId, 'STILL', 1).then((res) => {
			dispatch(setMainFilmImage(res));
		});
	}, [mainFilm]);

	return (
		<>
			{mainFilm.isLoading ? (
				<div className='w-full relative sm:mb-[20px] mb-[10px] rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden'>
					<MainCardLoader />
				</div>
			) : (
				<div className='lg:h-[400px] md:h-[300px] h-auto w-full relative sm:mb-[20px] mb-[10px] lg:rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden md:pb-[40%] pb-0'>
					<MainCard
						name={
							mainFilm.content.nameRu || mainFilm.content.nameEn || mainFilm.content.nameOriginal
						}
						imagesrc={mainFilm.image}
						description={mainFilm.content.description}
						alt='Постер'
					/>
				</div>
			)}
		</>
	);
};

export default MainCardBlock;
