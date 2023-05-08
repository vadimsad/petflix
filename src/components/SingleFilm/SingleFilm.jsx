import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilm, selectFilm } from '../../redux/slices/singleFilmSlice';
import Rating from '../Rating/Rating';

const SingleFilm = () => {
	const { id } = useParams();
	const { status, content: film } = useSelector(selectFilm);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilm(id));
	}, []);

	if (status !== 'success') {
		return <div>Loading...</div>;
	}

	return (
		<div className='relative px-5 py-10 mt-5 min-h-[400px]'>
			<div className='relative z-20 inline-block w-1/2'>
				{film.logoUrl ? (
					<div className='w-[300px] mb-3'>
						<img
							src={film.logoUrl}
							alt={`${film.nameRu} лого`}
							className='w-full h-full object-cover'
						/>
					</div>
				) : (
					<h1 className='text-6xl font-serif mb-3'>
						{film.nameRu || film.nameEn || film.nameOriginal}
					</h1>
				)}
				<div className='flex gap-2 mb-2'>
					<Rating>{film.ratingKinopoisk}</Rating>
					<span className='opacity-80'>{film.year}</span>
					<span className='opacity-80'>{film.filmLength + ' мин'}</span>
					<span className='opacity-80'>
						{film.genres.map((genre, index) =>
							index !== film.genres.length - 1 ? genre.genre + ', ' : genre.genre,
						)}
					</span>
				</div>
				<p className='text-lg'>{film.shortDescription || film.description}</p>
			</div>
			<div className='absolute z-10 inset-0 bottom-auto h-full after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black after:to-transparent lg:rounded-[50px] xsm:rounded-[30px] rounded-[15px] overflow-hidden'>
				<img
					src={film.imageUrl}
					alt={`Фильм ${film.nameRu || film.nameEn || film.nameOriginal}`}
					className='w-full h-full object-cover'
				/>
			</div>
		</div>
	);
};

export default SingleFilm;
