import React from 'react';
import { useSelector } from 'react-redux';

import CardLoader from '../Cards/Card/CardLoader';
import Cards from '../Cards/Cards';

const CardBlock = () => {
	const { isLoading } = useSelector((state) => state.films.all);
	return (
		<>
			{/* Нужно сделать состояние загрузки для каждой карточки отдельно */}
			{isLoading ? (
				[...Array(20)].map((_, index) => <CardLoader key={index} />)
			) : (
				<Cards />
			)}
		</>
	);
};

export default CardBlock;
