import React from 'react';
import ContentLoader from 'react-content-loader';

const MainCardLoader = (props) => (
	<ContentLoader
		speed={2}
		width={1127}
		height={451}
		viewBox='0 0 1127 451'
		backgroundColor='#112337'
		foregroundColor='#12263b'
		className='w-full h-full'
		{...props}
	>
		<rect x='0' y='0' rx='50' ry='50' width='1127' height='451' />
	</ContentLoader>
);

export default MainCardLoader;
