import React from 'react';
import RatingStar from './RatingStar/RatingStar';

const Card = ({ imagesrc, alt, name, rating, year, genres }) => {
	return (
		<a href='#' className='relative group'>
			<figure className='flex flex-col h-full'>
				<div className='relative pt-[142%] rounded-[20px] overflow-hidden'>
					<img
						src={imagesrc}
						alt={alt}
						className='w-full h-full absolute inset-0'
					/>
					<div className='absolute bg-lightTransparent dark:bg-darkTransparent -translate-x-1/2 w-full lg:h-[30%] h-[40%] left-1/2 -bottom-[30%] opacity-0 lg:p-2 py-1 px-2 group-hover:bottom-0 group-hover:opacity-100 transition-[bottom, opacity] duration-300'>
						<div className='font-serif lg:text-sm text-xs flex justify-between'>
							<div className='flex'>
								<div className='w-[16px] h-[16px] self-center'>
									<RatingStar fill='#FFDC74' />
								</div>
								<i className='not-italic'>{rating}</i>
							</div>
							<span>{year}</span>
						</div>
						<div className='font-serif lg:text-sm text-xs'>
							<span>
								{genres.map((genre, index) =>
									index + 1 === genres.length ? genre.genre : genre.genre + ', '
								)}
							</span>
						</div>
					</div>
				</div>
				<figcaption className='lg:text-base text-xs mt-auto whitespace-nowrap text-ellipsis overflow-hidden'>
					{name}
				</figcaption>
			</figure>
		</a>
	);
};

export default Card;
