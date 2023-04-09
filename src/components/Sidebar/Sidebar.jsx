import React, { useState, useEffect } from 'react';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
	const isTouchscreen = window.matchMedia(
		'(hover: none) and (pointer: coarse)'
	).matches;
	const isSmallDevice = window.matchMedia('(max-width:768px)').matches;

	const [darkTheme, setDarkTheme] = useState(false);
	const [isShown, setIsShown] = useState(!isSmallDevice);

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

	function toggleDarkTheme() {
		setDarkTheme(() => !darkTheme);
	}

	function toggleSidebar() {
		setIsShown(() => !isShown);
	}

	return (
		<>
			<aside
				className={`${isTouchscreen ? 'rounded-tr-[15px]' : ''}${
					isShown ? '' : ' -left-full'
				} scroll-container xl:w-[20rem] w-[15rem] fixed inset-0 z-30 inset-0 right-auto overflow-y-auto bg-dark dark:bg-light text-light dark:text-dark transition-[left]`}
			>
				<div className={`sidebar-content p-5`}>
					<button onClick={toggleDarkTheme} type='button'>
						Toggle theme
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
				<a
					className={`${
						isShown ? 'left-[13.5rem]' : '-left-[1.5rem]'
					} inline-block fixed z-30 top-1/2 ${
						styles.button
					} text-dark dark:text-light transition-[left]`}
					onClick={toggleSidebar}
				>
					<span className={`${styles.span}`}>Toggle sidebar</span>
				</a>
			)}
		</>
	);
};

export default Sidebar;
