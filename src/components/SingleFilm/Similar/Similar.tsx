import React from 'react';
import FilmSlider from '../../FilmSlider/FilmSlider';

const Similar: React.FC = () => {
	return (
		<section className='relative lg:mb-10 mb-8'>
			<h2 className='relative z-10 font-serif lg:text-3xl text-2xl lg:mb-3 mb-1 px-5'>Похожие</h2>
			<FilmSlider />
			<div className='absolute z-0 top-0 right-0 shadow-none dark:shadow-[0_0_500px_200px_rgba(18,38,59,1)] w-[100px] rounded-full'></div>
			<div className='absolute z-0 top-0 right-0 shadow-none dark:shadow-[0_0_500px_20px_rgba(220,234,240,1)] w-0 rounded-full'></div>
		</section>
	);
};

export default Similar;
