import React from 'react';

const MainCard = ({ imagesrc, name, description, alt }) => {
	return (
		<>
			<img
				src={imagesrc}
				alt={alt}
				className='w-full h-auto md:absolute left-0 top-0'
			/>
			<div className='absolute z-20 lg:max-w-[50%] md:max-w-[60%] max-w-none bottom-0 left-0 lg:p-[30px] md:p-[20px] xsm:p-[15px] p-[8px] lg:m-[40px] md:m-[30px] xsm:m-[15px] m-[8px] xsm:rounded-[20px] rounded-[10px] dark:bg-darkTransparent bg-lightTransparent'>
				<h4 className='lg:text-3xl md:text-2xl xsm:text-xl text-lg sm:mb-2'>
					{name}
				</h4>
				<div className='lg:text-base md:text-sm text-xs xsm:mb-2'>
					<span>{description}</span>
				</div>
				<a
					href='#'
					className='xsm:inline-block hidden lg:text-lg md:text-base sm:text-sm text-xs lg:px-[40px] sm:px-[20px] px-[10px] sm:py-[8px] py-[4px] sm:rounded-[15px] rounded-[8px] border dark:border-light border-dark dark:hover:bg-light dark:hover:text-dark hover:bg-dark hover:text-light active:scale-[0.97] transition-all'
				>
					Кнопка
				</a>
			</div>
			<a href='#' className='absolute inset-0 xsm:z-10 z-20'></a>
		</>
	);
};

export default MainCard;
