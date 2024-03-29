import React, { Dispatch, ReactNode, SetStateAction } from 'react';

interface ReviewsItemProps {
	author: string;
	date: string;
	ratingType: string;
	text: string;
	openModal: () => void;
	setModalInfo: Dispatch<SetStateAction<ReactNode>>;
}

const ReviewsItem: React.FC<ReviewsItemProps> = ({
	author,
	date,
	ratingType,
	text,
	openModal,
	setModalInfo,
}) => {
	const readableDate = new Date(date).toLocaleDateString('ru-RU', { dateStyle: 'long' });

	let ratingColor: string;
	let ratingEmoji: string;
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
				className={`inline-block sm:p-5 p-3 bg-notsolight dark:bg-notsodark rounded-xl ${
					isModal ? 'overflow-auto flex flex-col rounded-tr-none' : ''
				}`}
			>
				<header className='flex items-center justify-between mb-2'>
					<div className='flex flex-col'>
						<cite className='line-clamp-1 not-italic lg:text-xl text-lg'>{author}</cite>
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
						<button
							onClick={handleOpenModal}
							type='button'
							title='Показать весь отзыв'
							aria-label='Показать весь отзыв'
							className='text-notsodark dark:text-notsolight lg:text-base text-sm'
						>
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
