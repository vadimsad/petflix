import React, { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside/useClickOutside';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

const Header: React.FC = () => {
	const [isShown, setIsShown] = useState(false);

	const toggleMenu = () => {
		setIsShown((prevState) => !prevState);
	};

	const ref = useRef(null);
	useClickOutside(ref, () => setIsShown(false));

	return (
		<header
			ref={ref}
			className={`${
				isShown ? '-translate-y-0' : 'md:-translate-y-0 -translate-y-full'
			} transition-all w-full md:z-20 z-30 md:relative fixed sm:shadow-sm shadow-md`}
		>
			<div className={`relative dark:bg-notsodark bg-notsolight transition-colors`}>
				<Menu />
				<Burger
					onclick={toggleMenu}
					wrapperClasses='md:hidden block absolute xsm:p-3 p-2 dark:bg-notsodark bg-notsolight shadow-sm left-[80%] shadow-xl transition-colors'
					buttonClasses='relative block xsm:w-[28px] w-[23px] xsm:h-[23px] h-[18px] before:absolute before:content-[""] before:w-full xsm:before:h-[2px] before:h-[1px] before:bg-dark dark:before:bg-light before:top-0 before:left-0 after:absolute after:content-[""] after:w-full xsm:after:h-[2px] after:h-[1px] after:bg-dark dark:after:bg-light after:bottom-0 after:left-0 before:transition-colors after:transition-colors'
					spanClasses='absolute w-full xsm:h-[2px] h-[1px] bg-dark dark:bg-light top-1/2 left-0 -translate-y-1/2 transition-colors'
				/>
			</div>
		</header>
	);
};

export default Header;