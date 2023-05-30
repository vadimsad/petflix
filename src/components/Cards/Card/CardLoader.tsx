import React from 'react';
import ContentLoader from 'react-content-loader';
import { DataObject } from '../../../redux/types';

const CardLoader: React.FC<DataObject> = (props) => (
	<ContentLoader
		speed={2}
		width={213}
		height={370}
		viewBox='0 0 213 370'
		backgroundColor='#112337'
		foregroundColor='#12263b'
		className='w-full h-auto'
		{...props}
	>
		<rect x='0' y='0' rx='20' ry='20' width='213' height='327' />
		<rect x='0' y='340' rx='10' ry='10' width='213' height='30' />
	</ContentLoader>
);

export default CardLoader;
