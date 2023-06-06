import React, { ReactNode } from 'react';

interface DescriptionWrapperProps {
	children: ReactNode;
}

const DescriptionWrapper: React.FC<DescriptionWrapperProps> = ({ children }) => {
	return (
		<section className='relative z-10 lg:mb-10 mb-8'>
			<div className='p-5 bg-notsolight dark:bg-notsodark rounded-xl'>{children}</div>
		</section>
	);
};

export default DescriptionWrapper;
