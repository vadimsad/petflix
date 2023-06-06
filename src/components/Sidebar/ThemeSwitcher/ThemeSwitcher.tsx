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

	return (
		<button
			type='button'
			onClick={toggleDarkTheme}
			className='relative w-[50px] h-[25px] rounded-full dark:bg-dark bg-light transition-colors before:content-["☀️"] before:absolute before:top-[1px] before:left-[2px] after:content-["🌑"] after:absolute after:top-[1px] after:left-[27px] after:z-10'
		>
			<span
				className={`absolute z-20 top-50% -translate-y-1/2 w-[20px] h-[20px] bg-dark dark:bg-light rounded-full transition-all outline-1 ${
					darkTheme ? 'left-[3px]' : 'left-[28px]'
				}`}
			></span>
		</button>
	);
};

export default ThemeSwitcher;
