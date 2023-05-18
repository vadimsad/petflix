import React from 'react';

const Description = ({ children }) => {
	return (
		<>
			<h2 className='font-serif text-3xl mb-3'>Описание</h2>
			<p className='mb-3'>{children}</p>
		</>
	);
};

export default Description;
