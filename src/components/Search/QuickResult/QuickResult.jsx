import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import QuickItem from './QuickItem/QuickItem';
import QuickItemLoader from './QuickItem/QuickItemLoader';

const QuickResult = React.memo(({ shown }) => {
	const { content: quickFilms, isLoading } = useSelector((state) => state.films.quickSearchResults);

	return (
		<ul
			className={`${
				shown ? 'visible opacity-100 mt-2' : 'invisible opacity-0 mt-10'
			} absolute z-20 right-0 md:w-[30vw] xsm:w-[300px] w-full lg:h-[500px] h-[300px] py-2 rounded-xl overflow-auto border-2 border-dark dark:border-blue bg-light dark:bg-dark transition-[opacity_0.3s_ease]`}
		>
			{isLoading ? (
				[...Array(5)].map((item, index) => {
					return (
						<li key={index} className='px-2 py-2'>
							<QuickItemLoader key={index} />
						</li>
					);
				})
			) : quickFilms.length === 0 ? (
				<li className='text-center mt-10'>'Ничего не найдено :('</li>
			) : (
				quickFilms.map((film) => {
					return (
						<li key={film.kinopoiskId}>
							<QuickItem
								key={film.kinopoiskId}
								name={film.nameRu || film.nameEn || film.nameOriginal}
								imageUrl={film.posterUrlPreview}
								genres={film.genres}
							/>
						</li>
					);
				})
			)}
		</ul>
	);
});

export default QuickResult;
