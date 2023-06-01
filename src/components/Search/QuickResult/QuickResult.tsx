import React, { Key } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import QuickItem from './QuickItem/QuickItem';
import QuickItemLoader from './QuickItem/QuickItemLoader';
import { selectQuickFilms } from '../../../redux/slices/quickFilmsSlice';
import { Genre } from '../../../redux/types';

interface QuickResultProps {
	shown: boolean;
}

const QuickResult: React.FC<QuickResultProps> = React.memo(({ shown }) => {
	const { content: quickFilms, status } = useSelector(selectQuickFilms);

	return (
		<ul
			className={`${
				shown ? 'visible opacity-100 mt-2' : 'invisible opacity-0 mt-10'
			} absolute z-20 right-0 md:w-[30vw] xsm:w-[300px] w-full lg:max-h-[500px] max-h-[300px] py-2 rounded-xl overflow-auto border-2 border-dark dark:border-blue bg-light dark:bg-dark transition-[opacity_0.3s_ease]`}
		>
			{status === 'success' && quickFilms.length !== 0 ? (
				quickFilms.map((film) => {
					return (
						<li key={film.kinopoiskId as Key}>
							<Link to={`catalog/${film.kinopoiskId}`}>
								<QuickItem
									id={film.kinopoiskId as number}
									name={(film.nameRu || film.nameEn || film.nameOriginal) as string}
									imageUrl={film.posterUrlPreview as string}
									genres={(film.genres as Genre[]).slice(0, 3)}
									rating={film.ratingKinopoisk as number}
								/>
							</Link>
						</li>
					);
				})
			) : status === 'loading' ? (
				[...Array(5)].map((item, index) => {
					return (
						<li key={index} className='px-2 py-2'>
							<QuickItemLoader key={index} />
						</li>
					);
				})
			) : (
				<li className='text-center my-10'>Ничего не найдено :(</li>
			)}
		</ul>
	);
});

export default QuickResult;
