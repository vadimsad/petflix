import React, { useEffect, useRef, useState } from 'react';

const useModal = () => {
	const ref = useRef(null);
	const onOpen = () => ref.current.showModal();
	const onClose = () => ref.current.close();

	const handleClickOutside = (event) => {
		// console.log(ref.current.contains(event.target));
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return { ref, onOpen, onClose };
};

export default useModal;
