import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchFilmReviews,
	selectFilmId,
	selectFilmReviews,
	selectFilmReviewsStatus,
} from '../../../../redux/slices/singleFilmSlice';
import ReviewsItem from './ReviewsItem/ReviewsItem';

const ReviewsItems = () => {
	const reviews = useSelector(selectFilmReviews);
	const reviewsStatus = useSelector(selectFilmReviewsStatus);
	const filmId = useSelector(selectFilmId);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilmReviews(filmId));
	}, []);

	if (reviewsStatus !== 'success') {
		return <div>Loading...</div>;
	}

	return (
		<div className='grid grid-cols-3 gap-3'>
			{reviews.map((review) => (
				<ReviewsItem
					key={review.kinopoiskId}
					author={review.author}
					date={review.date}
					ratingType={review.type}
					text={review.description}
				/>
			))}
		</div>
	);
};

export default ReviewsItems;
