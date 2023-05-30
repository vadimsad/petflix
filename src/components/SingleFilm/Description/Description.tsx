import React from 'react';
import { ReactNode } from 'react';

interface DescriptionProps {
	children: ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
	return (
		<>
			<h2 className='font-serif lg:text-3xl text-2xl lg:mb-3 mb-1'>Описание</h2>
			<p className='lg:mb-3 mb-1 lg:text-base text-sm'>{children}</p>
		</>
	);
};

export default Description;
