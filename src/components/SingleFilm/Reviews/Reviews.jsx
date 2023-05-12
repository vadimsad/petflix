import React from 'react';
import ReviewsItems from './ReviewsItems/ReviewsItems';

const Reviews = () => {
	return (
		<section className='mb-10'>
			<h2 className='font-serif text-3xl mb-3 px-5'>Отзывы</h2>
			<ReviewsItems />
		</section>
	);
};

export default Reviews;
