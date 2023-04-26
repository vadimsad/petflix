import React from 'react';
import { useSelector } from 'react-redux';

const Button = ({ onclick, children }) => {
	const { isLoading } = useSelector((state) => state.films);

	return (
		<button
			onClick={onclick}
			disabled={isLoading}
			type='button'
			className='block mx-auto lg:text-lg md:text-base sm:text-sm text-xs lg:px-[40px] sm:px-[20px] px-[10px] sm:py-[8px] py-[4px] sm:rounded-[15px] rounded-[8px] border dark:border-light border-dark enabled:dark:hover:bg-light enabled:dark:hover:text-dark enabled:hover:bg-dark enabled:hover:text-light enabled:active:scale-[0.97] disabled:opacity-[0.3] disabled:cursor-not-allowed transition-all'
		>
			{children}
		</button>
	);
};

export default Button;
