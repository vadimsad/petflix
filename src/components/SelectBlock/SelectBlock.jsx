import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/slices/filterSlice';

const SelectBlock = ({ type, placeholder }) => {
	const options = useSelector((state) => state.filters[type].options);
	const { isLoading } = useSelector((state) => state.films.all);
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
			isDisabled={isLoading}
			isLoading={isLoading}
		/>
	);
};

export default SelectBlock;
