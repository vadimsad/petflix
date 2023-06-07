import React, { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import QuickResult from './QuickResult/QuickResult';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText, setSearchQuery, selectSearch } from '../../redux/slices/searchSlice';
import useDebounce from '../../hooks/useDebounce/useDebounce';
import { fetchQuickFilms } from '../../redux/slices/quickFilmsSlice';
import { AppThunkDispatch } from '../../redux/store';
import { SearchProperty } from '../../redux/types';
import { fetchQuickPersons } from '../../redux/slices/quickPersonsSlice';

const Search = () => {
	const [isInputFocused, setIsInputFocused] = useState(true);
	const [searchProperty, setSearchProperty] = useState(SearchProperty.films);
	const { searchText } = useSelector(selectSearch);
	const dispatch: AppThunkDispatch = useDispatch();

	const navigate = useNavigate();

	const inputRef = useRef<HTMLInputElement>(null);

	const changeSearchQuery = (event: FormEvent) => {
		event.preventDefault();

		navigate('/catalog');
		dispatch(setSearchQuery());
		inputRef.current?.blur();
	};

	const quickSearch = useDebounce((searchTextCurrent) => {
		if (searchProperty === SearchProperty.films) {
			const config = {
				params: {
					keyword: searchTextCurrent,
				},
			};
			dispatch(fetchQuickFilms(config));
		} else {
			const config = {
				params: {
					name: searchTextCurrent,
				},
			};
			dispatch(fetchQuickPersons(config));
		}
	}, 350);

	const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
		const searchTextCurrent = event.target.value;
		dispatch(setSearchText(searchTextCurrent));
		quickSearch(searchTextCurrent);
	};

	const toggleSearchPropertyAndSearch = () => {
		if (searchProperty === SearchProperty.films) {
			const config = {
				params: {
					name: searchText,
				},
			};
			setSearchProperty(SearchProperty.persons);

			if (!searchText) return;
			dispatch(fetchQuickPersons(config));
		} else {
			const config = {
				params: {
					keyword: searchText,
				},
			};
			setSearchProperty(SearchProperty.films);

			if (!searchText) return;
			dispatch(fetchQuickFilms(config));
		}
	};

	return (
		<div
			className={`${
				isInputFocused ? 'max-xsm:-top-[160px]' : 'max-xsm:top-0'
			} relative transition-[top]`}
		>
			<form
				onSubmit={changeSearchQuery}
				onFocus={() => setIsInputFocused(true)}
				onBlur={() => setIsInputFocused(false)}
			>
				<label className='relative flex border-2 rounded-xl border-dark dark:border-blue bg-light dark:bg-dark dark:hover:border-light hover:border-blue focus-within:border-blue dark:focus-within:border-light overflow-hidden transition-colors'>
					<div className='relative w-[20px] h-auto left-[10px]'>
						<svg
							viewBox='0 0 32 32'
							xmlns='http://www.w3.org/2000/svg'
							className='w-full h-full fill-dark dark:fill-light transition-colors'
						>
							<title />
							<g id='search'>
								<path d='M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z' />
							</g>
						</svg>
					</div>
					<input
						ref={inputRef}
						type='search'
						placeholder={`Поиск ${searchProperty === SearchProperty.films ? 'фильмов' : 'людей'}`}
						id='search'
						value={searchText}
						onChange={changeSearchText}
						className={`text-ellipsis text-dark dark:text-light xsm:px-4 pl-5 px-2 xsm:py-1 py-0 bg-light dark:bg-dark transition-all outline-none xsm:text-left text-center ${
							isInputFocused ? 'xl:w-[300px] sm:w-[200px]' : 'w-full lg:w-[200px] xsm:w-[200px]'
						}`}
					/>
					<div className='flex items-center gap-1 pr-2'>
						<button
							type='button'
							onClick={toggleSearchPropertyAndSearch}
							className={`text-sm transition-[opacity] px-1 border border-dark dark:border-light rounded-md ${
								searchProperty === SearchProperty.films
									? 'opacity-100'
									: 'opacity-50 hover:opacity-75'
							}`}
						>
							Фильмы
						</button>
						<button
							type='button'
							onClick={toggleSearchPropertyAndSearch}
							className={`text-sm transition-[opacity] px-1 border border-dark dark:border-light rounded-md ${
								searchProperty === SearchProperty.persons
									? 'opacity-100'
									: 'opacity-50 hover:opacity-75'
							}`}
						>
							Люди
						</button>
					</div>
				</label>
			</form>
			<QuickResult shown={!!searchText && isInputFocused} type={searchProperty} />
		</div>
	);
};

export default Search;
