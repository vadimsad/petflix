import React from 'react';
import ReviewsItems from './ReviewsItems/ReviewsItems';

const Reviews = () => {
	return (
		<section className='lg:mb-10 mb-8'>
			<h2 className='font-serif lg:text-3xl text-2xl lg:mb-3 mb-1 px-5'>Отзывы</h2>
			<ReviewsItems />
		</section>
	);
};

export default Reviews;
