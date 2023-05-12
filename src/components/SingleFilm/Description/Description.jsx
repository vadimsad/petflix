import React from 'react';

const Description = ({ children }) => {
	return (
		<section className='mb-10'>
			<div className='p-5 bg-notsolight dark:bg-notsodark rounded-xl'>
				<h2 className='font-serif text-3xl mb-3'>Описание</h2>
				<p>{children}</p>
			</div>
		</section>
	);
};

export default Description;
