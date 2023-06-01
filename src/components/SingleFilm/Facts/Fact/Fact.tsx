import React, { ReactNode } from 'react';

type FactProps = {
	children: ReactNode;
};

const Fact: React.FC<FactProps> = ({ children }) => {
	return (
		<div className='bg-lightTransparent dark:bg-darkTransparent rounded-lg xl:px-3 xl:py-4 px-2 py-2'>
			{children}
		</div>
	);
};

export default Fact;
