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
			<h2 className='font-serif lg:text-3xl text-2xl lg:mb-3 mb-1'>Награды</h2>
			<ul className='flex flex-wrap gap-4'>
				{awards.map((award, index) => (
					<li
						className={`flex-[1_0_50%] lg:max-w-[150px] md:max-w-[150px] xsm:max-w-[120px] max-w-[100px] bg-lightTransparent dark:bg-darkTransparent rounded-lg xl:px-3 xl:py-4 px-1 py-2 group`}
						key={index}
					>
						<div className='w-full xl:h-[100px] xsm:h-[80px] h-[60px] mb-2 group-hover:scale-[0.95] transition-transform'>
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
