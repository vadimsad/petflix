import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteFilms } from '../../../redux/slices/favoriteFilmsSlice';
import QuickItem from '../../Search/QuickResult/QuickItem/QuickItem';
import { Link } from 'react-router-dom';
import { SearchProperty } from '../../../redux/types';

const FavoriteFilms: React.FC = () => {
	const films = useSelector(selectFavoriteFilms);

	return (
		<div className='dark:bg-notsolight bg-notsodark p-2 rounded-xl'>
			<h2 className='text-lg'>Избранные фильмы:</h2>
			<ul className='rounded-xl overflow-hidden'>
				{films.length === 0 ? (
					<div className='text-center py-5'>Пусто :(</div>
				) : (
					films.map((film, index) => (
						<li key={index}>
							<Link to={`catalog/${film.id}`}>
								<QuickItem
									id={film.id}
									name={film.name}
									imageUrl={film.imageUrl}
									genres={film.genres.slice(0, 3)}
									rating={film.rating}
									invertColors={true}
									itemType={SearchProperty.films}
								/>
							</Link>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default React.memo(FavoriteFilms);
