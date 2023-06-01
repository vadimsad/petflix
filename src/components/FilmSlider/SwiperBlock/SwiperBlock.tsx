import React, { Key } from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../../Cards/Card/Card';
import { selectSliderFilmsByType } from '../../../redux/slices/sliderFilmsSlice';
import { Link } from 'react-router-dom';
import { selectSimilarFilms } from '../../../redux/slices/singleFilmSlice';
import { FilmsInSlider } from '../../types';
import { DataObject, Genre } from '../../../redux/types';

type SwiperBlockProps = {
	type: FilmsInSlider;
	page: string;
};

const SwiperBlock: React.FC<SwiperBlockProps> = ({ type, page }) => {
	const { content: filmsOnHomePage } = useSelector(selectSliderFilmsByType(type)) || {};
	const filmsOnSinglePage = useSelector(selectSimilarFilms);

	let films: DataObject[];

	if (page === 'home' && filmsOnHomePage) {
		films = filmsOnHomePage.slice(1);
	} else {
		films = filmsOnSinglePage;
	}

	if (films.length === 0) {
		return <span>Фильмы не найдены :(</span>;
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
				<SwiperSlide key={film.filmId as Key}>
					<Link to={`/catalog/${film.filmId}`}>
						<Card
							id={film.filmId as number}
							name={(film.nameRu as string) || (film.nameEn as string)}
							imagesrc={film.posterUrl as string}
							rating={(film.rating as number) || 0}
							year={film.year as number}
							genres={(film.genres as Genre[]) || []}
							alt='Постер'
						/>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperBlock;
