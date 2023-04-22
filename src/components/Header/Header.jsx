import { useState } from 'react';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

const Header = () => {
	const [isShown, setIsShown] = useState(false);

	const toggleMenu = () => {
		setIsShown((prevState) => !prevState);
	};

	return (
		<header
			className={`${
				isShown ? '-translate-y-0' : 'md:-translate-y-0 -translate-y-full'
			} transition-all w-full z-30 md:relative fixed sm:shadow-sm shadow-md`}
		>
			<div className={`relative dark:bg-notsodark bg-notsolight`}>
				<Menu />
				<Burger onclick={toggleMenu} />
			</div>
		</header>
	);
};

export default Header;
