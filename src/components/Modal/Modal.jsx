import React, { forwardRef } from 'react';

const Modal = forwardRef(({ children, onClose }, ref) => {
	const handleClickOutside = (event) => {
		// Если клик был снаружи dialog'а
		if (event.target.isEqualNode(ref.current)) {
			onClose();
		}
	};

	return (
		<dialog
			ref={ref}
			className={`p-0 md:max-w-[50%] xsm:max-w-[75%] max-w-[85%] overflow-visible open:flex flex-col bg-transparent backdrop:bg-darkTransparent`}
			onClick={handleClickOutside}
		>
			<button
				type='button'
				aria-label='Закрыть модальное окно'
				title='Закрыть'
				onClick={onClose}
				className='group p-3 self-end bg-notsolight dark:bg-notsodark rounded-t-xl'
			>
				<div className='relative w-[25px] h-[25px] before:content-[""] before:absolute before:top-0 before:w-[2px] before:h-full before:bg-light before:rotate-[45deg] before:-translate-1/2 before:rounded-full after:content-[""] after:absolute after:top-0 after:w-[2px] after:h-full after:bg-light after:-rotate-[45deg] after:translate-1/2 after:rounded-full group-hover:before:bg-red group-hover:after:bg-red before:transition-colors after:transition-colors'></div>
			</button>
			{children}
		</dialog>
	);
});

export default Modal;
