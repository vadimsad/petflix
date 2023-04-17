import React from 'react';

import CardLoader from '../Cards/Card/CardLoader';
import Cards from '../Cards/Cards';

const CardBlock = ({ isLoading, films }) => {
	return (
		<>
			{isLoading ? (
				[...Array(20)].map((_, index) => <CardLoader key={index} />)
			) : (
				<Cards films={films} />
			)}
		</>
	);
};

export default CardBlock;