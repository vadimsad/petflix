import React from 'react';
import Button from '../../Button/Button';
import Info from './Info/Info';
import Logo from './Logo/Logo';
import ShortDescription from './ShortDescription/ShortDescription';

const FilmHeader = ({
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
	return (
		<div className='relative px-5 py-10 mt-5 min-h-[400px] flex'>
			<div className='relative z-20 inline-block w-1/2 flex flex-col'>
				<Logo logoUrl={logoUrl} name={name} />
				<div className='flex gap-2 mb-2'>
					<Info rating={rating} year={year} length={length} genres={genres} />
				</div>
				<div className='flex-1 mb-2'>
					<ShortDescription shortDescription={shortDescription} country={countries[0].country} />
				</div>
				<div className='flex gap-2'>
					<Button>Смотреть</Button>
					<Button>Сохранить</Button>
				</div>
			</div>
			<div className='absolute z-10 inset-0 bottom-auto h-full after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black after:to-transparent lg:rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden'>
				<img src={imageUrl} alt={`Фильм ${name}`} className='w-full h-full object-cover' />
			</div>
		</div>
	);
};

export default FilmHeader;
