import React from 'react';

const Burger = ({ onclick, wrapperClasses, buttonClasses, spanClasses }) => {
	return (
		<div className={wrapperClasses}>
			<button
				type='button'
				title='Показать меню'
				onClick={onclick}
				className={buttonClasses}
			>
				<span className={spanClasses}></span>
			</button>
		</div>
	);
};

export default Burger;
