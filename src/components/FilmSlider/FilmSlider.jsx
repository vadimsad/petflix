import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SwiperBlock from './SwiperBlock/SwiperBlock';
import CardLoader from '../Cards/Card/CardLoader';
import { fetchSliderFilms, selectSliderFilmsByType } from '../../redux/slices/sliderFilmsSlice';

const slidesPerView = window.innerWidth <= 1024 ? (window.innerWidth <= 640 ? 3 : 4) : 5;

const FilmSlider = ({ type, typeForAPI }) => {
	const { status } = useSelector(selectSliderFilmsByType(type));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSliderFilms({ type, typeForAPI, page: 1 }));
	}, []);

	return (
		<>
			{status === 'success' ? (
				<SwiperBlock type={type} />
			) : status === 'loading' ? (
				[...Array(slidesPerView)].map((_, index) => <CardLoader key={index} />)
			) : (
				'Ошибка загрузки'
			)}
		</>
	);
};

export default FilmSlider;
