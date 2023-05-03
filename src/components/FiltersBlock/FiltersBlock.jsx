import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Filters from '../Filters/Filters';
import Sort from '../Sort/Sort';
import { resetFilters } from '../../redux/slices/filterSlice';
import { setSearchQuery, setSearchText } from '../../redux/slices/searchSlice';
import { resetSort } from '../../redux/slices/sortSlice';

const FiltersBlock = () => {
	const { activeFiltersCount } = useSelector((state) => state.filters);
	const dispatch = useDispatch();

	const onResetFilters = () => {
		dispatch(resetFilters());
	};

	useEffect(() => {
		return () => {
			dispatch(resetFilters());
			dispatch(setSearchText(''));
			dispatch(setSearchQuery());
			dispatch(resetSort());
		};
	}, []);

	return (
		<div className='sm:mx-5 mx-0 mb-5 p-5 flex flex-col xl:gap-5 gap-4 bg-notsolight dark:bg-notsodark rounded-xl'>
			<Filters />
			<div className='flex justify-between xsm:flex-row flex-col-reverse text-left'>
				<Sort />
				{activeFiltersCount > 0 && (
					<button type='button' onClick={onResetFilters}>
						<span className='text-red-600'>&#x2715; </span>
						<span className='underline decoration-dotted'>Сбросить фильтры</span>
					</button>
				)}
			</div>
		</div>
	);
};

export default FiltersBlock;
