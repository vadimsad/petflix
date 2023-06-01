import React, { Key, ReactNode, useEffect, useState } from 'react';
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

import Modal from '../../../Modal/Modal';
import useModal from '../../../../hooks/useModal/useModal';
import { AppDispatch } from '../../../../redux/store';
import { FetchStatus } from '../../../../redux/types';

const ReviewsItems: React.FC = () => {
	const reviews = useSelector(selectFilmReviews);
	const reviewsStatus = useSelector(selectFilmReviewsStatus);
	const filmId = useSelector(selectFilmId) as number;
	const dispatch: AppDispatch = useDispatch();

	const [modalInfo, setModalInfo] = useState<ReactNode>(null);
	const { ref, onOpen, onClose } = useModal();

	function handleCloseModal() {
		setModalInfo(null);
		onClose();
	}

	useEffect(() => {
		dispatch(fetchFilmReviews(filmId));
	}, []);

	if (reviewsStatus === FetchStatus.loading) {
		return <h2>Loading ...</h2>;
	} else if (reviewsStatus === FetchStatus.error) {
		return <h2>Произошла ошибка получения отзывов :(</h2>;
	} else if (reviewsStatus === FetchStatus.success && reviews.length === 0) {
		return <h2>Отзывы не найдены :(</h2>;
	}

	return (
		<>
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
				}}
			>
				{reviews.map((review) => (
					<SwiperSlide key={review.kinopoiskId as Key}>
						<ReviewsItem
							author={review.author as string}
							date={review.date as string}
							ratingType={review.type as string}
							text={review.description as string}
							openModal={onOpen}
							setModalInfo={setModalInfo}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Modal ref={ref} onClose={handleCloseModal}>
				{modalInfo}
			</Modal>
		</>
	);
};

export default ReviewsItems;
