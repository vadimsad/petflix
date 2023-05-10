import React from 'react';

const Logo = ({ logoUrl, name }) => {
	if (logoUrl) {
		return (
			<div className='w-[300px] mb-3'>
				<img src={logoUrl} alt={`${name} лого`} className='w-full h-full object-cover' />
			</div>
		);
	}

	return <h1 className='text-6xl font-serif mb-3'>{name}</h1>;
};

export default Logo;
