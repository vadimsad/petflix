import React from 'react';

const ReviewsItem = ({ author, date, ratingType, text }) => {
	return (
		<blockquote className='inline-block p-5 bg-notsolight dark:bg-notsodark rounded-xl'>
			<header className='flex items-center justify-between'>
				<div className='flex flex-col'>
					<cite className='non-italic'>{author}</cite>
					<time>{date}</time>
				</div>
				<div>{ratingType}</div>
			</header>
			<p className='line-clamp-5'>{text}</p>
		</blockquote>
	);
};

export default ReviewsItem;
