import React from 'react';

const Description = ({ children }) => {
	return (
		<section className='mb-5'>
			<div className='p-5 bg-notsolight dark:bg-notsodark rounded-xl'>
				<h2 className='font-serif text-3xl mb-2'>Описание</h2>
				<p>{children}</p>
			</div>
		</section>
	);
};

export default Description;
