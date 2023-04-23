import React, { useState, useEffect, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside/useClickOutside';
import Burger from '../Header/Burger/Burger';

const Sidebar = () => {
	// const isTouchscreen = window.matchMedia(
	// 	'(hover: none) and (pointer: coarse)'
	// ).matches;
	const isSmallDevice = window.matchMedia('(max-width:768px)').matches;

	const [darkTheme, setDarkTheme] = useState(false);
	const [isShown, setIsShown] = useState(!isSmallDevice);

	const ref = useRef(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);

	useEffect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkTheme]);

	useClickOutside(ref, () => setIsShown(false));

	function toggleDarkTheme() {
		setDarkTheme((prevState) => !prevState);
	}

	function toggleSidebar() {
		setIsShown((prevState) => !prevState);
	}

	return (
		<div
			ref={ref}
			className={`${
				isShown ? '' : '-left-[15rem]'
			} scroll-container fixed z-30 inset-0 right-auto overflow-y-auto transition-[left]`}
		>
			<aside
				className={`xl:w-[20rem] w-[15rem] bg-dark dark:bg-light text-light dark:text-dark`}
			>
				<div className={`sidebar-content p-5`}>
					<button onClick={toggleDarkTheme} type='button'>
						Переключить тему
					</button>
					<ul>
						<li>Недавно смотрели:</li>
						<li>Последний отзыв:</li>
						<li>Случайный факт об актере</li>
						<li>Lorem, ipsum dolor.</li>
						<li>Iure, corporis officia.</li>
						<li>Dolor, enim accusantium?</li>
						<li>Itaque, hic harum.</li>
						<li>Commodi, hic nobis.</li>
						<li>Perferendis, veniam dolorum!</li>
						<li>Incidunt, voluptatum cupiditate.</li>
						<li>Vitae, quibusdam laudantium.</li>
						<li>Unde, aperiam commodi?</li>
						<li>Velit, quia nisi.</li>
						<li>Minima, distinctio enim!</li>
						<li>Fugiat, officia magnam?</li>
						<li>Saepe, natus perspiciatis.</li>
						<li>Illum, nobis neque?</li>
						<li>Aliquam, sapiente totam.</li>
						<li>Necessitatibus, officiis. Id?</li>
						<li>Ratione, cumque doloribus.</li>
						<li>Saepe, rem sed.</li>
						<li>Officiis, obcaecati sed.</li>
						<li>Ducimus, mollitia quod.</li>
						<li>A, atque corporis!</li>
						<li>Commodi, consectetur fuga.</li>
						<li>Blanditiis, pariatur eveniet!</li>
						<li>Suscipit, totam voluptates.</li>
						<li>Excepturi, aperiam repudiandae!</li>
						<li>Commodi, ex qui.</li>
						<li>Porro, perspiciatis repellat!</li>
						<li>Culpa, esse explicabo!</li>
						<li>Nam, quis atque.</li>
						<li>Culpa, in expedita.</li>
					</ul>
				</div>
			</aside>
			{isSmallDevice && (
				<Burger
					onclick={toggleSidebar}
					wrapperClasses={`${
						isShown ? 'left-[15rem]' : 'left-0'
					} transition-[left] md:hidden block fixed top-[70%] xsm:p-3 p-2 bg-dark dark:bg-light`}
					buttonClasses='xsm:w-[23px] w-[15px] xsm:h-[28px] h-[20px] relative text-light dark:text-dark transition-[left] block before:absolute before:content-[""] before:h-full xsm:before:w-[2px] before:w-[1px] before:bg-light dark:before:bg-dark before:top-0 before:left-0 after:absolute after:content-[""] after:h-full xsm:after:w-[2px] after:w-[1px] after:bg-light dark:after:bg-dark after:top-0 after:right-0'
					spanClasses='absolute h-full xsm:w-[2px] w-[1px] bg-light dark:bg-dark top-0 left-1/2 -translate-x-1/2'
				/>
			)}
		</div>
	);
};

export default Sidebar;
