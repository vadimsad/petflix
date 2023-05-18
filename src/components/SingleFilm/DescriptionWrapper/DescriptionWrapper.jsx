import React from 'react';

const DescriptionWrapper = ({ children }) => {
	return (
		<section className='mb-10'>
			<div className='p-5 bg-notsolight dark:bg-notsodark rounded-xl'>{children}</div>
		</section>
	);
};

export default DescriptionWrapper;
