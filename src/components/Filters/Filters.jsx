import React from 'react';
import { useSelector } from 'react-redux';

import AsyncSelectBlock from '../AsyncSelectBlock/AsyncSelectBlock';
import SelectBlock from '../SelectBlock/SelectBlock';

const Filters = () => {
	const filters = useSelector((state) => state.filters.types);

	return (
		<div className='grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] xl:gap-5 md:gap-3 gap-2'>
			{Object.keys(filters).map((filterKey) => {
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
