import React from 'react';

const Search = () => {
	return (
		<div className='relative'>
			<div className='absolute w-auto h-[60%] left-[7px] top-1/2 -translate-y-1/2'>
				<svg
					viewBox='0 0 32 32'
					xmlns='http://www.w3.org/2000/svg'
					className='w-full h-full fill-dark dark:fill-light'
				>
					<title />
					<g id='search'>
						<path d='M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z' />
					</g>
				</svg>
			</div>
			<input
				type='text'
				placeholder='Поиск фильмов'
				className='xl:text-xl text-xl xl:px-4 px-2 xl:pl-9 pl-8 xl:py-2 py-1 bg-light dark:bg-dark transition-all border-2 border-dark dark:border-blue rounded-[4px] focus:outline-none focus:border-dark dark:focus:border-light xl:w-[200px] xl:focus:w-[300px]'
			/>
		</div>
	);
};

export default Search;
