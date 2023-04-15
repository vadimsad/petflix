import React from 'react';

import SwiperBlock from './SwiperBlock/SwiperBlock';
import CardLoader from '../Cards/Card/CardLoader';

const FilmSlider = ({ isLoading, slidesPerView, minorFilms }) => {
	return (
		<>
			{isLoading ? (
				[...Array(slidesPerView)].map((_, index) => <CardLoader key={index} />)
			) : (
				<SwiperBlock minorFilms={minorFilms} />
			)}
		</>
	);
};

export default FilmSlider;
