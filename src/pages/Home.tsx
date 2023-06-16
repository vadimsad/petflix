import React from 'react';

import FilmSlider from '../components/FilmSlider/FilmSlider';
import MainCardBlock from '../components/MainCardBlock/MainCardBlock';
import { FilmCollectionType } from '../redux/types';
import { FilmsInSlider } from '../components/types';

const Home: React.FC = () => {
	return (
		<>
			<div className='sm:p-5 sm:pt-0 p-0'>
				<div className='relative z-10 mb-10'>
					<h2 className='relative z-10 pt-5 pb-5 xl:text-4xl sm:text-3xl text-xl font-serif text-dark dark:text-light transition-colors'>
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
					<div className='absolute z-0 top-0 left-1/8 shadow-none dark:shadow-[0_0_500px_500px_rgba(18,38,59,1)] w-0 rounded-full'></div>
				</div>
				<div className='relative mb-10'>
					<h2 className='relative z-10 pb-5 xl:text-4xl sm:text-3xl text-xl font-serif text-dark dark:text-light transition-colors'>
						Лучшие фильмы:
					</h2>
					<FilmSlider
						type={FilmsInSlider.best}
						typeForAPI={FilmCollectionType.TOP_250_BEST_FILMS}
						page='home'
					/>
					<div className='absolute top-0 right-0 shadow-none dark:shadow-[0_0_500px_200px_rgba(18,38,59,1)] w-[100px] rounded-full'></div>
					<div className='absolute top-1/2 right-0 shadow-none dark:shadow-[0_0_500px_20px_rgba(220,234,240,1)] w-0 rounded-full'></div>
				</div>
				<div className='relative mb-10'>
					<h2 className='relative z-10 pb-5 xl:text-4xl sm:text-3xl text-xl font-serif text-dark dark:text-light transition-colors'>
						Самые ожидаемые фильмы:
					</h2>
					<FilmSlider
						type={FilmsInSlider.await}
						typeForAPI={FilmCollectionType.TOP_AWAIT_FILMS}
						page='home'
					/>
					<div className='absolute z-0 top-1/2 left-0 shadow-none dark:shadow-[0_0_500px_200px_rgba(18,38,59,1)] w-[100px] rounded-full'></div>
				</div>
			</div>
		</>
	);
};

export default Home;
