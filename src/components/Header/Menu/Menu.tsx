import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../../Search/Search';

const Menu = () => {
	return (
		<div className='xl:container sm:px-9 px-4 lg:py-6 py-4 text-dark dark:text-light flex sm:flex-row flex-col justify-between items-center lg:text-xl xsm:text-md text-lg sm:gap-y-0 gap-y-3 gap-x-2'>
			<ul className='flex flex-wrap lg:gap-x-4 gap-x-2 sm:gap-y-0 gap-y-3 items-center sm:flex-row flex-col'>
				<li className='relative'>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							isActive
								? 'border-b-2 border-dark dark:border-light'
								: 'after:absolute after:content-[""] after:w-0 after:h-[2px] dark:after:bg-light after:bg-dark after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-1/2 focus-within:after:w-1/2 active:after:w-full after:transition-[width]'
						}
					>
						Главная
					</NavLink>
				</li>
				<li className='relative'>
					<NavLink
						to={'catalog'}
						className={({ isActive }) =>
							isActive
								? 'border-b-2 border-dark dark:border-light'
								: 'after:absolute after:content-[""] after:w-0 after:h-[2px] dark:after:bg-light after:bg-dark after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-1/2 focus-within:after:w-1/2 active:after:w-full after:transition-[width]'
						}
					>
						Каталог
					</NavLink>
				</li>
				<li className='relative'>
					<NavLink
						to={'new'}
						className={({ isActive }) =>
							isActive
								? 'border-b-2 border-dark dark:border-light'
								: 'after:absolute after:content-[""] after:w-0 after:h-[2px] dark:after:bg-light after:bg-dark after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-1/2 focus-within:after:w-1/2 active:after:w-full after:transition-[width]'
						}
					>
						Что нового
					</NavLink>
				</li>
				<li className='relative'>
					{' '}
					<NavLink
						to={'x'}
						className={({ isActive }) =>
							isActive
								? 'border-b-2 border-dark dark:border-light'
								: 'after:absolute after:content-[""] after:w-0 after:h-[2px] dark:after:bg-light after:bg-dark after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-1/2 focus-within:after:w-1/2 active:after:w-full after:transition-[width]'
						}
					>
						Что посмотреть
					</NavLink>
				</li>
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
