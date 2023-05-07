import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { selectFiltersByType, setFilter } from '../../redux/slices/filterSlice';
import { selectAllFilms } from '../../redux/slices/filmsSlice';

const SelectBlock = ({ type, placeholder }) => {
	const { options, selected } = useSelector(selectFiltersByType(type));
	const { status } = useSelector(selectAllFilms);
	const dispatch = useDispatch();

	const onFilterChange = (option) => {
		dispatch(setFilter({ type, option }));
	};

	return (
		<Select
			className='themed-select-container'
			classNamePrefix='themed-select'
			options={options}
			placeholder={placeholder}
			onChange={onFilterChange}
			noOptionsMessage={() => 'Ничего не найдено :('}
			isDisabled={status !== 'success'}
			isLoading={status !== 'success'}
			value={selected}
		/>
	);
};

export default SelectBlock;
