import { RefObject, useEffect } from 'react';

type Callback = (event: MouseEvent) => void;

export default function useClickOutside(ref: RefObject<HTMLElement>, callback: Callback) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback(event);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, callback]);
}
