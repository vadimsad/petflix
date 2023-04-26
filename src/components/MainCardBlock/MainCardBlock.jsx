import React from 'react';
import { useSelector } from 'react-redux';

import MainCard from '../Cards/MainCard/MainCard';
import MainCardLoader from '../Cards/MainCard/MainCardLoader';

const MainCardBlock = () => {
	const mainFilm = useSelector((state) => state.films.mainFilm);

	return (
		<>
			{mainFilm.isLoading ? (
				<div className='w-full relative sm:mb-[20px] mb-[10px] rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden'>
					<MainCardLoader />
				</div>
			) : (
				<div className='lg:h-[400px] md:h-[300px] h-auto w-full relative sm:mb-[20px] mb-[10px] lg:rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden md:pb-[40%] pb-0'>
					<MainCard
						name={
							mainFilm.content.nameRu ||
							mainFilm.content.nameEn ||
							mainFilm.content.nameOriginal
						}
						imagesrc={mainFilm.image}
						description={mainFilm.content.description}
						alt='Постер'
					/>
				</div>
			)}
		</>
	);
};

export default MainCardBlock;
