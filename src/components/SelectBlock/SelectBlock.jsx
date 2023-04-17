import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';

import { api } from '../../api/API';
import useCapitalize from '../../hooks/useCapitalize/useCapitalize';

const SelectBlock = ({ type, placeholder, filters, setFilters }) => {
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

	const onChangeHandle = (option) => {
		setFilters({ ...filters, [type]: option.value });
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
				option.label.toLowerCase().includes(searchValue.toLowerCase())
			);
			resolve(filteredOptions);
		});
	};

	return (
		<AsyncSelect
			className='themed-select-container'
			classNamePrefix='themed-select'
			loadOptions={loadOptions}
			defaultOptions
			placeholder={placeholder}
			onChange={onChangeHandle}
		/>
	);
};

export default SelectBlock;
