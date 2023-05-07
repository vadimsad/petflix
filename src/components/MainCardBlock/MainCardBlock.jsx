import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainCard from '../Cards/MainCard/MainCard';
import MainCardLoader from '../Cards/MainCard/MainCardLoader';
import { fetchMainFilm, selectMainFilm } from '../../redux/slices/mainFilmSlice';
import { selectSliderFilms } from '../../redux/slices/sliderFilmsSlice';

const MainCardBlock = () => {
	const { content: mainFilm, status, imageUrl } = useSelector(selectMainFilm);
	const { popular } = useSelector(selectSliderFilms);
	const dispatch = useDispatch();

	useEffect(() => {
		if (popular.status !== 'success') return;
		const mainFilmId = popular.content[0].filmId;
		dispatch(fetchMainFilm({ id: mainFilmId, imageType: 'STILL', page: 1 }));
	}, [popular]);

	return (
		<>
			{status === 'success' ? (
				<div className='lg:h-[400px] md:h-[300px] h-auto w-full relative sm:mb-[20px] mb-[10px] lg:rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden md:pb-[40%] pb-0'>
					<MainCard
						name={mainFilm.nameRu || mainFilm.nameEn || mainFilm.nameOriginal}
						imagesrc={imageUrl}
						description={mainFilm.description}
						alt='Постер'
					/>
				</div>
			) : status === 'loading' ? (
				<div className='w-full relative sm:mb-[20px] mb-[10px] rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden'>
					<MainCardLoader />
				</div>
			) : (
				'Ошибка загрузки'
			)}
		</>
	);
};

export default MainCardBlock;
