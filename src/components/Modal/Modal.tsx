import React, { MouseEvent, ReactNode, RefObject } from 'react';

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
	ref: RefObject<HTMLDialogElement>;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, ref }) => {
	const handleClickOutside = (event: MouseEvent) => {
		if (!ref) return;
		// Если клик был по backdrop
		if (event.target instanceof HTMLDialogElement && event.target.isEqualNode(ref.current)) {
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
				className='group p-3 self-end bg-notsolight dark:bg-notsodark rounded-t-xl outline-none'
			>
				<div className='relative w-[25px] h-[25px] before:content-[""] before:absolute before:top-0 before:w-[2px] before:h-full dark:before:bg-light before:bg-dark before:rotate-[45deg] before:-translate-1/2 before:rounded-full after:content-[""] after:absolute after:top-0 after:w-[2px] after:h-full dark:after:bg-light after:bg-dark after:-rotate-[45deg] after:translate-1/2 after:rounded-full group-hover:before:bg-red group-hover:after:bg-red before:transition-colors after:transition-colors'></div>
			</button>
			{children}
		</dialog>
	);
};
export default Modal;
