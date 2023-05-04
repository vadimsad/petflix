import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import QuickResult from './QuickResult/QuickResult';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText, setSearchQuery } from '../../redux/slices/searchSlice';
import useDebounce from '../../hooks/useDebounce/useDebounce';
import { api } from '../../api/API';
import { setFilms, setStartLoading, setStopLoading } from '../../redux/slices/filmsSlice';
import { fetchQuickFilms } from '../../redux/slices/quickFilmsSlice';

const Search = () => {
	const [isInputFocused, setIsInputFocused] = useState(false);
	const { searchText } = useSelector((state) => state.search);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const inputRef = useRef(null);

	const changeSearchQuery = (event) => {
		event.preventDefault();

		navigate('/catalog');
		dispatch(setSearchQuery());
		inputRef.current.blur();
	};

	const quickSearch = useCallback(
		useDebounce((searchTextCurrent) => {
			const config = {
				params: {
					keyword: searchTextCurrent,
				},
			};
			dispatch(fetchQuickFilms(config));
		}, 350),
		[searchText],
	);

	const changeSearchText = (event) => {
		const searchTextCurrent = event.target.value;
		dispatch(setSearchText(searchTextCurrent));
		quickSearch(searchTextCurrent);
	};

	return (
		<div
			className={`${
				isInputFocused ? 'max-xsm:-top-[160px]' : 'max-xsm:top-0'
			} relative group transition-[top]`}
		>
			<form onSubmit={changeSearchQuery}>
				<label className='relative flex border-2 rounded-xl border-dark dark:border-blue bg-light dark:bg-dark focus-within:border-blue dark:focus-within:border-light overflow-hidden transition-colors'>
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
						placeholder='Поиск фильмов'
						id='search'
						onFocus={() => setIsInputFocused(true)}
						onBlur={() => setIsInputFocused(false)}
						value={searchText}
						onChange={changeSearchText}
						className='text-ellipsis text-dark dark:text-light xsm:px-4 pl-5 px-2 xsm:py-1 py-0 bg-light dark:bg-dark transition-all lg:w-[200px] outline-none xl:focus:w-[300px] sm:focus:w-[200px] xsm:w-[200px] w-full xsm:text-left text-center'
					/>
				</label>
			</form>
			<QuickResult shown={searchText && isInputFocused} />
		</div>
	);
};

export default Search;
