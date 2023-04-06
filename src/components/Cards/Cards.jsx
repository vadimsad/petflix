import React, { useEffect, useState } from 'react';
import MainCard from './MainCard/MainCard';
import Card from './Card/Card';
import useDidMountEffect from '../../hooks/useDidMountEffect/useDidMountEffect';
import MainCardLoader from './MainCard/MainCardLoader';
import CardLoader from './Card/CardLoader';

const HEADERS = {
	'X-API-KEY': '290a29e5-6a38-41ae-a8bf-f1708456187d',
	'Content-Type': 'application/json',
};

const Cards = () => {
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
				let minorFilms = json.films.slice(1, 6);

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
			<div className='h-[400px] w-full relative mb-[20px] rounded-[50px] overflow-hidden pb-[40%]'>
				{isLoading ? (
					<MainCardLoader />
				) : (
					<MainCard
						name={mainFilmName}
						imagesrc={mainFilmImage}
						description={mainFilmDescription}
						alt='Постер'
					/>
				)}
			</div>
			<div className='flex gap-[15px]'>
				{isLoading
					? [...Array(5)].map((_, index) => <CardLoader key={index} />)
					: minorFilms.map((film, index) => (
							<Card
								key={index}
								name={film.nameRu}
								imagesrc={film.posterUrl}
								rating={film.rating}
								year={film.year}
								genres={film.genres}
								alt='Постер'
							/>
					  ))}
			</div>
		</div>
	);
};

export default Cards;
