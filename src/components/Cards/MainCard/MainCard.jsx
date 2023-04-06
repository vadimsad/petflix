import React from 'react';

const MainCard = ({ imagesrc, name, description, alt }) => {
	return (
		<>
			<img
				src={imagesrc}
				alt={alt}
				className='w-full h-auto absolute left-0 top-0'
			/>
			<div className='absolute z-40 max-w-[50%] bottom-0 left-0 p-[30px] m-[40px] rounded-[20px] dark:bg-darkTransparent bg-lightTransparent'>
				<h4 className='text-3xl mb-2'>{name}</h4>
				<div className='text-base mb-2'>
					<span>{description}</span>
				</div>
				<a
					href='#'
					className='inline-block text-lg px-[40px] py-[8px] rounded-[15px] border dark:border-light border-dark dark:hover:bg-light dark:hover:text-dark hover:bg-dark hover:text-light active:scale-[0.97] transition-all'
				>
					Кнопка
				</a>
			</div>
			<a href='#' className='absolute inset-0 z-30'></a>
		</>
	);
};

export default MainCard;
