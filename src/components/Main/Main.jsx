import React from 'react';

const Main = ({ children }) => {
	return (
		<main className='flex-1'>
			<div className='xl:container px-4 text-dark dark:text-light'>{children}</div>
		</main>
	);
};

export default Main;
