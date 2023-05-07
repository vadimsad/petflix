import React from 'react';
import { Link } from 'react-router-dom';
import RatingStar from '../Card/RatingStar/RatingStar';

const MainCard = ({ imagesrc, name, description, genres, rating, alt }) => {
	return (
		<>
			<img src={imagesrc} alt={alt} className='w-full h-auto md:absolute left-0 top-0' />
			{/* <div className='absolute z-30 bottom-0 left-0 xl:p-6 p-4 dark:bg-darkTransparent bg-lightTransparent'>
				<h4 className='d-inline-block mb-2 xl:text-3xl md:text-2xl xsm:text-xl text-lg font-serif'>
					{name}
				</h4>
				<p className='mb-2 xl:text-base text-sm'>{description}</p>
				<a
					href='#'
					className='xsm:inline-block hidden lg:text-lg md:text-base sm:text-sm text-xs lg:px-[40px] sm:px-[20px] px-[10px] sm:py-[8px] py-[4px] sm:rounded-[15px] rounded-[8px] border dark:border-light border-dark dark:hover:bg-light dark:hover:text-dark hover:bg-dark hover:text-light active:scale-[0.97] transition-all'
				>
					Кнопка
				</a>
			</div> */}
			<div className='absolute z-20 xl:max-w-[75%] lg:max-w-[60%] max-w-none bottom-0 left-0 xl:p-[20px] md:p-[15px] xsm:p-[12px] p-[8px] xl:m-[40px] lg:m-[30px] m-0 lg:rounded-[20px] xsm:rounded-tr-[30px] rounded-tr-[15px] dark:bg-darkTransparent bg-lightTransparent'>
				<h4 className='xl:text-3xl lg:text-xl sm:text-lg text-sm font-serif'>{name}</h4>
				<div className='lg:block hidden lg:text-sm md:text-xs text-xs'>
					<p className=''>{description}</p>
				</div>
				<div className='lg:hidden block flex items-center gap-2'>
					<div className='inline-flex'>
						<div className='w-[14px] h-[14px] self-center'>
							<RatingStar fill='#FFDC74' />
						</div>
						<i className='not-italic lg:text-sm text-xs'>{rating}</i>
					</div>
					<span className='lg:text-sm text-xs'>
						{genres.map((genre, index) =>
							index + 1 === genres.length ? genre.genre : genre.genre + ', ',
						)}
					</span>
				</div>
				{/* <a
					href='#'
					className='md:hidden inline-block xl:text-lg md:text-base sm:text-sm text-xs xl:px-[40px] md:px-[20px] px-[10px] md:py-[8px] py-[4px] md:rounded-[15px] rounded-[8px] border dark:border-light border-dark dark:hover:bg-light dark:hover:text-dark hover:bg-dark hover:text-light active:scale-[0.97] transition-all'
				>
					Смотреть
				</a> */}
			</div>
			{/* <Link to={`catalog/${id}`} className='absolute inset-0 xsm:z-10 z-20'></Link> */}
		</>
	);
};

export default MainCard;
