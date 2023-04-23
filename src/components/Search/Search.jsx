import React from 'react';

const Search = () => {
	return (
		<label className='relative block'>
			<div className='absolute w-auto h-[50%] left-[10px] top-1/2 -translate-y-1/2'>
				<svg
					viewBox='0 0 32 32'
					xmlns='http://www.w3.org/2000/svg'
					className='w-full h-full fill-dark dark:fill-light transition-colors'
				>
					<title />
					<g id='search'>
						<path d='M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z' />
					</g>
				</svg>
			</div>{' '}
			<input
				type='search'
				placeholder='Поиск фильмов'
				id='search'
				className='text-ellipsis text-dark dark:text-light rounded-xl xsm:px-4 xsm:pl-8 px-2 pl-7 xsm:py-1 py-0 bg-light dark:bg-dark transition-all border-2 border-dark dark:border-blue focus:outline-none focus:border-dark dark:focus:border-light lg:w-[200px] xl:focus:w-[300px] sm:focus:w-[200px] xsm:w-[200px] w-full xsm:text-left text-center'
			/>
		</label>
	);
};

export default Search;
