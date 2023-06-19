import React, { Key } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import QuickItem from './QuickItem/QuickItem';
import QuickItemLoader from './QuickItem/QuickItemLoader';
import { selectQuickFilms } from '../../../redux/slices/quickFilmsSlice';
import { Genre, SearchProperty } from '../../../redux/types';
import { selectQuickPersons } from '../../../redux/slices/quickPersonsSlice';

interface QuickResultProps {
	shown: boolean;
	type: SearchProperty;
}

const QuickResult: React.FC<QuickResultProps> = ({ shown, type }) => {
	const { content: quickItems, status } = useSelector(
		type === SearchProperty.films ? selectQuickFilms : selectQuickPersons,
	);

	return (
		<ul
			className={`${
				shown ? 'visible opacity-100 sm:mt-5 mt-3' : 'invisible opacity-0 mt-10'
			} absolute z-20 right-0 md:w-[30vw] sm:w-[300px] w-full lg:max-h-[500px] max-h-[300px] py-2 rounded-xl overflow-auto border-2 border-dark dark:border-blue bg-light dark:bg-dark transition-[opacity_0.3s_ease]`}
		>
			{status === 'success' && quickItems.length !== 0 ? (
				quickItems.map((item) => {
					return (
						<li key={item.kinopoiskId as Key}>
							<Link
								to={`${type === SearchProperty.films ? 'catalog/' : 'person/'}${item.kinopoiskId}`}
							>
								<QuickItem
									id={item.kinopoiskId as number}
									name={(item.nameRu || item.nameEn || item.nameOriginal) as string}
									imageUrl={(item.posterUrlPreview || item.posterUrl) as string}
									genres={(item.genres as Genre[]) || []}
									sex={item.sex as string}
									rating={(item.ratingKinopoisk as number) || 0}
									itemType={type}
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
};

export default QuickResult;
