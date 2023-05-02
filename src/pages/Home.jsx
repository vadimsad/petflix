import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { api } from '../api/API';
import { setFilms, setStartLoading, setStopLoading } from '../redux/slices/filmsSlice';
import FilmSlider from '../components/FilmSlider/FilmSlider';
import MainCardBlock from '../components/MainCardBlock/MainCardBlock';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setStartLoading('popular'));

		api.getPopular(1).then((res) => {
			dispatch(setFilms({ category: 'popular', films: res.films }));
			dispatch(setStopLoading('popular'));
		});
	}, []);

	return (
		<>
			<h1 className='sm:p-5 pb-5 pt-5 xl:text-4xl sm:text-3xl text-2xl font-serif text-dark dark:text-light transition-colors'>
				Популярно сейчас:
			</h1>
			<div className='sm:p-5 sm:pt-0 p-0'>
				<MainCardBlock />
				<div className='flex gap-[15px]'>
					<FilmSlider />
				</div>
			</div>
		</>
	);
};

export default Home;
