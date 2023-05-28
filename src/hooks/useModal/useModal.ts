import React, { RefObject, useEffect, useRef, useState } from 'react';

type ModalReturnType = {
	ref: RefObject<HTMLDialogElement>;
	onOpen: () => void;
	onClose: () => void;
};

const useModal = (): ModalReturnType => {
	const ref = useRef<HTMLDialogElement>(null);
	const onOpen = () => ref.current?.showModal();
	const onClose = () => ref.current?.close();

	return { ref, onOpen, onClose };
};

export default useModal;
