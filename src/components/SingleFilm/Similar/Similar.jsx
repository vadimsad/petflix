import React from 'react';
import FilmSlider from '../../FilmSlider/FilmSlider';

const Similar = () => {
	return (
		<section className='mb-5'>
			<div className='p-5'>
				<h2 className='font-serif text-3xl mb-2'>Похожие</h2>
				<FilmSlider />
			</div>
		</section>
	);
};

export default Similar;
