import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch } from '../../../redux/store';
import {
	fetchFilmFacts,
	selectFilmFacts,
	selectFilmFactsStatus,
	selectFilmId,
} from '../../../redux/slices/singleFilmSlice';
import { FetchStatus } from '../../../redux/types';
import Fact from './Fact/Fact';

const Facts: React.FC = () => {
	const filmId = useSelector(selectFilmId) as number;
	const facts = useSelector(selectFilmFacts);
	const factsStatus = useSelector(selectFilmFactsStatus);
	const dispatch: AppThunkDispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilmFacts(filmId));
	}, [filmId]);

	if (factsStatus === FetchStatus.loading) {
		return <h2>Загрузка ...</h2>;
	} else if (factsStatus === FetchStatus.error) {
		return <h2>Произошла ошибка получения фактов :(</h2>;
	} else if (factsStatus === FetchStatus.success && facts.length === 0) {
		return null;
	}

	return (
		<>
			<h2 className='font-serif lg:text-3xl text-2xl lg:mb-3 mb-1'>Факты из фильма</h2>
			<div className='lg:mb-3 mb-1 lg:text-base text-sm'>
				<ul className='flex flex-col gap-3'>
					{facts.map((fact, index) => {
						if (index <= 4) {
							return (
								<li key={index}>
									<Fact>{fact.text}</Fact>
								</li>
							);
						}
					})}
				</ul>
			</div>
		</>
	);
};

export default Facts;
