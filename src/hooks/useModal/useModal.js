import React, { useEffect, useState } from 'react';

const useModal = (modalRef) => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (showModal) {
			show();
		} else {
			close();
		}

		modalRef.current.addEventListener('close', closeWithState);

		return () => {
			modalRef.current.removeEventListener('close', closeWithState);
		};
	}, [showModal]);

	function show() {
		if (!modalRef.current) return;
		modalRef.current.showModal();
	}
	function close() {
		if (!modalRef.current) return;
		modalRef.current.close();
	}
	function closeWithState() {
		setShowModal(false);
	}

	return [showModal, setShowModal];
};

export default useModal;
