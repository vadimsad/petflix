import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteFilms } from '../../../redux/slices/favoriteFilmsSlice';
import QuickItem from '../../Search/QuickResult/QuickItem/QuickItem';
import { Link } from 'react-router-dom';

const FavoriteFilms: React.FC = () => {
	const films = useSelector(selectFavoriteFilms);

	if (films.length === 0) {
		return null;
	}

	return (
		<>
			<h2 className='text-lg'>Избранные фильмы:</h2>
			<ul className='rounded-xl overflow-hidden'>
				{films.map((film, index) => (
					<li key={index}>
						<Link to={`catalog/${film.id}`}>
							<QuickItem
								id={film.id}
								name={film.name}
								imageUrl={film.imageUrl}
								genres={film.genres.slice(0, 3)}
								rating={film.rating}
								invertColors={true}
							/>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default FavoriteFilms;
