import React from 'react';

const ShortDescription = ({ shortDescription, country }) => {
	return (
		<>
			<p className='lg:text-lg xsm:text-base text-sm lg:mb-2 mb-1'>
				{shortDescription || 'Короткое описание отсутствует'}
			</p>
			<div className='lg:text-lg xsm:text-base text-sm'>
				<span className='opacity-70'>Страна: </span>
				<span>{country}</span>
			</div>
		</>
	);
};

export default ShortDescription;
