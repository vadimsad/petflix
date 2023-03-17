import { useState, useEffect } from 'react';

const Header = () => {
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
		setDarkTheme(() => !darkTheme);
	}

	return (
		<header>
			<div className='container px-4 text-dark dark:text-light flex justify-between'>
				Header
				<button onClick={toggleDarkTheme}>Toggle theme</button>
			</div>
		</header>
	);
};

export default Header;
