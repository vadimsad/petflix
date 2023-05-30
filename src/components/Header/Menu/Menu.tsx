import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../../Search/Search';

const Menu = () => {
	return (
		<div className='xl:container sm:px-9 px-4 lg:py-6 py-4 text-dark dark:text-light flex xsm:flex-row flex-col justify-between items-center lg:text-xl xsm:text-md text-lg xsm:gap-y-0 gap-y-3 gap-x-2'>
			<ul className='flex flex-wrap lg:gap-x-4 gap-x-2 xsm:gap-y-0 gap-y-3 items-center xsm:flex-row flex-col'>
				<li>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							isActive ? 'border-b-2 border-dark dark:border-light' : ''
						}
					>
						Главная
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'catalog'}
						className={({ isActive }) =>
							isActive ? 'border-b-2 border-dark dark:border-light' : ''
						}
					>
						Каталог
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'new'}
						className={({ isActive }) =>
							isActive ? 'border-b-2 border-dark dark:border-light' : ''
						}
					>
						Что нового
					</NavLink>
				</li>
				<li className='xsm:border-none border-b dark:border-light border-dark'>Что посмотреть</li>
			</ul>
			<ul className='flex flex-wrap lg:gap-x-4 gap-x-2 items-center xsm:flex-row flex-col xsm:w-auto w-full'>
				<li className='w-full'>
					<Search />
				</li>
			</ul>
		</div>
	);
};

export default Menu;
