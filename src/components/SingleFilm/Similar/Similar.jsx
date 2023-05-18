import React from 'react';
import FilmSlider from '../../FilmSlider/FilmSlider';

const Similar = () => {
	return (
		<section className='lg:mb-10 mb-8'>
			<h2 className='font-serif lg:text-3xl text-2xl lg:mb-3 mb-1 px-5'>Похожие</h2>
			<FilmSlider />
		</section>
	);
};

export default Similar;
