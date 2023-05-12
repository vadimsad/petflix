import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import {
	fetchFilmReviews,
	selectFilmId,
	selectFilmReviews,
	selectFilmReviewsStatus,
} from '../../../../redux/slices/singleFilmSlice';
import ReviewsItem from './ReviewsItem/ReviewsItem';

import 'swiper/css';
import 'swiper/css/navigation';

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
		<Swiper
			spaceBetween={10}
			slidesPerView={1.5}
			slidesPerGroup={1}
			modules={[Navigation]}
			navigation={true}
			breakpoints={{
				1024: {
					slidesPerView: 2.5,
					slidesPerGroup: 2,
				},
				// 640: {
				// 	slidesPerView: 1.5,
				// 	slidesPerGroup: 1,
				// 	spaceBetween: 15,
				// },
			}}
		>
			{reviews.map((review) => (
				<SwiperSlide key={review.kinopoiskId}>
					<ReviewsItem
						author={review.author}
						date={review.date}
						ratingType={review.type}
						text={review.description}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ReviewsItems;
