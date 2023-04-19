import React from 'react';
import Select from 'react-select';
const SelectBlock = ({ type, placeholder, filters, setFilters, options }) => {
	const onChangeHandle = (option) => {
		setFilters({ ...filters, [type]: option.value });
	};
	return (
		<Select
			className='themed-select-container'
			classNamePrefix='themed-select'
			options={options}
			placeholder={placeholder}
			onChange={onChangeHandle}
		/>
	);
};

export default SelectBlock;
