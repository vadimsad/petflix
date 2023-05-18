import React from 'react';

const Logo = ({ logoUrl, name }) => {
	if (logoUrl) {
		return (
			<div className='w-[300px] mb-3'>
				<img src={logoUrl} alt={`${name} лого`} className='w-full h-full object-cover' />
			</div>
		);
	}

	return (
		<h1 className='xl:text-6xl lg:text-4xl xsm:text-3xl text-2xl font-serif lg:mb-3 mb-2'>
			{name}
		</h1>
	);
};

export default Logo;
