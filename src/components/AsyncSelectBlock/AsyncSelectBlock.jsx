import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncSelect from 'react-select/async';

import { api } from '../../api/API';
import useCapitalize from '../../hooks/useCapitalize/useCapitalize';
import { setFilter, setFilterOptions } from '../../redux/slices/filterSlice';

const AsyncSelectBlock = ({ type, placeholder }) => {
	const { isLoading } = useSelector((state) => state.films.all);
	const { options } = useSelector((state) => state.filters.types[type]);
	const dispatch = useDispatch();

	let optionItem = null;
	if (type) {
		switch (type) {
			case 'genres': {
				optionItem = 'genre';
				break;
			}
			case 'countries': {
				optionItem = 'country';
				break;
			}
		}
	}

	const onFilterChange = (option) => {
		dispatch(setFilter({ type, option }));
	};

	const loadOptions = (searchValue, resolve) => {
		api.getFilters().then((filters) => {
			const selectOptions = filters[type].map((option) => {
				const optionName = option[optionItem];
				const optionNameCapitalized = useCapitalize(optionName);
				return {
					value: option.id,
					label: optionNameCapitalized,
				};
			});
			const filteredOptions = selectOptions.filter((option) =>
				option.label.toLowerCase().includes(searchValue.toLowerCase()),
			);

			dispatch(setFilterOptions({ type, options: filteredOptions }));
			resolve([options]);
		});
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
			isDisabled={isLoading}
			isLoading={isLoading}
		/>
	);
};

export default AsyncSelectBlock;
