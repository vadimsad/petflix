import React, { useEffect, useState } from 'react';

import useDidMountEffect from '../hooks/useDidMountEffect/useDidMountEffect';

import FilmSlider from '../components/FilmSlider/FilmSlider';

import MainCardBlock from '../components/MainCardBlock/MainCardBlock';
import usePopularFilms from '../hooks/usePopularFilms/usePopularFilms';
import useFilmById from '../hooks/useFilmById/useFilmById';
import useFilmImages from '../hooks/useFilmImages/useFilmImages';

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
		usePopularFilms(setMainFilmId, setMinorFilms, minorFilmsQuantity);
	}, []);

	useDidMountEffect(() => {
		useFilmById(
			mainFilmId,
			setMainFilmName,
			setMainFilmDescription,
			isLoading,
			setIsLoading
		);
		useFilmImages(
			{ mainFilmId, imageType: 'STILL', pageNumber: 1 },
			setMainFilmImage,
			isLoading,
			setIsLoading
		);
	}, [mainFilmId]);

	return (
		<div className='sm:p-5 p-0'>
			<MainCardBlock
				isLoading={isLoading}
				mainFilmName={mainFilmName}
				mainFilmImage={mainFilmImage}
				mainFilmDescription={mainFilmDescription}
			/>
			<div className='flex gap-[15px]'>
				<FilmSlider
					isLoading={isLoading}
					slidesPerView={slidesPerView}
					minorFilms={minorFilms}
				/>
			</div>
		</div>
	);
};

export default Home;
