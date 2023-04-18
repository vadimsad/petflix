import React from 'react';

import SelectBlock from '../SelectBlock/SelectBlock';

const Filters = ({ filters, setFilters }) => {
	return (
		<div className='flex gap-5 sm:p-5 sm:mb-0 mb-4'>
			<div className='flex-1'>
				<SelectBlock
					type='genres'
					placeholder='Жанр'
					filters={filters}
					setFilters={setFilters}
				/>
			</div>
			<div className='flex-1'>
				<SelectBlock
					type='countries'
					placeholder='Страна'
					filters={filters}
					setFilters={setFilters}
				/>
			</div>
		</div>
	);
};

export default Filters;
