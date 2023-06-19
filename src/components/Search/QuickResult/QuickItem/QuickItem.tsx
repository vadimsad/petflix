import React from 'react';
import { Genre, SearchProperty } from '../../../../redux/types';
import Rating from '../../../Rating/Rating';
import AddToFavorite from '../../../AddToFavorite/AddToFavorite';

interface QuickItemProps {
	id: number;
	name: string;
	imageUrl: string;
	genres?: Genre[];
	sex?: string;
	rating?: number | string;
	invertColors?: boolean;
	itemType: SearchProperty;
}

const QuickItem: React.FC<QuickItemProps> = ({
	id,
	name,
	imageUrl,
	genres,
	sex,
	rating,
	invertColors = false,
	itemType = SearchProperty.films,
}) => {
	return (
		<div
			className={`relative flex gap-3 px-2 py-2 bg-transparent transition-colors group hover:bg-notsolight dark:hover:bg-notsodark`}
		>
			{itemType === SearchProperty.films && (
				<AddToFavorite
					id={id}
					name={name}
					imageUrl={imageUrl}
					rating={rating!}
					genres={genres!}
					classNames='absolute m-1 bottom-0 right-0 scale-[0.7] opacity-0 group-hover:opacity-100 hover:scale-[0.75]'
				/>
			)}
			<div className='flex-[0_0_20%]'>
				<img
					className='w-full h-full object-cover rounded-md'
					src={imageUrl}
					alt={name + 'Постер'}
				/>
			</div>
			<div className='grow'>
				<h4
					className={`xsm:text-base text-sm font-serif border-b mb-2 ${
						invertColors
							? 'border-light dark:border-dark group-hover:border-dark dark:group-hover:border-light group-hover:text-dark dark:group-hover:text-light'
							: 'border-dark dark:border-light'
					}`}
				>
					{name}
				</h4>
				<p
					className={`xl:text-sm text-xs ${
						invertColors ? 'group-hover:text-dark dark:group-hover:text-light' : ''
					}`}
				>
					{itemType === SearchProperty.films ? (
						<>
							<Rating classNames='mr-1'>{rating!}</Rating>{' '}
							{genres
								?.map((genre) => Object.values(genre))
								.flat()
								.join(', ')}
						</>
					) : sex === 'MALE' ? (
						'Мужчина'
					) : (
						'Женщина'
					)}
				</p>
			</div>
		</div>
	);
};

export default QuickItem;
