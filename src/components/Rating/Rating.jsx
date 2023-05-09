import React from 'react';

const Rating = ({ children }) => {
	const rating = normalizeRating(children);
	let background;

	if (rating >= 7) {
		background = 'bg-green';
	} else if (rating >= 3) {
		background = 'bg-yellow';
	} else {
		background = 'bg-red';
	}

	function normalizeRating(rating) {
		const ratingNumber = parseInt(children);
		if (ratingNumber > 10) {
			return ratingNumber / 10;
		} else {
			return rating;
		}
	}

	return (
		<span className={`inline-block rounded px-1 ${background}`}>{children ? rating : '-'}</span>
	);
};

export default Rating;
