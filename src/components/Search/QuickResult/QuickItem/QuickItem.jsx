import React from 'react';

const QuickItem = ({ name, imageUrl, genres }) => {
	return (
		<div className='flex gap-3 px-2 py-2 bg-transparent hover:bg-notsolight dark:hover:bg-notsodark'>
			<div className='flex-[1]'>
				<img className='w-full h-full object-cover' src={imageUrl} alt={name + 'Постер'} />
			</div>
			<div className='xsm:flex-[4] flex-[5]'>
				<h4 className='xl:text-xl xsm:text-base text-sm font-serif'>{name}</h4>
				<p className='xl:text-sm text-xs'>
					{genres.map((genre, index) =>
						index + 1 === genres.length ? genre.genre : genre.genre + ', ',
					)}
				</p>
			</div>
		</div>
	);
};

export default QuickItem;
