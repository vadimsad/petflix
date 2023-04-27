import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/Button/Button';
import CardBlock from '../components/CardBlock/CardBlock';
import { setCurrentPage } from '../redux/slices/paginationSlice';
import FiltersBlock from '../components/FiltersBlock/FiltersBlock';

const Catalog = () => {
	const { currentPage, totalPages } = useSelector((state) => state.pagination);
	const dispatch = useDispatch();

	const loadNextPage = () => {
		dispatch(setCurrentPage(currentPage + 1));
	};

	return (
		<>
			<h1 className='sm:p-5 sm:pb-3 pb-3 pt-5 xl:text-4xl sm:text-3xl text-2xl font-serif text-dark dark:text-light transition-colors'>
				Каталог фильмов и сериалов
			</h1>
			<p className='sm:p-5 sm:pt-0 pb-5 sm:text-base text-sm text-notsodark dark:text-lightTransparent transition-colors'>
				Добро пожаловать в наш каталог фильмов - идеальное место для любителей кино! Мы предлагаем
				широкий выбор фильмов разных жанров и форматов, чтобы вы могли наслаждаться просмотром
				любимых кинокартин в любое время и в любом месте. У нас вы найдете фильмы самых разных
				жанров - от драм до боевиков, от ужасов до комедий, а также короткометражные фильмы и
				сериалы.
			</p>
			<FiltersBlock />
			<div className='grid sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(130px,_1fr))] sm:gap-6 gap-4 sm:p-5 sm:pt-0'>
				<CardBlock />
			</div>
			{currentPage < totalPages && <Button onclick={loadNextPage}>Показать еще</Button>}
		</>
	);
};

export default Catalog;
