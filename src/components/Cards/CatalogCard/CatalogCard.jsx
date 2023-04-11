import React from 'react';

const CatalogCard = ({ imgSrc, alt }) => {
	return (
		<div className='relative pt-[56.25%]'>
			<img src={imgSrc} alt={alt} />
		</div>
	);
};

export default CatalogCard;
