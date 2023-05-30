import React from 'react';

interface BurgerProps {
	onclick: () => void;
	wrapperClasses: string;
	buttonClasses: string;
	spanClasses: string;
}

const Burger: React.FC<BurgerProps> = ({ onclick, wrapperClasses, buttonClasses, spanClasses }) => {
	return (
		<button type='button' title='Показать меню' onClick={onclick} className={wrapperClasses}>
			<div className={buttonClasses}>
				<span className={spanClasses}></span>
			</div>
		</button>
	);
};

export default Burger;
