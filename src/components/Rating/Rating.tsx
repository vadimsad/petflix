import React, { ReactNode } from 'react';

type RatingProps = {
	children: number | string;
	classNames?: string;
};

const Rating: React.FC<RatingProps> = ({ children, classNames }) => {
	const rating = normalizeRating(children);
	let background: string;

	if (rating >= 7) {
		background = 'bg-green';
	} else if (rating >= 3) {
		background = 'bg-yellow';
	} else {
		background = 'bg-red';
	}

	function normalizeRating(rating: number | string): number {
		const ratingNumber = typeof rating === 'string' ? parseInt(rating, 10) : rating;
		return ratingNumber > 10 ? ratingNumber / 10 : ratingNumber;
	}

	return (
		<span className={`inline-block rounded px-1 ${background} ${classNames}`}>
			{children ? rating : '-'}
		</span>
	);
};

export default Rating;
