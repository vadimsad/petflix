import React from 'react';
import ReviewsItems from './ReviewsItems/ReviewsItems';

const Reviews = () => {
	return (
		<section className='p-5'>
			<h2 className='font-serif text-3xl mb-2'>Отзывы</h2>
			<ReviewsItems />
		</section>
	);
};

export default Reviews;
