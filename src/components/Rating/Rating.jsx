import React from 'react';

const Rating = ({ children }) => {
	let background;

	if (children >= 7) {
		background = 'bg-green';
	} else if (children >= 3) {
		background = 'bg-yellow';
	} else {
		background = 'bg-red';
	}

	return <span className={`inline-block rounded px-1 ${background}`}>{children}</span>;
};

export default Rating;
