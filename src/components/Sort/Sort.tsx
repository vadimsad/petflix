import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectSort, setSort } from '../../redux/slices/sortSlice';
import useClickOutside from '../../hooks/useClickOutside/useClickOutside';
import { AppDispatch } from '../../redux/store';
import { FilmOrder, FilterOption } from '../../redux/types';

const Sort = React.memo(() => {
	const sort = useSelector(selectSort);
	const dispatch: AppDispatch = useDispatch();

	const [isShown, setIsShown] = useState(false);

	const showMenu = () => {
		setIsShown((prevState) => !prevState);
	};

	const selectValue = (value: FilterOption<FilmOrder>) => {
		dispatch(setSort(value));
		setIsShown(false);
	};

	const sortRef = useRef(null);
	useClickOutside(sortRef, () => setIsShown(false));

	return (
		<div className='relative'>
			<span>Сортировать по: </span>
			<button type='button' className='d-inline underline decoration-dotted' onClick={showMenu}>
				{sort.selected.label}
			</button>
			<ul
				ref={sortRef}
				className={`${
					isShown ? '' : 'hidden'
				} absolute z-30 top-[25px] left-[100px] py-1 rounded bg-dark dark:bg-light text-light dark:text-dark`}
			>
				{sort.options.map((option) => (
					<li key={option.value}>
						<button
							type='button'
							className={`${
								option.value === sort.selected.value
									? 'dark:bg-notsodark dark:text-light bg-notsolight text-dark'
									: 'dark:hover:bg-notsolight hover:bg-notsodark'
							} w-full py-1 px-5 transition-colors`}
							onClick={() => selectValue(option)}
						>
							{option.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
});

export default Sort;
