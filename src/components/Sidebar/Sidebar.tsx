import React, { useState, useEffect, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside/useClickOutside';
import Burger from '../Header/Burger/Burger';
import Logo from '../Logo/Logo';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import RandomFilm from './RandomFilm/RandomFilm';
import ExternalLink from '../ExternalLink/ExternalLink';
import FavoriteFilms from './FavoriteFilms/FavoriteFilms';

const Sidebar = () => {
	const isSmallDevice = window.matchMedia('(max-width:768px)').matches;
	const [isShown, setIsShown] = useState(!isSmallDevice);
	const ref = useRef(null);

	useClickOutside(ref, () => {
		if (!isSmallDevice) return;
		setIsShown(false);
	});

	function toggleSidebar() {
		setIsShown((prevState) => !prevState);
	}

	return (
		<>
			<div ref={ref}>
				<aside
					className={`${
						isShown ? '' : '-left-[15rem]'
					} scroll-container fixed z-30 overflow-y-auto inset-0 right-auto sm:shadow-sm shadow-md xl:w-[20rem] w-[15rem] bg-dark dark:bg-light text-light dark:text-dark transition-all`}
				>
					<div className={`sidebar-content p-3`}>
						<header>
							<div className='flex mb-3 items-center justify-between'>
								<Logo />
								<ExternalLink />
							</div>
							<div className='flex items-center justify-between mb-8'>
								<span className='text-lg'>Переключить тему:</span>
								<ThemeSwitcher />
							</div>
						</header>
						<div className='mb-3'>
							<RandomFilm />
						</div>
						<FavoriteFilms />
					</div>
				</aside>
				{isSmallDevice && (
					<Burger
						onclick={toggleSidebar}
						wrapperClasses={`${
							isShown ? 'left-[15rem]' : 'left-0'
						} md:hidden block fixed z-30 top-[70%] p-2 bg-dark dark:bg-light transition-all`}
						buttonClasses='w-[18px] h-[23px] relative text-light dark:text-dark block before:absolute before:content-[""] before:h-full before:w-[1px] before:bg-light dark:before:bg-dark before:top-0 before:left-0 after:absolute after:content-[""] after:h-full after:w-[1px] after:bg-light dark:after:bg-dark after:top-0 after:right-0 before:transition-colors after:transition-colors'
						spanClasses='absolute h-full w-[1px] bg-light dark:bg-dark top-0 left-1/2 -translate-x-1/2 transition-colors'
					/>
				)}
			</div>
		</>
	);
};

export default Sidebar;
