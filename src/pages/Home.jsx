import React from 'react';

import FilmSlider from '../components/FilmSlider/FilmSlider';
import MainCardBlock from '../components/MainCardBlock/MainCardBlock';
import { FilmCollectionType } from '../redux/types';
import { FilmsInSlider } from '../components/types';

const Home = () => {
	return (
		<>
			<div className='sm:p-5 sm:pt-0 p-0'>
				<div className='mb-10'>
					<h2 className='pt-5 pb-5 xl:text-4xl sm:text-3xl text-xl font-serif text-dark dark:text-light transition-colors'>
						Популярные фильмы:
					</h2>
					<MainCardBlock />
					<div className='flex gap-[15px]'>
						<FilmSlider
							type={FilmsInSlider.popular}
							typeForAPI={FilmCollectionType.TOP_100_POPULAR_FILMS}
							page='home'
						/>
					</div>
				</div>
				<div className='mb-10'>
					<h2 className='pb-5 xl:text-4xl sm:text-3xl text-xl font-serif text-dark dark:text-light transition-colors'>
						Лучшие фильмы:
					</h2>
					<FilmSlider
						type={FilmsInSlider.best}
						typeForAPI={FilmCollectionType.TOP_250_BEST_FILMS}
						page='home'
					/>
				</div>
				<div className='mb-10'>
					<h2 className='pb-5 xl:text-4xl sm:text-3xl text-xl font-serif text-dark dark:text-light transition-colors'>
						Самые ожидаемые фильмы:
					</h2>
					<FilmSlider
						type={FilmsInSlider.await}
						typeForAPI={FilmCollectionType.TOP_AWAIT_FILMS}
						page='home'
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
