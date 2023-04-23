import React from 'react';

const Burger = ({ onclick, wrapperClasses, buttonClasses, spanClasses }) => {
	return (
		<button
			type='button'
			title='Показать меню'
			onClick={onclick}
			className={wrapperClasses}
		>
			<div className={buttonClasses}>
				<span className={spanClasses}></span>
			</div>
		</button>
	);
};

export default Burger;
