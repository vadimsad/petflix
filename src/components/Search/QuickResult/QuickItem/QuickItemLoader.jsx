import React from 'react';
import ContentLoader from 'react-content-loader';

const QuickItemLoader = (props) => (
	<ContentLoader
		speed={2}
		width={430}
		height={120}
		viewBox='0 0 430 120'
		backgroundColor='#112337'
		foregroundColor='#12263b'
		className='w-full h-auto'
		{...props}
	>
		<rect x='0' y='0' rx='8' ry='8' width='83' height='120' />
		<rect x='95' y='0' rx='6' ry='6' width='335' height='22' />
		<rect x='95' y='31' rx='5' ry='5' width='215' height='16' />
	</ContentLoader>
);

export default QuickItemLoader;
