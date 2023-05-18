import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFilmAwards, selectFilmId } from '../../../redux/slices/singleFilmSlice';
import { selectFilmAwards } from '../../../redux/slices/singleFilmSlice';

const Awards = () => {
	const filmId = useSelector(selectFilmId);
	const awards = useSelector(selectFilmAwards);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilmAwards(filmId));
	}, []);

	return (
		<>
			<h2 className='font-serif text-3xl mb-3'>Награды</h2>
			<ul className='flex flex-wrap gap-4'>
				{awards.map((award, index) => (
					<li
						className={`lg:flex-1 flex-[0_0_120px] bg-darkTransparent rounded-lg xl:p-3 p-1`}
						key={index}
					>
						<div className='w-full xl:h-[200px] lg:h-[150px] h-[100px] xl:p-6 p-4'>
							<img
								src={award.imageUrl}
								alt={award.name}
								title={award.name}
								className='w-full h-full object-contain'
							/>
						</div>
						<div className='text-center'>
							<span className='opacity-70 lg:text-sm text-xs'>{award.year} г.</span>
							<p className='lg:text-base text-xs'>{award.nominationName}</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default Awards;
