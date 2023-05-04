import React from 'react';

import FilmSlider from '../components/FilmSlider/FilmSlider';
import MainCardBlock from '../components/MainCardBlock/MainCardBlock';

const Home = () => {
	return (
		<>
			<h1 className='sm:p-5 pb-5 pt-5 xl:text-4xl sm:text-3xl text-2xl font-serif text-dark dark:text-light transition-colors'>
				Популярно сейчас:
			</h1>
			<div className='sm:p-5 sm:pt-0 p-0'>
				<MainCardBlock />
				<div className='flex gap-[15px]'>
					<FilmSlider type='popular' typeForAPI='TOP_100_POPULAR_FILMS' />
				</div>
			</div>
		</>
	);
};

export default Home;
