import React from 'react';
import Button from '../../Button/Button';
import Info from './Info/Info';
import Logo from './Logo/Logo';
import ShortDescription from './ShortDescription/ShortDescription';
import { Country, Genre } from '../../../redux/types';
import AddToFavorite from '../../AddToFavorite/AddToFavorite';

interface FilmHeaderProps {
	id: number;
	logoUrl: string;
	name: string;
	rating: number;
	year: number;
	length: number;
	genres: Genre[];
	shortDescription: string;
	countries: Country[];
	imageUrl: string;
	posterUrl: string;
}

const FilmHeader: React.FC<FilmHeaderProps> = ({
	id,
	logoUrl,
	name,
	rating,
	year,
	length,
	genres,
	shortDescription,
	countries,
	imageUrl,
	posterUrl,
}) => {
	const country = countries[0]?.country || '';

	return (
		<section className='relative px-5 md:py-10 py-8 mt-5 xl:h-[400px] lg:h-[350px] h-auto flex lg:mb-10 mb-8 text-light'>
			<div className='relative z-20 inline-block lg:w-1/2 w-3/4 flex flex-col'>
				<Logo logoUrl={logoUrl} name={name} />
				<div className='flex flex-wrap gap-2 lg:mb-2 mb-1 lg:text-base xsm:text-sm text-xs'>
					<Info rating={rating} year={year} length={length} genres={genres} />
				</div>
				<div className='flex-1 mb-2'>
					<ShortDescription shortDescription={shortDescription} country={country} />
				</div>
				<div className='flex gap-2'>
					<Button>Смотреть</Button>
					<AddToFavorite
						id={id}
						name={name}
						rating={rating}
						genres={genres}
						imageUrl={posterUrl}
						childClass='rounded-[8px] bg-transparent border border-dark border-light hover:bg-light active:scale-[0.97]'
					/>
				</div>
			</div>
			<div className='absolute z-10 inset-0 bottom-auto h-full after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black after:to-transparent lg:rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden'>
				<img src={imageUrl} alt={`Фильм ${name}`} className='w-full h-full object-cover' />
			</div>
			<div className='absolute z-0 top-0 left-0 shadow-none dark:shadow-[0_0_500px_200px_rgba(18,38,59,1)] w-[100px] rounded-full'></div>
		</section>
	);
};

export default FilmHeader;
