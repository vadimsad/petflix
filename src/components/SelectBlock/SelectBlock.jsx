import React, { useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/slices/filterSlice';

const SelectBlock = ({ type, placeholder }) => {
	const { options, selected } = useSelector((state) => state.filters.types[type]);
	const { status } = useSelector((state) => state.allFilms);
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
