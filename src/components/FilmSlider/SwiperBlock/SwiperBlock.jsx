import React from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../../Cards/Card/Card';
import { selectSliderFilmsByType } from '../../../redux/slices/sliderFilmsSlice';
import { Link } from 'react-router-dom';
import { selectSimilarFilms } from '../../../redux/slices/singleFilmSlice';

const SwiperBlock = ({ type, page }) => {
	const { content: filmsOnHomePage } = useSelector(selectSliderFilmsByType(type)) || {};
	const filmsOnSinglePage = useSelector(selectSimilarFilms);

	let films;

	if (page === 'home') {
		films = filmsOnHomePage.slice(1);
	} else {
		films = filmsOnSinglePage;
	}

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
			{films.map((film) => (
				<SwiperSlide key={film.filmId}>
					<Link to={`/catalog/${film.filmId}`} key={film.filmId}>
						<Card
							name={film.nameRu || film.nameEn}
							imagesrc={film.posterUrl}
							rating={film.rating}
							year={film.year}
							genres={film.genres}
							alt='Постер'
						/>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperBlock;
