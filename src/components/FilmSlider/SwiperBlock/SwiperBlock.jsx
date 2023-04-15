import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import Card from '../../Cards/Card/Card';

const SwiperBlock = ({ minorFilms }) => {
	return (
		<Swiper
			spaceBetween={10}
			slidesPerView={3}
			slidesPerGroup={2}
			modules={[Navigation]}
			navigation={true}
			breakpoints={{
				1024: {
					slidesPerView: 5,
					slidesPerGroup: 4,
				},
				640: {
					slidesPerView: 4,
					slidesPerGroup: 3,
					spaceBetween: 15,
				},
			}}
		>
			{minorFilms.map((film) => (
				<SwiperSlide key={film.filmId}>
					<Card
						key={film.filmId}
						name={film.nameRu}
						imagesrc={film.posterUrl}
						rating={film.rating}
						year={film.year}
						genres={film.genres}
						alt='Постер'
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperBlock;
