import React from 'react';

const Button = ({ onclick, children }) => {
	return (
		<button
			onClick={onclick}
			type='button'
			className='block mx-auto lg:text-lg md:text-base sm:text-sm text-xs lg:px-[40px] sm:px-[20px] px-[10px] sm:py-[8px] py-[4px] sm:rounded-[15px] rounded-[8px] border dark:border-light border-dark dark:hover:bg-light dark:hover:text-dark hover:bg-dark hover:text-light active:scale-[0.97] transition-all'
		>
			{children}
		</button>
	);
};

export default Button;
