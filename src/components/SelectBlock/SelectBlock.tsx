import React from 'react';
import Select, { SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { selectFiltersByType, setFilter } from '../../redux/slices/filterSlice';
import { selectAllFilmsData } from '../../redux/slices/allFilmsSlice';
import { FilmType, FilterOption, FilterTypes } from '../../redux/types';
import { AppDispatch } from '../../redux/store';

interface SelectBlockProps {
	type: FilterTypes;
	placeholder: string;
}

const SelectBlock: React.FC<SelectBlockProps> = ({ type, placeholder }) => {
	const { options, selected } = useSelector(selectFiltersByType(type));
	const { status } = useSelector(selectAllFilmsData);
	const dispatch: AppDispatch = useDispatch();

	const onFilterChange = (option: SingleValue<FilterOption<string | number>>) => {
		if (option) {
			dispatch(setFilter({ type, option }));
		}
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
