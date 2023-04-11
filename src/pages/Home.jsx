import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import useDidMountEffect from '../hooks/useDidMountEffect/useDidMountEffect';

import { api } from '../api/API';
import MainCard from '../components/Cards/MainCard/MainCard';
import Card from '../components/Cards/Card/Card';
import MainCardLoader from '../components/Cards/MainCard/MainCardLoader';
import CardLoader from '../components/Cards/Card/CardLoader';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HEADERS = {
	'X-API-KEY': '290a29e5-6a38-41ae-a8bf-f1708456187d',
	'Content-Type': 'application/json',
};

const slidesPerView =
	window.innerWidth <= 1024 ? (window.innerWidth <= 640 ? 3 : 4) : 5;
const minorFilmsQuantity = 13;

const Home = () => {
	const [minorFilms, setMinorFilms] = useState([]);
	const [mainFilmId, setMainFilmId] = useState(0);
	const [mainFilmName, setMainFilmName] = useState('');
	const [mainFilmDescription, setMainFilmDescription] = useState('');
	const [mainFilmImage, setMainFilmImage] = useState('');

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api
			.getPopular(1)
			.then((res) => {
				let mainFilm = res.films.slice(0, 1)[0];
				let minorFilms = res.films.slice(1, minorFilmsQuantity + 1);

				setMainFilmId(mainFilm.filmId);
				setMinorFilms(minorFilms);
			})
			.catch(console.log);
	}, []);

	useDidMountEffect(() => {
		api
			.getFilmById(mainFilmId)
			.then((res) => {
				setMainFilmName(res.nameRu);
				setMainFilmDescription(res.description);
				isLoading && setIsLoading(false);
			})
			.catch(console.log);
		api
			.getFilmImages(mainFilmId, 'STILL', 1)
			.then((res) => {
				setMainFilmImage(res.items[0].imageUrl);
				isLoading && setIsLoading(false);
			})
			.catch(console.log);
	}, [mainFilmId]);

	return (
		<div className='xsm:p-5 p-3'>
			{isLoading ? (
				<div className='w-full relative sm:mb-[20px] mb-[10px] rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden'>
					<MainCardLoader />
				</div>
			) : (
				<div className='lg:h-[400px] md:h-[300px] h-auto w-full relative sm:mb-[20px] mb-[10px] lg:rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden md:pb-[40%] pb-0'>
					<MainCard
						name={mainFilmName}
						imagesrc={mainFilmImage}
						description={mainFilmDescription}
						alt='Постер'
					/>
				</div>
			)}
			<div className='flex gap-[15px]'>
				{isLoading ? (
					[...Array(slidesPerView)].map((_, index) => (
						<CardLoader key={index} />
					))
				) : (
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
						{minorFilms.map((film, index) => (
							<SwiperSlide key={index}>
								<Card
									key={index}
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
				)}
			</div>
		</div>
	);
};

export default Home;
