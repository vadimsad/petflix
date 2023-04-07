import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import useDidMountEffect from '../hooks/useDidMountEffect/useDidMountEffect';

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

const minorFilmsQuantity = 13;

const Home = () => {
	const [minorFilms, setMinorFilms] = useState([]);
	const [mainFilmId, setMainFilmId] = useState(0);
	const [mainFilmName, setMainFilmName] = useState('');
	const [mainFilmDescription, setMainFilmDescription] = useState('');
	const [mainFilmImage, setMainFilmImage] = useState('');

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(
			'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
			{
				method: 'GET',
				headers: HEADERS,
			}
		)
			.then((res) => res.json())
			.then((json) => {
				let mainFilm = json.films.slice(0, 1)[0];
				let minorFilms = json.films.slice(1, minorFilmsQuantity + 1);

				setMainFilmId(mainFilm.filmId);
				setMinorFilms(minorFilms);
			});
	}, []);

	useDidMountEffect(() => {
		let FilmIdPromise = fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/${mainFilmId}`,
			{
				method: 'GET',
				headers: HEADERS,
			}
		)
			.then((res) => res.json())
			.then((json) => {
				setMainFilmName(json.nameRu);
				setMainFilmDescription(json.description);
			});
		let FilmCoverPromise = fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/${mainFilmId}/images?type=STILL&page=1`,
			{
				method: 'GET',
				headers: HEADERS,
			}
		)
			.then((res) => res.json())
			.then((json) => {
				setMainFilmImage(json.items[0].imageUrl);
			});
		Promise.all([FilmIdPromise, FilmCoverPromise]).then(() => {
			setIsLoading(false);
		});
	}, [mainFilmId]);

	return (
		<div className='p-5'>
			{isLoading ? (
				<div className='w-full relative mb-[20px] rounded-[50px] overflow-hidden'>
					<MainCardLoader />
				</div>
			) : (
				<div className='lg:h-[400px] h-[360px] w-full relative mb-[20px] lg:rounded-[50px] rounded-[30px] overflow-hidden pb-[40%]'>
					<MainCard
						name={mainFilmName}
						imagesrc={mainFilmImage}
						description={mainFilmDescription}
						alt='Постер'
					/>
				</div>
			)}
			<div className=''>
				{isLoading ? (
					[...Array(5)].map((_, index) => <CardLoader key={index} />)
				) : (
					<Swiper
						spaceBetween={15}
						slidesPerView={5}
						slidesPerGroup={4}
						modules={[Navigation]}
						navigation={true}
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
