import React from 'react';

const MainCard = ({ imagesrc, name, description, alt }) => {
	return (
		<>
			<img
				src={imagesrc}
				alt={alt}
				className='w-full h-auto absolute left-0 top-0'
			/>
			<div className='absolute z-10 max-w-[50%] bottom-0 left-0 lg:p-[30px] p-[20px] lg:m-[40px] m-[30px] rounded-[20px] dark:bg-darkTransparent bg-lightTransparent'>
				<h4 className='lg:text-3xl text-2xl mb-2'>{name}</h4>
				<div className='lg:text-base text-sm mb-2'>
					<span>{description}</span>
				</div>
				<a
					href='#'
					className='inline-block lg:text-lg text-base lg:px-[40px] px-[20px] py-[8px] rounded-[15px] border dark:border-light border-dark dark:hover:bg-light dark:hover:text-dark hover:bg-dark hover:text-light active:scale-[0.97] transition-all'
				>
					Кнопка
				</a>
			</div>
			<a href='#' className='absolute inset-0 z-10'></a>
		</>
	);
};

export default MainCard;
