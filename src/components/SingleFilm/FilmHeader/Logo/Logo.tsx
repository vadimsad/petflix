import React from 'react';

interface LogoProps {
	logoUrl: string;
	name: string;
}

const Logo: React.FC<LogoProps> = ({ logoUrl, name }) => {
	if (logoUrl) {
		return (
			<div className='max-w-[35%] mb-3'>
				<img src={logoUrl} alt={`${name} лого`} className='w-full object-cover' />
			</div>
		);
	}

	return (
		<h1 className='xl:text-5xl lg:text-4xl xsm:text-3xl text-2xl font-serif lg:mb-3 mb-2'>
			{name}
		</h1>
	);
};

export default Logo;
