import React from 'react';

const ShortDescription = ({ shortDescription, country }) => {
	return (
		<>
			<p className='text-lg'>{shortDescription || 'Короткое описание отсутствует'}</p>
			<div className='text-lg'>
				<span className='opacity-70'>Страна: </span>
				<span>{country}</span>
			</div>
		</>
	);
};

export default ShortDescription;
