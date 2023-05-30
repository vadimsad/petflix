import React from 'react';
import Rating from '../../../Rating/Rating';
import { Genre } from '../../../../redux/types';

interface InfoProps {
	rating: number;
	year: number;
	length: number;
	genres: Genre[];
}

const Info: React.FC<InfoProps> = ({ rating, year, length, genres }) => {
	return (
		<>
			<Rating>{rating}</Rating>
			<span className='opacity-70'>{year}</span>
			{length && <span className='opacity-70'>{length + ' мин'}</span>}
			<span className='opacity-70'>
				{genres.map((genre, index) =>
					index !== genres.length - 1 ? genre.genre + ', ' : genre.genre,
				)}
			</span>
		</>
	);
};

export default Info;
