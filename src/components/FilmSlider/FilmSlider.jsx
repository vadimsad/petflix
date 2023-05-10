import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SwiperBlock from './SwiperBlock/SwiperBlock';
import CardLoader from '../Cards/Card/CardLoader';
import { fetchSliderFilms, selectSliderFilmsByType } from '../../redux/slices/sliderFilmsSlice';
import {
	fetchSliderFilmsSimilar,
	selectFilmId,
	selectSimilarFilmsStatus,
} from '../../redux/slices/singleFilmSlice';

const slidesPerView = window.innerWidth <= 1024 ? (window.innerWidth <= 640 ? 3 : 4) : 5;

const FilmSlider = ({ type, typeForAPI, page }) => {
	const { status: statusOnHomePage } = useSelector(selectSliderFilmsByType(type)) || {};
	const statusOnSinglePage = useSelector(selectSimilarFilmsStatus);
	// console.log(statusOnHomePage, statusOnSinglePage);
	const id = useSelector(selectFilmId);
	const dispatch = useDispatch();

	let status;

	if (page === 'home') {
		status = statusOnHomePage;
	} else {
		status = statusOnSinglePage;
	}

	useEffect(() => {
		// Если компонент вызван со страницы Home, делаем один экшен
		if (page === 'home') {
			dispatch(fetchSliderFilms({ type, typeForAPI, page: 1 }));
		} else {
			// Если со страницы SingleFilm, делаем другой экшен
			dispatch(fetchSliderFilmsSimilar(id));
		}
	}, []);

	return (
		<>
			{status === 'success' ? (
				<SwiperBlock type={type} page={page} />
			) : status === 'loading' ? (
				[...Array(slidesPerView)].map((_, index) => <CardLoader key={index} />)
			) : (
				'Ошибка загрузки'
			)}
		</>
	);
};

export default FilmSlider;
