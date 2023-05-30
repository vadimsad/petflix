import React from 'react';
import Rating from '../../Rating/Rating';
import { Genre } from '../../../redux/types';

type MainCardProps = {
	imagesrc: string;
	alt: string;
	name: string;
	description: string;
	rating?: string | number;
	genres?: Genre[];
};

const MainCard: React.FC<MainCardProps> = ({
	imagesrc,
	name,
	description,
	genres,
	rating,
	alt,
}) => {
	return (
		<>
			<img src={imagesrc} alt={alt} className='w-full h-auto md:absolute left-0 top-0' />
			<div className='absolute z-20 xl:max-w-[75%] lg:max-w-[60%] max-w-none bottom-0 left-0 xl:p-[20px] md:p-[15px] xsm:p-[12px] p-[8px] xl:m-[40px] lg:m-[30px] m-0 lg:rounded-[20px] xsm:rounded-tr-[30px] rounded-tr-[15px] dark:bg-darkTransparent bg-lightTransparent'>
				<h4 className='xl:text-3xl lg:text-xl sm:text-lg text-sm font-serif'>{name}</h4>
				<div className='lg:block hidden lg:text-sm md:text-xs text-xs'>
					<p className=''>{description}</p>
				</div>
				<div className='lg:hidden block flex items-center gap-2'>
					<Rating>{rating!}</Rating>
					<span className='lg:text-sm text-xs'>
						{genres?.map((genre, index) =>
							index + 1 === genres.length ? genre.genre : genre.genre + ', ',
						)}
					</span>
				</div>
			</div>
		</>
	);
};

export default MainCard;
