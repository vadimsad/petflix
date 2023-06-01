import React from 'react';
import Rating from '../../Rating/Rating';
import { Genre } from '../../../redux/types';
import AddToFavorite from '../../AddToFavorite/AddToFavorite';
import FavoriteFilms from '../../Sidebar/FavoriteFilms/FavoriteFilms';

type CardProps = {
	id: number;
	imagesrc: string;
	alt: string;
	name: string;
	rating: string | number;
	year?: number;
	genres: Genre[];
};

const Card: React.FC<CardProps> = ({ id, imagesrc, alt, name, rating, year, genres }) => {
	const hasOtherInfo = !!rating && !!year && !!genres;

	return (
		<div className='relative group'>
			<figure className='flex flex-col h-full'>
				<div className='relative pt-[142%] mb-1 sm:rounded-[20px] rounded-[10px] overflow-hidden'>
					<img
						loading='lazy'
						src={imagesrc}
						alt={alt}
						className='w-full h-full absolute inset-0 group-hover:scale-[1.03] transition-transform duration-200'
					/>
					<AddToFavorite
						id={id}
						imageUrl={imagesrc}
						name={name}
						rating={rating}
						genres={genres}
						classNames={
							'absolute m-2 top-0 left-0 opacity-0 group-hover:opacity-100 hover:scale-[1.05]'
						}
					/>
					{hasOtherInfo && (
						<div className='absolute bg-lightTransparent dark:bg-darkTransparent -translate-x-1/2 w-full left-1/2 -bottom-[30%] opacity-0 lg:p-2 lg:pb-4 py-1 pb-3 px-2 group-hover:bottom-0 group-hover:opacity-100 transition-[bottom, opacity] duration-300'>
							<div className='font-serif lg:text-base text-sm flex justify-between border-b dark:border-light border-dark pb-1'>
								<Rating>{rating}</Rating>
								<span>{year}</span>
							</div>
							{genres && (
								<div className='lg:text-sm text-xs'>
									<span>
										{genres.map((genre, index) =>
											index + 1 === genres.length ? genre.genre : genre.genre + ', ',
										)}
									</span>
								</div>
							)}
						</div>
					)}
				</div>
				<figcaption className='lg:text-base text-xs mt-auto whitespace-nowrap text-ellipsis overflow-hidden'>
					{name}
				</figcaption>
			</figure>
		</div>
	);
};

export default Card;
