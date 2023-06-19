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

type PropsWithoutFilms = {
	type: FilmsInSlider;
	page: string;
};

type PropsWithFilms = {
	films: DataObject[];
};

type SwiperBlockProps = PropsWithoutFilms | PropsWithFilms;

const SwiperBlock: React.FC<SwiperBlockProps> = (props) => {
	let films: DataObject[];

	if ('type' in props) {
		const { type, page } = props;
		const { content: filmsOnHomePage } = useSelector(selectSliderFilmsByType(type)) || {};
		const filmsOnSinglePage = useSelector(selectSimilarFilms);

		if (page === 'home' && filmsOnHomePage) {
			films = filmsOnHomePage.slice(1);
		} else {
			films = filmsOnSinglePage;
		}
	} else {
		films = props.films;
	}

	if (films.length === 0) {
		return <span className='relative z-10'>Фильмы не найдены :(</span>;
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
			{films.map((film, index) => (
				<SwiperSlide key={(film.filmId as number) + index}>
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
