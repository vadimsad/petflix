import React from 'react';

import AsyncSelectBlock from '../AsyncSelectBlock/AsyncSelectBlock';
import SelectBlock from '../SelectBlock/SelectBlock';

const Filters = ({ filters, setFilters, isLoading }) => {
	const typeOptions = [
		{
			value: 'ALL',
			label: 'Все',
		},
		{
			value: 'FILM',
			label: 'Фильмы',
		},
		{
			value: 'TV_SHOW',
			label: 'Телешоу',
		},
		{
			value: 'TV_SERIES',
			label: 'Сериалы',
		},
		{
			value: 'MINI_SERIES',
			label: 'Короткометражные сериалы',
		},
	];
	const ratingOptions = [
		{
			value: 6,
			label: 'Больше 6',
		},
		{
			value: 7,
			label: 'Больше 7',
		},
		{
			value: 8,
			label: 'Больше 8',
		},
		{
			value: 9,
			label: 'Больше 9',
		},
	];
	const yearOptions = [
		{
			value: 2000,
			label: 'От 2000',
		},
		{
			value: 2010,
			label: 'От 2010',
		},
		{
			value: 2015,
			label: 'От 2015',
		},
		{
			value: 2016,
			label: 'От 2016',
		},
		{
			value: 2017,
			label: 'От 2017',
		},
		{
			value: 2018,
			label: 'От 2018',
		},
		{
			value: 2019,
			label: 'От 2019',
		},
		{
			value: 2020,
			label: 'От 2020',
		},
		{
			value: 2021,
			label: 'От 2021',
		},
		{
			value: 2022,
			label: 'От 2022',
		},
		{
			value: 2023,
			label: 'От 2023',
		},
	];

	return (
		<div className='grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] xl:gap-5 md:gap-3 gap-2'>
			<div>
				<AsyncSelectBlock
					type='genres'
					placeholder='Жанр'
					filters={filters}
					setFilters={setFilters}
					isLoading={isLoading}
				/>
			</div>
			<div>
				<AsyncSelectBlock
					type='countries'
					placeholder='Страна'
					filters={filters}
					setFilters={setFilters}
					isLoading={isLoading}
				/>
			</div>
			<div>
				<SelectBlock
					type='type'
					placeholder='Тип'
					filters={filters}
					setFilters={setFilters}
					options={typeOptions}
					isLoading={isLoading}
				/>
			</div>
			<div>
				<SelectBlock
					type='ratingFrom'
					placeholder='Рейтинг'
					filters={filters}
					setFilters={setFilters}
					options={ratingOptions}
					isLoading={isLoading}
				/>
			</div>
			<div>
				<SelectBlock
					type='yearFrom'
					placeholder='Годы'
					filters={filters}
					setFilters={setFilters}
					options={yearOptions}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};

export default Filters;
