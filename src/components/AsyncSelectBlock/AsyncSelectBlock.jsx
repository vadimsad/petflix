import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { selectAllFilms } from '../../redux/slices/filmsSlice';

import { fetchFilters, selectFiltersByType, setFilter } from '../../redux/slices/filterSlice';

const AsyncSelectBlock = ({ type, placeholder }) => {
	const { status } = useSelector(selectAllFilms);
	const { options } = useSelector(selectFiltersByType(type));
	const dispatch = useDispatch();

	const onFilterChange = (option) => {
		dispatch(setFilter({ type, option }));
	};

	const loadOptions = (searchValue, resolve) => {
		dispatch(fetchFilters({ type, searchValue }));
		resolve([options]);
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
