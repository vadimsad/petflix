import React, { MouseEvent, useState } from 'react';
import { Genre } from '../../redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
	addFavorite,
	removeFavorite,
	selectFavoriteById,
} from '../../redux/slices/favoriteFilmsSlice';

type AddToFavProps = {
	id: number;
	name: string;
	rating: string | number;
	genres: Genre[];
	imageUrl: string;
	classNames?: string;
};

const AddToFavorite: React.FC<AddToFavProps> = ({
	id,
	name,
	rating,
	genres,
	imageUrl,
	classNames,
}) => {
	const thisFilm = useSelector(selectFavoriteById(id));
	const dispatch: AppDispatch = useDispatch();

	const isFilmInFavorite = !!thisFilm;

	const handleCLick = (event: MouseEvent) => {
		event.preventDefault();
		if (isFilmInFavorite) {
			dispatch(removeFavorite(id));
		} else {
			dispatch(addFavorite({ id, name, rating, genres, imageUrl }));
		}
	};

	return (
		<button type='button' className={`${classNames} transition-all`} onClick={handleCLick}>
			<span className='p-2 inline-block text-2xl bg-darkTransparent rounded-xl'>
				{isFilmInFavorite ? '❤️' : '🖤'}
			</span>
		</button>
	);
};

export default AddToFavorite;
