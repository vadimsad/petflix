import React from 'react';
import { useSelector } from 'react-redux';
import { FilterState, selectFilters } from '../../redux/slices/filterSlice';

import AsyncSelectBlock from '../AsyncSelectBlock/AsyncSelectBlock';
import SelectBlock from '../SelectBlock/SelectBlock';
import { FilterTypes } from '../../redux/types';

const Filters: React.FC = () => {
	const { types: filters } = useSelector(selectFilters);

	const filtersKeys = Object.keys(filters) as FilterTypes[];
	return (
		<div className='grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] xl:gap-5 md:gap-3 gap-2'>
			{filtersKeys.map((filterKey) => {
				const currentFilter = filters[filterKey];
				const hasOptions = currentFilter.options.length !== 0;

				if (hasOptions) {
					return (
						<div key={filterKey}>
							<SelectBlock
								key={filterKey}
								type={filterKey}
								placeholder={currentFilter.placeholder}
							/>
						</div>
					);
				} else {
					return (
						<div key={filterKey}>
							<AsyncSelectBlock
								key={filterKey}
								type={filterKey}
								placeholder={currentFilter.placeholder}
							/>
						</div>
					);
				}
			})}
		</div>
	);
};

export default Filters;
