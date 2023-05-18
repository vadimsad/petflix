import React from 'react';

const ReviewsItem = ({ author, date, ratingType, text, openModal, setModalInfo }) => {
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

	function handleOpenModal() {
		setModalInfo(layout(true));
		openModal();
	}

	function layout(isModal = false) {
		return (
			<blockquote
				className={`inline-block p-5 bg-notsolight dark:bg-notsodark rounded-xl ${
					isModal ? 'overflow-auto flex flex-col rounded-tr-none' : ''
				}`}
			>
				<header className='flex items-center justify-between mb-2'>
					<div className='flex flex-col'>
						<cite className='not-italic lg:text-xl text-lg'>{author}</cite>
						<time className='opacity-60 lg:text-sm text-xs'>{readableDate}</time>
					</div>
					<div
						className={`group flex justify-center bg-darkTransparent items-center p-2 rounded-lg`}
					>
						<span className='lg:text-xl text-lg group-hover:scale-90 transition-transform'>
							{ratingEmoji}
						</span>
					</div>
				</header>
				{isModal ? (
					<p className={`mb-2 overflow-auto lg:text-base text-sm`}>{text}</p>
				) : (
					<>
						<p className={`line-clamp-5 lg:mb-2 mb-1 lg:text-base text-sm`}>{text}</p>
						<button onClick={handleOpenModal} className='text-notsolight lg:text-base text-sm'>
							{'Читать полностью'}
						</button>
					</>
				)}
			</blockquote>
		);
	}

	return layout();
};

export default ReviewsItem;
