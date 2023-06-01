import React, { useEffect, useState } from 'react';

type SwitcherProps = {};

const ThemeSwitcher: React.FC<SwitcherProps> = () => {
	const [darkTheme, setDarkTheme] = useState(false);

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
		setDarkTheme((prevState) => !prevState);
	}

	console.log(darkTheme);

	return (
		<div>
			<button
				type='button'
				onClick={toggleDarkTheme}
				className='relative w-[50px] h-[25px] rounded-full dark:bg-dark bg-light transition-colors'
			>
				<span
					className={`absolute top-50% -translate-y-1/2 rounded-full transition-colors transition-[left] ${
						darkTheme ? 'left-[2px]' : 'left-[28px]'
					}`}
				>
					{darkTheme ? '🌑' : '☀️'}
				</span>
			</button>
		</div>
	);
};

export default ThemeSwitcher;
