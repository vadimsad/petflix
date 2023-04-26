import React from 'react';
import { useSelector } from 'react-redux';

import SwiperBlock from './SwiperBlock/SwiperBlock';
import CardLoader from '../Cards/Card/CardLoader';

const slidesPerView =
	window.innerWidth <= 1024 ? (window.innerWidth <= 640 ? 3 : 4) : 5;

const FilmSlider = () => {
	const isLoading = useSelector((state) => state.films.popular.isLoading);

	return (
		<>
			{isLoading ? (
				[...Array(slidesPerView)].map((_, index) => <CardLoader key={index} />)
			) : (
				<SwiperBlock />
			)}
		</>
	);
};

export default FilmSlider;
