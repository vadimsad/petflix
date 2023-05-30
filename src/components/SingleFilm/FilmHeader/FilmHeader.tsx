import React from 'react';
import Button from '../../Button/Button';
import Info from './Info/Info';
import Logo from './Logo/Logo';
import ShortDescription from './ShortDescription/ShortDescription';
import { Country, Genre } from '../../../redux/types';

interface FilmHeaderProps {
	logoUrl: string;
	name: string;
	rating: number;
	year: number;
	length: number;
	genres: Genre[];
	shortDescription: string;
	countries: Country[];
	imageUrl: string;
}

const FilmHeader: React.FC<FilmHeaderProps> = ({
	logoUrl,
	name,
	rating,
	year,
	length,
	genres,
	shortDescription,
	countries,
	imageUrl,
}) => {
	const country = countries[0]?.country || '';

	return (
		<section className='relative px-5 md:py-10 py-8 mt-5 xl:h-[400px] lg:h-[350px] h-auto flex lg:mb-10 mb-8 text-light'>
			<div className='relative z-20 inline-block lg:w-1/2 w-3/4 flex flex-col'>
				<Logo logoUrl={logoUrl} name={name} />
				<div className='flex flex-wrap gap-2 lg:mb-2 mb-1 lg:text-base xsm:text-sm text-xs'>
					<Info rating={rating} year={year} length={length} genres={genres} />
				</div>
				<div className='flex-1 lg:mb-2 mb-1'>
					<ShortDescription shortDescription={shortDescription} country={country} />
				</div>
				<div className='flex gap-2'>
					<Button>Смотреть</Button>
					<Button>Сохранить</Button>
				</div>
			</div>
			<div className='absolute z-10 inset-0 bottom-auto h-full after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black after:to-transparent lg:rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden'>
				<img src={imageUrl} alt={`Фильм ${name}`} className='w-full h-full object-cover' />
			</div>
		</section>
	);
};

export default FilmHeader;
