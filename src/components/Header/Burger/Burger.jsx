import React from 'react';

const Burger = ({ onclick }) => {
	return (
		<div className='md:hidden block absolute xsm:p-3 p-2 dark:bg-notsodark bg-notsolight shadow-sm left-[80%] shadow-xl'>
			<button
				type='button'
				title='Показать меню'
				onClick={onclick}
				className='relative block xsm:w-[28px] w-[20px] xsm:h-[23px] h-[15px] before:absolute before:content-[""] before:w-full xsm:before:h-[2px] before:h-[1px] before:bg-dark dark:before:bg-light before:top-0 before:left-0 after:absolute after:content-[""] after:w-full xsm:after:h-[2px] after:h-[1px] after:bg-dark dark:after:bg-light after:bottom-0 after:left-0'
			>
				<span className='absolute w-full xsm:h-[2px] h-[1px] bg-dark dark:bg-light top-1/2 left-0 -translate-y-1/2'></span>
			</button>
		</div>
	);
};

export default Burger;
