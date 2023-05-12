import React, { useRef, useState } from 'react';
import useModal from '../../../../../hooks/useModal/useModal';

const ReviewsItem = ({ author, date, ratingType, text }) => {
	const ref = useRef();
	const [showFullText, setShowFullText] = useModal(ref);

	const readableDate = new Date(date).toLocaleDateString('ru-RU', { dateStyle: 'long' });

	let ratingColor;
	let ratingEmoji;
	switch (ratingType) {
		case 'POSITIVE': {
			ratingColor = 'bg-green';
			ratingEmoji = '🥰';
			break;
		}
		case 'NEUTRAL': {
			ratingColor = 'bg-yellow';
			ratingEmoji = '😐';
			break;
		}
		case 'NEGATIVE': {
			ratingColor = 'bg-red';
			ratingEmoji = '😞';
			break;
		}
	}

	return (
		<blockquote className='inline-block p-5 bg-notsolight dark:bg-notsodark rounded-xl'>
			<header className='flex items-center justify-between mb-2'>
				<div className='flex flex-col'>
					<cite className='not-italic text-xl'>{author}</cite>
					<time className='opacity-60 text-sm'>{readableDate}</time>
				</div>
				<div className={`flex justify-center bg-darkTransparent items-center p-2 rounded-lg`}>
					<span className='text-xl'>{ratingEmoji}</span>
				</div>
			</header>
			<p className={`line-clamp-5 mb-2`}>{text}</p>
			<button
				onClick={() => {
					setShowFullText((prev) => !prev);
				}}
				className='text-notsolight'
			>
				{showFullText ? 'Скрыть' : 'Читать полностью'}
			</button>
			<dialog ref={ref}>Описание</dialog>
		</blockquote>
	);
};

export default ReviewsItem;
