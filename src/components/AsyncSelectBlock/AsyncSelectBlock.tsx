import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { selectAllFilmsData } from '../../redux/slices/allFilmsSlice';
import { FilterOption, FilterTypes } from '../../redux/types';

import { fetchFilters, selectFiltersByType, setFilter } from '../../redux/slices/filterSlice';
import { SingleValue } from 'react-select';
import { AppDispatch, AppThunkDispatch } from '../../redux/store';

type AsyncSelectBlockPropTypes = {
	type: FilterTypes;
	placeholder: string;
};

const AsyncSelectBlock: React.FC<AsyncSelectBlockPropTypes> = ({ type, placeholder }) => {
	const { status } = useSelector(selectAllFilmsData);
	const { options } = useSelector(selectFiltersByType(type));
	const dispatch: AppThunkDispatch = useDispatch();

	const onFilterChange = (option: SingleValue<FilterOption<string | number>>) => {
		if (option) {
			dispatch(setFilter({ type, option }));
		}
	};

	const loadOptions = (
		searchValue: string,
		resolve: (arg: FilterOption<string | number>[]) => void,
	) => {
		dispatch(fetchFilters({ type, searchValue }));
		resolve(options); // тут было resolve([options])
	};

	return (
		<AsyncSelect
			className='themed-select-container'
			classNamePrefix='themed-select'
			loadOptions={loadOptions}
			defaultOptions
			placeholder={placeholder}
			onChange={onFilterChange}
			noOptionsMessage={() => 'Ничего не найдено :('}
			loadingMessage={() => 'Загрузка...'}
			isDisabled={status !== 'success'}
			isLoading={status !== 'success'}
		/>
	);
};

export default AsyncSelectBlock;
